import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getUser } from './actions';




function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector(state =>  state.user);
  // user reducer's user object
  console.log(user);
  // const counter = useSelector(state => state.counter.counter);

  return (
    <div className="App">
      hello redux saga
    </div>
  );
}

export default App;
