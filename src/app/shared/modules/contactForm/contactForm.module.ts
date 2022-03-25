import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactFormComponent } from './components/contactForm/contactForm.component';
import { EmailService } from './services/email.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule,HttpClientModule],
  declarations: [ContactFormComponent],
  exports: [ContactFormComponent],
  providers: [EmailService],
})
export class ContactFormModule {}
