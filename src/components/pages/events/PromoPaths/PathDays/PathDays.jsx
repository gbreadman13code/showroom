import React, { useEffect, useState } from 'react';
import Days from '../Days/Days';
import styles from './PathDays.module.scss';

const PathDays = ({ pathsData, setActiveDay, activeMonth, activeDay }) => {
  let [days, setDays] = useState([]);

  useEffect(() => {
    let days = getDaysFromPathsArray(pathsData, activeMonth);
    setDays(days);
  }, [activeMonth, pathsData]);

  return <Days days={days} setActiveDay={setActiveDay} activeDay={activeDay} />;
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
  return [...daysSet].sort((d1, d2) => {
    return d1 < d2;
  });
}
