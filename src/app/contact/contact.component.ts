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

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]],
      checkbox: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {}

  sendEmail() {
    const formAction = 'https://formspree.io/f/moqgbpow'; // Replace 'moqgbpowDEMO' with your actual Formspree endpoint
    if (this.contactForm.valid) {
      this.http
        .post(formAction, this.contactForm.value, {
          headers: { Accept: 'application/json' },
        })
        .subscribe({
          next: () => alert('Thanks for your submission!'),
          error: (error) =>
            alert('Oops! There was a problem submitting your form'),
        });
    } else {
      alert('Please fill all required fields correctly.');
    }
  }

  privacyChecked() {
    this.contactForm.patchValue({ checkbox: !this.contactForm.value.checkbox });
    console.log('Checkbox ist jetzt:', this.contactForm.value.checkbox);
  }
}
