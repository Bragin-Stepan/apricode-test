import { observer } from 'mobx-react-lite';
import { TaskModel } from '../../../models/TaskModel';

interface TaskCheckboxProps {
  task: TaskModel;
  onToggle: () => void;
}

export const TaskCheckbox = observer(
  ({ task, onToggle }: TaskCheckboxProps) => {
    return (
      <button
        className="flex items-center hover:cursor-pointer mb-2"
        onClick={onToggle}
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
    );
  }
);
