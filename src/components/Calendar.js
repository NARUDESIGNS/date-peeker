import React from 'react'
import './Calendar.css'
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png'
import { months, specialMonths } from '../utils/data';

function Calendar({ setCurrentView, selectedDay, setSelectedDay, selectedMonth, setSelectedMonth, selectedYear, setSelectedYear, selectedDate }) {
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

  // set current views
  function handleClick(view){
		setCurrentView(view);
	}

  // navigate using left and right buttons
  function navigate(direction) {
    if (direction === "prev") {
      if (selectedMonth === 1) {
        setSelectedMonth(12);
        setSelectedYear(prevYear => prevYear - 1);
      } else {
        setSelectedMonth(nextMonth => nextMonth - 1);
      }
    }
    if (direction === "next") {
      if (selectedMonth === 12) {
        setSelectedMonth(1);
        setSelectedYear(prevYear => prevYear + 1);
      } else {
        setSelectedMonth(prevMonth => prevMonth + 1);
      }
    }
  }

  return (
    <div className="calendar">
        <section className="header"> 
            <button onClick={() => navigate("prev")} className="btn"> 
							<img src={leftArrow} alt="left arrow icon"/>
						</button>
						<div className="month-date">
							<p onClick={() => handleClick("months")} className="month">{ months[selectedMonth - 1] || "October" }</p>
							<p onClick={() => handleClick("years")} className="year">{ selectedYear || 2022 }</p>
						</div>
            <button onClick={() => navigate("next")} className="btn">
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