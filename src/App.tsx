import { observer } from 'mobx-react-lite';
import { TodoListPage } from './pages/TodoListPage';

const App = observer(() => {
  // Условно тут есть роутинг
  return (
    <div>
      <TodoListPage />
    </div>
  );
});

export default App;
