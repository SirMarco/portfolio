import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    MatDialogModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public dialog: MatDialog,
    public dialogService: DialogService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]],
      checkbox: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {}

  sendEmail() {
    const formAction = 'https://formspree.io/f/moqgbpow';
    if (this.contactForm.valid) {
      this.http
        .post(formAction, this.contactForm.value, {
          headers: { Accept: 'application/json' },
        })
        .subscribe({
          next: () => {
            this.dialogService.openDialog(
              'Dankeschön',
              'Deine Nachricht wurde erfolgreich versendet!'
            );
          },
          error: (error) => {
            this.dialogService.openDialog(
              'Sorry',
              'Ein Fehler ist aufgetreten'
            );
            console.log(error);
          },
        });
    } else {
      this.dialogService.openDialog('Sorry', 'Bitte fülle alle Felder aus');
    }
  }
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
