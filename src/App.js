import TodosView from './components/Todo/TodosView';
import Counter from './components/counter/Counter';
import { Switch, Route, Link } from 'react-router-dom';

// export default function App() {
//   return (
//     <div>
//       <TodosView />
//     </div>
//   );
// }

export default function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/counter">Счётчик</Link>
        </li>
        <li>
          <Link to="/todos">Заметки</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/counter">
          <Counter initValue={999} />
        </Route>

        <Route path="/todos">
          <TodosView />
        </Route>
      </Switch>
    </>
    // <div>
    //   <Counter initValue={999} />
    // </div>
  );
}
