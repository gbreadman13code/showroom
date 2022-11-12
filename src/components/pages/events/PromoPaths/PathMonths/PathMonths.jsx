import React, { useEffect, useState } from 'react';
import Months from '../Months/Months';

const PathMonths = ({ pathsData, setActiveMonth }) => {
  let [months, setMonths] = useState([]);

  useEffect(() => {
    let months = getMonthsFromPathsArray(pathsData);
    setMonths(months);
  }, [pathsData, setActiveMonth]);

  return <Months months={months} setActiveMonth={setActiveMonth} />;
};

export default PathMonths;

export function getMonthsFromPathsArray(data) {
  let monthsSet = new Set();
  data.forEach((path) => {
    let date = new Date(path.start_datetime);
    const options = { month: 'long' };
    let month = new Intl.DateTimeFormat('ru-ru', options).format(date);
    monthsSet.add(month);
  });
  return [...monthsSet];
}
