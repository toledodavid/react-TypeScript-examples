import Counter from './components/Counter';
import User from './components/User';

import TimerPadre from './components/TimerPadre';
import ContadorReducer from './components/ContadorReducer';


function App() {
  return (
    <>
      <h1>Hello world - TypeScript</h1>
      <hr/>

      <Counter />

      <User/>

      <hr/>

      <h2>useEffect - useRef</h2>
      <TimerPadre />

      <hr/>

      <h2>useReduder</h2>
      <ContadorReducer/>

    </>
  );
}

export default App;
