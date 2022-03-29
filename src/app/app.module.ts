import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddAnnouncementDialogComponent } from './components/add-announcement-dialog/add-announcement-dialog.component';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AnnouncementItemComponent } from './components/announcement-item/announcement-item.component';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmDeleteAnnouncementDialogComponent } from './components/confirm-delete-announcement-dialog/confirm-delete-announcement-dialog.component';
import { ConfirmEditeAnnouncementDialogComponent } from './components/confirm-edite-announcement-dialog/confirm-edite-announcement-dialog.component';
import { EditAnnouncementDialogComponent } from './components/edit-announcement-dialog/edit-announcement-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AddAnnouncementDialogComponent,
    AnnouncementItemComponent,
    ConfirmDeleteAnnouncementDialogComponent,
    ConfirmEditeAnnouncementDialogComponent,
    EditAnnouncementDialogComponent,
    HeaderComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
