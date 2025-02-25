import { observer } from 'mobx-react-lite';
import { TaskModel } from '../../models/TaskModel';
import { useHandle } from './hooks/useHandle';
import { WButton } from '../../shared/Button/WButton';

interface Props {
  task: TaskModel;
  depth?: number;
}

export const TaskItem = observer(({ task, depth = 0 }: Props) => {
  const { handleToggleChekbox, handleAddSubtask } = useHandle(task);

  return (
    <div className={`${depth > 0 ? 'ml-6' : ''} pt-6`} key={task.id}>
      <button
        className="flex items-center hover:cursor-pointer mb-2"
        onClick={handleToggleChekbox}
      >
        <input
          type="checkbox"
          checked={task.completed}
          className="mr-2 hover:cursor-pointer"
        />
        <span
          className={`font-semibold ml-1 ${
            task.completed ? 'line-through text-gray-300' : 'text-black'
          }`}
        >
          {task.text}
        </span>
      </button>

      <form onSubmit={handleAddSubtask} className="subtask-form">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            name="text"
            disabled={task.completed}
            placeholder="Добавить подзадачу"
            className={`py-3 pl-4 pr-8 text-sm bg-gray-100 rounded focus:outline-none focus:border-blue-500 ${
              task.completed ? 'text-gray-200' : 'text-gray-700'
            }`}
          />
          <WButton
            type="submit"
            disabled={task.completed}
            className={`px-5 py-3 text-sm font-semibold text-white rounded-sm ${
              task.completed
                ? 'bg-gray-300'
                : 'bg-blue-400 hover:bg-blue-500 hover:cursor-pointer'
            }`}
          >
            +
          </WButton>
        </div>
      </form>

      {task.subtasks.map(subtask => (
        <TaskItem key={subtask.id} task={subtask} depth={depth + 1} />
      ))}
    </div>
  );
});
