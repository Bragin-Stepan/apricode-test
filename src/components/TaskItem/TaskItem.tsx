import { observer } from 'mobx-react-lite';
import { TaskModel } from '../../models/TaskModel';
import { useHandle } from './hooks/useHandle';
import { TaskCheckbox, SubtaskForm, SubTaskList } from './components';

interface Props {
  task: TaskModel;
  depth?: number;
}

export const TaskItem = observer(({ task, depth = 0 }: Props) => {
  const { handleToggleChekbox, handleAddSubtask } = useHandle(task);

  return (
    <div className={`${depth > 0 ? 'ml-6' : ''} pt-6`} key={task.id}>
      <TaskCheckbox task={task} onToggle={handleToggleChekbox} />
      <SubtaskForm task={task} onSubmit={handleAddSubtask} />
      <SubTaskList tasks={task.subtasks} depth={depth} />
    </div>
  );
});
