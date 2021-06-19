import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import {Button} from "react-bootstrap";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <Button variant="primary" onClick={() => dispatch(increment())}>
        +
      </Button>
      <Button variant="danger" onClick={() => dispatch(decrement())}>
        -
      </Button>
  
      {isLogged ? <h3>Valuable info I shouldnt see</h3> : ""}
    </div>
  );
}

export default App;
