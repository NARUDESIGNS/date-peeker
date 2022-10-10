import React from 'react';
import { useEffect, useRef } from 'react';
import './Years.css';

function Years({setCurrentView, setSelectedYear}) {
  const currentYear = useRef();
  const date = new Date();
  const year = date.getFullYear();
  const allYears = [];

  // get next 100 and previous 100 years
  for (let i = year + 100; i > year - 100; i--){
		if (year === i) {
      allYears.push(
        <p onClick={() => handleClick(i)} ref={currentYear} className="current-year year" key={i}> { i } </p>
      );
    } else {
      allYears.push(
        <p onClick={() => handleClick(i)} className="year" key={i}> { i } </p>
      );
    }
  }

  // set year and go back to calendar view
  function handleClick(value){
    setCurrentView("calendar");
    setSelectedYear(value);
  }
  
  // scroll current year into view
  useEffect(() => {
    currentYear.current.scrollIntoView({block: "center"});
  }, [])

  return (
    <div className="years">
			<h2>Select Year</h2>
			<section className="allYears">
				{ allYears }
			</section>
    </div>
  )
}

export default Years;