import React from 'react'
import './Calendar.css'
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png'
import { months, specialMonths } from '../utils/data';

function Calendar({ setCurrentView, selectedDay, setSelectedDay, selectedMonth, selectedYear, selectedDate }) {
	const date = new Date()
  const chosenDate = new Date(selectedDate);
	const days = [];
  const monthDays = specialMonths[months[selectedMonth - 1]] || 31; // handle special months' number of days
  // const selectedDay = 3;

  let startDate = chosenDate.getDay() || date.getDay();
  // fill non-start days with blank spaces
  if (chosenDate.getDay() === 0) startDate = 7; // first day returns 0 and so startDate gets current day instead of chosenDate
  for(let i = 1; i < startDate; i++) {
    days.push(<p key={"key" + i}></p>);
  }

  // fill days
	for(let i = 1; i <= monthDays; i++) {
		if (
      (chosenDate.getFullYear() === date.getFullYear()) && 
      (chosenDate.getMonth() === date.getMonth()) && 
      (i === date.getDate())) 
    {
      days.push( <p onClick={() => setSelectedDay(i)} className="current-day day" key={i}> { i } </p> );
    } else {
      days.push( <p onClick={() => setSelectedDay(i)} className={`day ${selectedDay === i ? "selected-day" : null}`} key={i}> { i } </p> );
    }
	}

  function handleClick(view){
		setCurrentView(view);
	}

  return (
    <div className="calendar">
        <section className="header">
            <button className="btn"> 
							<img src={leftArrow} alt="left arrow icon"/>
						</button>
						<div className="month-date">
							<p onClick={() => handleClick("months")} className="month">{ months[selectedMonth - 1] || "October" }</p>
							<p onClick={() => handleClick("years")} className="year">{ selectedYear || 2022 }</p>
						</div>
            <button className="btn">
							<img src={rightArrow} alt="right arrow icon"/>
						</button>
        </section>

        <section className="days-header">
            <p>Mo</p>
            <p>Tu</p>
            <p>We</p>
            <p>Th</p>
            <p>Fr</p>
            <p>Sa</p>
            <p>Su</p>
        </section>

        <section className="days">
            { days }
        </section>
    </div>
  )
}

export default Calendar;