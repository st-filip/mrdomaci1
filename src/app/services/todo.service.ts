import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable()
export class TodoService {
  tasks: Task[] = [
    new Task('Task1', 'Description1', 'High'),
    new Task('Task2', 'Description2', 'Low'),
  ];

  addTask(task: Task) {
    this.tasks.push(task);
  }
}
