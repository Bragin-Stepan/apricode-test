import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

export class TaskModel {
  id: string;
  text: string;
  completed: boolean;
  subtasks: TaskModel[];
  parent?: TaskModel;

  constructor(text: string, parent?: TaskModel) {
    makeAutoObservable(this);
    this.id = uuidv4();
    this.text = text;
    this.completed = false;
    this.subtasks = [];
    this.parent = parent;
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
        (subtask) => subtask.completed && subtask.allSubtasksCompleted
      );
    }
    if (this.parent) {
      this.parent.updateCompletion(); 
    }
  }

  get allSubtasksCompleted(): boolean {
    return this.subtasks.every(
      subtask => subtask.completed && subtask.allSubtasksCompleted
    );
  }

  get someSubtasksCompleted() {
    return this.subtasks.some(subtask => subtask.completed);
  }

  addSubtask(text: string) {
    const newSubtask = new TaskModel(text, this);
    this.subtasks.push(newSubtask);
  }
}