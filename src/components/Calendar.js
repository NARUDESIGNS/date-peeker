import React from 'react'
import './Calendar.css'
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png'

function Calendar() {
	const days = [];
	for(let i = 1; i <= 31; i++) {
		days.push( <p key={i}> { i } </p> );
	}
  return (
    <div className="calendar">
        <section className="header">
            <button className="btn"> 
							<img src={leftArrow} alt="left arrow icon"/>
						</button>
						<div className="month-date">
							<p className="month">October</p>
							<p className="year">2022</p>
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
            {/* List of days of the week */}
            {/* <Day /> */}
            { days }
        </section>
    </div>
  )
}

export default Calendar;