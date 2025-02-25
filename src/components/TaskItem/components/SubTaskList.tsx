import { observer } from 'mobx-react-lite';
import { TaskModel } from '../../../models/TaskModel';
import { TaskItem } from '../TaskItem';

interface TaskListProps {
  tasks: TaskModel[];
  depth: number;
}

export const SubTaskList = observer(({ tasks, depth }: TaskListProps) => {
  return (
    <>
      {tasks.map(subtask => (
        <TaskItem key={subtask.id} task={subtask} depth={depth + 1} />
      ))}
    </>
  );
});
