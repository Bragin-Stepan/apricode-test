import { TaskModel } from "../../../models/TaskModel";

/** хук для обработки событий */
export const useHandle = (task: TaskModel) => {

  /** обработка переключения чекбокса */
  const handleToggleChekbox = () => {
    task.toggleCompleted();
  };

  /** обработка добавления подзадачи */
  const handleAddSubtask = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const text = formData.get('text') as string;
    if (text.trim()) {
      task.addSubtask(text.trim());
      (e.currentTarget as HTMLFormElement).reset();
    }
  };

  return {handleToggleChekbox, handleAddSubtask}
}