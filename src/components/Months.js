import React from 'react';
import './Month.css';
import { months } from '../utils/data';

function Months({setCurrentView, setSelectedMonth}) {
	const date = new Date();
	const allMonths = [];

	// fill all months
	for (let i = 0; i < months.length; i++) {
		if (date.getMonth() === i) {
			allMonths.push(
				<p onClick={() => handleClick(i + 1)} className="current-month month" key={i}> { months[i] } </p>
			);
		} else {
			allMonths.push(
				<p onClick={() => handleClick(i + 1)} className="month" key={i}> { months[i] } </p>
			);
		}
	}

	// select month and go back to calendar view
	function handleClick(value){
		setCurrentView("calendar");
		setSelectedMonth(value);
	}

  return (
    <div className="months">
			<h2>Select Month</h2>
			<section className="allMonths">
				{ allMonths }
			</section>
    </div>
  );
}

export default Months;