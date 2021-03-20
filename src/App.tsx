import Counter from './components/Counter';
import User from './components/User';

import TimerPadre from './components/TimerPadre';


function App() {
  return (
    <>
      <h1>Hello world - TypeScript</h1>
      <hr/>

      <Counter />

      <hr/>

      <User/>

      <h2>useEffect - useRef</h2>
      <hr/>
      <TimerPadre />

    </>
  );
}

export default App;
