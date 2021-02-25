import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <Header />
      <div className="container pt-5">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
