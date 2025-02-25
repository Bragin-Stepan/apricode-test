import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

export class TaskModel {
  id: string;
  text: string;
  completed: boolean;
  subtasks: TaskModel[];

  constructor(text: string) {
    makeAutoObservable(this);
    this.id = uuidv4();
    this.text = text;
    this.completed = false;
    this.subtasks = [];
  }

  private completeAllSubtasksRecursively() {
    this.subtasks.forEach(subtask => {
      subtask.completed = true;
      subtask.completeAllSubtasksRecursively();
    });
  }

  private uncompleteAllSubtasksRecursively() {
    this.subtasks.forEach(subtask => {
      subtask.completed = false;
      subtask.uncompleteAllSubtasksRecursively();
    });
  }

  toggleCompleted() {
    this.completed = !this.completed;

    if (this.completed) {
      this.completeAllSubtasksRecursively();
    } else {
      this.uncompleteAllSubtasksRecursively();
    }

    this.updateCompletion();
  }

  updateCompletion() {
    if (this.subtasks.length > 0) {
      this.completed = this.subtasks.every(
        subtask => subtask.completed && subtask.allSubtasksCompleted
      );
    }
  }

  get allSubtasksCompleted(): boolean {
    return this.subtasks.every(subtask => subtask.completed && subtask.allSubtasksCompleted);
  }

  get someSubtasksCompleted() {
    return this.subtasks.some(subtask => subtask.completed);
  }

  addSubtask(text: string) {
    this.subtasks.push(new TaskModel(text));
  }
}