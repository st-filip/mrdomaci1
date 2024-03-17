import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TodoService } from 'src/app/services/todo.service';

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

  constructor(private todoService: TodoService) {}

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
      setTimeout(() => {
        this.saved = false;
        this.title = '';
        this.description = '';
        this.priority = '';
      }, 2000);
      this.todoService.addTask(
        new Task(this.title, this.description, this.priority)
      );
    } else {
      this.saved = false;
    }
  }
}
