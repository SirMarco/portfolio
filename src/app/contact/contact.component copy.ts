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
import { FooterComponent } from '../footer/footer.component';
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
            if (this.getCurrentLanguage() == 'de') {
              this.dialogService.openDialog(
                'Dankeschön',
                'Deine Nachricht wurde erfolgreich versendet!'
              );
            } else {
              this.dialogService.openDialog(
                'Thank you',
                'Your message has been successfully sent!'
              );
            }
          },
          error: (error) => {
            if (this.getCurrentLanguage() == 'de') {
              this.dialogService.openDialog(
                'Tut mir leid',
                'Ein Fehler ist aufgetreten'
              );
            } else {
              this.dialogService.openDialog('Sorry', 'An error occurred');
            }
            console.log(error);
          },
        });
    } else {
      if (this.getCurrentLanguage() == 'de') {
        this.dialogService.openDialog('Sorry', 'Bitte fülle alle Felder aus');
      } else {
        this.dialogService.openDialog('Sorry', 'Please fill out all fields');
      }
    }
  }

  getCurrentLanguage() {
    return this.languageService.getCurrentLanguage();
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
