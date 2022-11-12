import React, { useEffect, useState } from 'react';
import Days from '../Days/Days';

const PathDays = ({ pathsData, setActiveDay, activeMonth }) => {
  let [days, setDays] = useState([]);

  useEffect(() => {
    let days = getDaysFromPathsArray(pathsData, activeMonth);
    setDays(days);
  }, [activeMonth, pathsData]);

  return <Days days={days} setActiveDay={setActiveDay} />;
};

export default PathDays;

export function getDaysFromPathsArray(data, month) {
  let daysSet = new Set();
  data.forEach((path) => {
    let date = new Date(path.start_datetime);
    const options = { month: 'long' };
    let monthFromPath = new Intl.DateTimeFormat('ru-ru', options).format(date);
    if (month === monthFromPath) {
      daysSet.add(date.getDate());
    }
  });
  return [...daysSet];
}
