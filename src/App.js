import { useEffect, useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import Months from './components/Months';
import Years from './components/Years';

function App() {
  // define states
  const [currentView, setCurrentView] = useState("calendar");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  // initialize dates
  useEffect(() => {
    const date = new Date();
    setSelectedMonth(date.getMonth() + 1);
    setSelectedYear(date.getFullYear());
  }, []);

  // compute date based on selected month and year
  useEffect(() => {
    setSelectedDate( new Date(`${selectedYear} ${selectedMonth} 01`) );
    console.log(selectedDate);
    // eslint-disable-next-line 
  }, [selectedYear, selectedMonth]);

  return (
    <div className="App">
      { 
        currentView === "calendar" && 
        <Calendar 
          setCurrentView={setCurrentView} 
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          selectedDate={selectedDate}
        />
      }

      { 
        currentView === "months" && 
        <Months setCurrentView={setCurrentView}  setSelectedMonth={setSelectedMonth}/>
      }

      { 
        currentView === "years" && 
        <Years setCurrentView={setCurrentView} setSelectedYear={setSelectedYear} />
      }
    </div>
  );
}

export default App;
