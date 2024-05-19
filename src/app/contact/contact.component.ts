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
import { LanguageService } from '../services/language.service';

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
  messages: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public dialog: MatDialog,
    public dialogService: DialogService,
    private languageService: LanguageService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]],
      checkbox: [false, Validators.requiredTrue],
    });

    let language = this.getCurrentLanguage();
    this.messages = {
      success:
        language === 'de'
          ? ['Dankeschön', 'Deine Nachricht wurde erfolgreich versendet!']
          : ['Thank you', 'Your message has been successfully sent!'],
      error:
        language === 'de'
          ? ['Tut mir leid', 'Ein Fehler ist aufgetreten']
          : ['Sorry', 'An error occurred'],
      fillFields:
        language === 'de'
          ? ['Sorry', 'Bitte fülle alle Felder aus']
          : ['Sorry', 'Please fill out all fields'],
    };
  }

  ngOnInit(): void {}

  sendEmail() {
    // const formAction = 'https://formspree.io/f/moqgbpow';
    const formAction = 'https://formspree.io/f/demo';

    if (this.contactForm.valid) {
      this.http
        .post(formAction, this.contactForm.value, {
          headers: { Accept: 'application/json' },
        })
        .subscribe({
          next: () => {
            this.dialogService.openDialog(
              this.messages.success[0],
              this.messages.success[1]
            );
          },
          error: (error) => {
            this.dialogService.openDialog(
              this.messages.error[0],
              this.messages.error[1]
            );
            console.log(error);
          },
        });
    } else {
      this.dialogService.openDialog(
        this.messages.fillFields[0],
        this.messages.fillFields[1]
      );
    }
  }

  getCurrentLanguage() {
    return this.languageService.getCurrentLanguage();
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
