
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "./store/store"
import { decrement, increament, incrementAsync } from "./store/counter/counterSlice";


function App() {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))}>Increament</button>
        <button onClick={() => dispatch(decrement())}>Increament</button>
      </div>
    </div>
  );
}

export default App
