import './App.css';
import Calendar from './components/Calendar';
import Months from './components/Months';
import Years from './components/Years';

function App() {
  console.log(Months);
  return (
    <div className="App">
      <Calendar />
      {/* <Months /> */}
      {/* <Years /> */}
    </div>
  );
}

export default App;
