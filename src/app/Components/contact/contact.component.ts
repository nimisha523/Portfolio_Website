import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  onSubmit(form: any): void {
    // Log form data to console
    console.log('Form Submitted!', form.value);

    // Show an alert with form data
    alert(`Thank you, ${form.value.name}! Your message has been submitted.`);

    // Optionally reset the form
    form.reset();
  }
}
