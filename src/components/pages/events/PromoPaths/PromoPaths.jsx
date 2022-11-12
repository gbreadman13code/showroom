import React, { useEffect, useState } from 'react';
import { getPaths } from '../../../../redux/requests/getPaths';
import PathsInfo from '../PathsInfo/PathsInfo';
import PathDays, { getDaysFromPathsArray } from './PathDays/PathDays';
import PathMonths, { getMonthsFromPathsArray } from './PathMonths/PathMonths';

const PromoPaths = () => {
  let [pathsData, setPathsData] = useState([]);
  let [activeMonth, _setActiveMonth] = useState('');
  let [paths, setPaths] = useState([]);

  useEffect(() => {
    getPaths().then((res) => {
      let pathsData = res.results;
      setPathsData(pathsData);
      let months = getMonthsFromPathsArray(pathsData);
      setActiveMonth(months[0]);
      let days = getDaysFromPathsArray(pathsData, months[0]);
      setPaths(getPathToDisplay(pathsData, months[0], days[0]));
    });
  }, []);

  function setActiveMonth(month) {
    _setActiveMonth(month);
    let days = getDaysFromPathsArray(pathsData, month);
    setPaths(getPathToDisplay(pathsData, month, days[0]));
  }

  function setActiveDay(day) {
    setPaths(getPathToDisplay(pathsData, activeMonth, day));
  }

  return (
    <div>
      <h2>Куда сходить</h2>
      <div>
        <PathMonths pathsData={pathsData} setActiveMonth={setActiveMonth} />
        <PathDays pathsData={pathsData} setActiveDay={setActiveDay} activeMonth={activeMonth} />
        <PathsInfo paths={paths} />
      </div>
    </div>
  );
};

export default PromoPaths;

function getPathToDisplay(pathsData, month, day) {
  return pathsData.filter((path) => {
    let date = new Date(path.start_datetime);
    const options = { month: 'long' };
    let monthFromPath = new Intl.DateTimeFormat('ru-ru', options).format(date);
    return (monthFromPath === month) & (date.getDate() === day);
  });
}
