import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Announcement} from "../../mockData";

@Component({
  selector: 'app-add-announcement-dialog',
  templateUrl: './add-announcement-dialog.component.html',
  styleUrls: ['./add-announcement-dialog.component.scss']
})
export class AddAnnouncementDialogComponent implements OnInit {
  @Output() public onCreate: EventEmitter<Announcement> =
    new EventEmitter<Announcement>();
  public form!: FormGroup;

  ngOnInit(): void {
    this.formBuilder();
  }

  private formBuilder(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      details: new FormControl('', [Validators.required]),
    });
  }

  public submit(): void {
    if (!this.form.invalid) {
      const newAnnouncement: Announcement = {
        title: this.form.value.title.trim(),
        description: this.form.value.details.trim(),
        date: new Date(),
        isEdited: false,
        isOpen: false,
      };
      this.onCreate.emit(newAnnouncement);
    }
  }
}
