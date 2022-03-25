import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { ContactFormInterface } from '../types/contactForm.Interface';

@Injectable()
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(formValues: ContactFormInterface) {
    return this.http.post(environment.apiUrl, formValues).subscribe((r) => {
      alert("Message sent! I'll response in 2 days!");
    });
  }
}
