import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Announcement } from '../../mockData';

@Component({
  selector: 'app-edit-announcement-dialog',
  templateUrl: './edit-announcement-dialog.component.html',
  styleUrls: ['./edit-announcement-dialog.component.scss'],
})
export class EditAnnouncementDialogComponent implements OnInit {
  @Output() public onEdit: EventEmitter<Announcement> =
    new EventEmitter<Announcement>();
  public form!: FormGroup;
  public announcement!: Announcement;
  public hasChange: boolean = false;

  ngOnInit(): void {
    this.formBuilder();
  }

  private formBuilder(): void {
    this.form = new FormGroup({
      title: new FormControl(this.announcement.title, [Validators.required]),
      description: new FormControl(this.announcement.description, [
        Validators.required,
      ]),
    });
    this.checkValueChange();
  }

  private checkValueChange(): void {
    const initialValue = this.form.value;
    this.form.valueChanges.subscribe(() => {
      this.hasChange = Object.keys(initialValue).some(
        (key) => this.form.value[key] != initialValue[key]
      );
    });
  }

  public submit(): void {
    this.onEdit.emit(this.form.value);
  }
}
