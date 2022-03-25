import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'ps-contact-form',
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.scss'],
})
export class ContactFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: '',
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.emailService.sendEmail(this.form.value);
    this.form.reset();
  }
}
