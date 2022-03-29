import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmEditeAnnouncementDialogComponent } from './components/confirm-edite-announcement-dialog/confirm-edite-announcement-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteAnnouncementDialogComponent } from './components/confirm-delete-announcement-dialog/confirm-delete-announcement-dialog.component';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from './app.service';
import { AddAnnouncementDialogComponent } from './components/add-announcement-dialog/add-announcement-dialog.component';
import { EditAnnouncementDialogComponent } from './components/edit-announcement-dialog/edit-announcement-dialog.component';
import { Announcement, announcements } from './mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public announcements: Announcement[] = announcements;
  public tempAnnouncements: Announcement[] = [];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private dialog: MatDialog, private appService: AppService) {}

  ngOnInit(): void {
    this.searchListener();
  }

  private searchListener(): void {
    this.tempAnnouncements = this.announcements;
    this.appService.searchValue$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.searchAnnouncements());
  }

  public searchAnnouncements(): void {
    this.tempAnnouncements = this.announcements.filter((a: Announcement) => {
      return a.title
        .toLowerCase()
        .includes(this.appService.searchValue$.getValue().toLowerCase());
    });
  }

  public addAnnouncement(): void {
    const dialogOpen = this.dialog.open(AddAnnouncementDialogComponent, {
      width: `450px`,
      height: 'auto',
    });
    dialogOpen.componentInstance.onCreate.subscribe(
      (newAnnouncement: Announcement) => {
        this.announcements.push({
          ...newAnnouncement,
          id: this.announcements.length + 1,
        });
        this.tempAnnouncements = this.announcements;
        this.appService.searchValue$.next('');
      }
    );
  }

  public deleteAnnouncement(announcement: Announcement): void {
    const dialogOpen = this.dialog.open(
      ConfirmDeleteAnnouncementDialogComponent,
      {
        width: `450px`,
      }
    );
    dialogOpen.componentInstance.onConfirmDelete.subscribe(
      (isDelete: boolean) => {
        if (isDelete) {
          this.announcements = this.announcements.filter(
            (announcementItem: Announcement) => {
              return announcementItem.id !== announcement.id;
            }
          );
          this.tempAnnouncements = this.announcements;
          this.appService.searchValue$.next('');
        }
      }
    );
  }

  public editAnnouncement(announcement: Announcement): void {
    const i = this.announcements.indexOf(announcement);
    const dialogOpen = this.dialog.open(EditAnnouncementDialogComponent, {
      width: `450px`,
    });
    dialogOpen.componentInstance.announcement = announcement;
    dialogOpen.componentInstance.onEdit.subscribe(
      (newFormValue: Announcement) => {
        if (newFormValue.title && newFormValue.description) {
          this.dialog
            .open(ConfirmEditeAnnouncementDialogComponent, {
              width: `450px`,
            })
            .componentInstance.onSaveChanges.subscribe((isConfirm: boolean) => {
              if (isConfirm && i !== -1) {
                this.announcements[i] = {
                  ...newFormValue,
                  date: new Date(),
                  id: announcement.id,
                  isEdited: true,
                  isOpen: announcement.isOpen,
                };
              }
              this.tempAnnouncements = this.announcements;
              this.appService.searchValue$.next('');
            });
        }
      }
    );
  }

  public showSimilarAnnouncements(selectedAnnouncement: Announcement): void {
    selectedAnnouncement.isOpen = !selectedAnnouncement.isOpen;
    const similarArr = this.findSimilarAnnouncements(
      selectedAnnouncement
    ).slice(0, 3);
    this.tempAnnouncements = [selectedAnnouncement, ...similarArr];
    if (this.tempAnnouncements.every((a: Announcement) => !a.isOpen)) {
      this.tempAnnouncements = this.announcements;
    }
  }

  private findSimilarAnnouncements(
    selectedAnnouncement: Announcement
  ): Announcement[] {
    return this.announcements.filter(
      (announcementItem: Announcement) =>
        this.isSimilarText(
          announcementItem.title,
          selectedAnnouncement.title
        ) &&
        this.isSimilarText(
          announcementItem.description,
          selectedAnnouncement.description
        ) &&
        announcementItem.id !== selectedAnnouncement.id
    );
  }

  private isSimilarText(text1: string, text2: string): boolean {
    return !!text1.split(/[\s,.:"()?!*;_+=]+/).find((a) => text2.includes(a));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
