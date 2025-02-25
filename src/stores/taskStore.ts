import { makeAutoObservable } from "mobx";
import { TaskModel } from "../models/TaskModel";

class TaskStore {
  tasks: TaskModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTask(text: string) {
    this.tasks.push(new TaskModel(text));
  }
}

export const taskStore = new TaskStore();