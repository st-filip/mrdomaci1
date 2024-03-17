import { Component } from '@angular/core';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css'],
})
export class FormTaskComponent {
  priorities: { value: string; label: string }[] = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ];

  title: string = '';
  description: string = '';
  priority: string = '';
  saved: boolean = false;
  missingFields: string[] = [];

  saveTask(): void {
    this.missingFields = [];

    if (!this.title) {
      this.missingFields.push('Title');
    }

    if (!this.description) {
      this.missingFields.push('Description');
    }

    if (!this.priority) {
      this.missingFields.push('Priority');
    }

    if (this.missingFields.length === 0) {
      this.saved = true;
    } else {
      this.saved = false;
    }
  }
}
