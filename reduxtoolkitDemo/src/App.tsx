
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./store/store"
import { decrement, increament } from "./store/counter/counterSlice";


function App() {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increament())}>Increament</button>
        <button onClick={() => dispatch(decrement())}>Increament</button>
      </div>
    </div>
  );
}

export default App
