import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Announcement } from '../../mockData';

@Component({
  selector: 'app-announcement-item',
  templateUrl: './announcement-item.component.html',
  styleUrls: ['./announcement-item.component.scss'],
})
export class AnnouncementItemComponent {
  @Input() public announcementItem!: Announcement;
  @Output() public onDelete: EventEmitter<Announcement> =
    new EventEmitter<Announcement>();
  @Output() public onEdit: EventEmitter<Announcement> =
    new EventEmitter<Announcement>();
  @Output() public onShowSimilar: EventEmitter<Announcement> =
    new EventEmitter<Announcement>();
  public isDetails: boolean = false;

  constructor(public dialog: MatDialog) {}

  public delete(): void {
    this.onDelete.emit(this.announcementItem);
  }

  public edit(): void {
    this.onEdit.emit(this.announcementItem);
  }

  public showDetails(): void {
    this.isDetails = !this.isDetails;
    this.onShowSimilar.emit(this.announcementItem);
  }
}
