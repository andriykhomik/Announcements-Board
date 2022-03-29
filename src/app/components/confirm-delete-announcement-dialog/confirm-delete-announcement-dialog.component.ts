import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-delete-announcement-dialog',
  templateUrl: './confirm-delete-announcement-dialog.component.html',
  styleUrls: ['./confirm-delete-announcement-dialog.component.scss'],
})
export class ConfirmDeleteAnnouncementDialogComponent {
  @Output() public onConfirmDelete: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public onConfirm(): void {
    this.onConfirmDelete.emit(true);
  }
}
