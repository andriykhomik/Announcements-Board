import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-edite-announcement-dialog',
  templateUrl: './confirm-edite-announcement-dialog.component.html',
  styleUrls: ['./confirm-edite-announcement-dialog.component.scss'],
})
export class ConfirmEditeAnnouncementDialogComponent {
  @Output() public onSaveChanges: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public confirmChanges(): void {
    this.onSaveChanges.emit(true);
  }
}
