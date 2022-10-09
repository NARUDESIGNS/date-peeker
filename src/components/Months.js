import React from 'react';
import './Month.css';

function Months() {
	const date = new Date();
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	const allMonths = [];
	for (let i = 0; i < months.length; i++) {
		if (date.getMonth() === i) allMonths.push(<p className="current-month month" key={i}> { months[i] } </p>);
		else allMonths.push(<p className="month" key={i}> { months[i] } </p>);
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