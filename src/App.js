import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getUser, increasement, descreasement } from './actions';




function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector(state =>  state.userTest);
  // user reducer's user object
  console.log(user);
  const counter = useSelector(state => state.counter);
  console.log(counter);

  return (
    <div className="App">
      {user && <h6> hello {user} </h6>}
      <br/>
      count: {counter}
      <br/>
      <button onClick={()=>{dispatch(increasement(5))}}>INCREASEMENT</button>
      <button onClick={()=>{dispatch(descreasement())}}>DESCREASEMENT</button>
    </div>
  );
}

export default App;
