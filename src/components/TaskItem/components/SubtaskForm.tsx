import { observer } from 'mobx-react-lite';
import { WButton } from '../../../shared/Button/WButton';
import { TaskModel } from '../../../models/TaskModel';

interface SubtaskFormProps {
  task: TaskModel;
  onSubmit: (e: React.FormEvent) => void;
}

export const SubtaskForm = observer(({ task, onSubmit }: SubtaskFormProps) => {
  return (
    <form onSubmit={onSubmit} className="subtask-form">
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
  );
});
