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
  const [selectedDay, setSelectedDay] = useState("");
  const [exportDate, setExportDate] = useState(null);

  // initialize dates
  useEffect(() => {
    const date = new Date();
    setSelectedDay(date.getDate());
    setSelectedMonth(date.getMonth() + 1);
    setSelectedYear(date.getFullYear());
  }, []);

  // compute date based on selected month and year
  useEffect(() => {
    const newSelectedDate = new Date(`${selectedYear} ${selectedMonth} 01`);
    const newExportDate = new Date(`${selectedYear} ${selectedMonth} ${selectedDay}`);
    setSelectedDate(newSelectedDate);
    setExportDate(newExportDate);
    // eslint-disable-next-line 
  }, [selectedDay, selectedYear, selectedMonth]);

  return (
    <>
      <div className="App">
        { 
          currentView === "calendar" && 
          <Calendar 
          setCurrentView={setCurrentView} 
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
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
      <h3 className="selected-date">{ exportDate ? exportDate.toLocaleDateString() : new Date().toLocaleDateString() }</h3>
    </>
  );
}

export default App;
