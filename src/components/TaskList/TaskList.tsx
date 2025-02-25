import { taskStore } from '../../stores/taskStore';
import { TaskItem } from '../TaskItem/TaskItem';

const TaskList = () => {
  return (
    <div className="space-y-6 mb-12">
      {taskStore.tasks.map(task => (
        <>
          <h1 className="text-2xl">
            Задача {taskStore.tasks.indexOf(task) + 1}
          </h1>
          <div className="bg-white px-8 rounded-xl pb-8">
            <TaskItem key={task.id} task={task} depth={0} />
          </div>
        </>
      ))}
    </div>
  );
};

export default TaskList;
