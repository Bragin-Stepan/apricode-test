import React from 'react';
import TaskList from '../../components/TaskList/TaskList';
import { taskStore } from '../.././stores/taskStore';
import { WButton } from '../../shared/Button/WButton';

export const TodoListPage = () => {
  const [newTaskText, setNewTaskText] = React.useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskText.trim()) {
      taskStore.addTask(newTaskText.trim());
      setNewTaskText('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">APRICODE TODO</h1>
      <form
        onSubmit={handleAddTask}
        className="mb-6 flex gap-2 bg-white p-6 rounded-xl"
      >
        <input
          type="text"
          value={newTaskText}
          onChange={e => setNewTaskText(e.target.value)}
          placeholder="Введите задачу"
          className="py-3 text-xl border-b-2 border-gray-200 flex-1 focus:border-blue-400 outline-none"
        />
        <WButton type="submit">Добавить</WButton>
      </form>
      <TaskList />
    </div>
  );
};
