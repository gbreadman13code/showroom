import React, { useEffect, useState, useRef } from 'react';
import { getPaths } from '../../../../redux/requests/getPaths';
import Container from '../../../templates/Container';
import PathsInfo from '../PathsInfo/PathsInfo';
import PathDays, { getDaysFromPathsArray } from './PathDays/PathDays';
import PathMonths, { getMonthsFromPathsArray } from './PathMonths/PathMonths';
import styles from './PromoPath.module.scss';

import useMobileDetect from 'use-mobile-detect-hook';

import { SwitchTransition, CSSTransition } from 'react-transition-group';

const PromoPaths = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  const mode = 'out-in';
  const cardRef = useRef(null);

  let info = useRef();

  let [pathsData, setPathsData] = useState([]);
  let [activeMonth, _setActiveMonth] = useState('');
  let [paths, setPaths] = useState([]);
  let [activeDay, _setActiveDay] = useState(0);

  useEffect(() => {
    getPaths().then((res) => {
      let pathsData = res.results;
      setPathsData(pathsData);
      let months = getMonthsFromPathsArray(pathsData);
      setActiveMonth(months[0]);
      let days = getDaysFromPathsArray(pathsData, months[0]);
      setActiveDay(days[0]);
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
    _setActiveDay(day);
  }

  return (
    <div
      className={
        isMobile
          ? `${styles.promo_path_mobile} ${styles.promo_path}`
          : styles.promo_path
      }
    >
      <Container>
        <h2>Куда сходить</h2>
        <div
          className={
            isMobile ? `${styles.grid} ${styles.grid__mobile}` : styles.grid
          }
        >
          <PathMonths pathsData={pathsData} setActiveMonth={setActiveMonth} />
          <PathDays
            pathsData={pathsData}
            setActiveDay={setActiveDay}
            activeMonth={activeMonth}
            activeDay={activeDay}
          />
          <SwitchTransition mode={mode}>
            <CSSTransition
              className={'fade'}
              // key={paths[0]?.id}
              key={activeDay}
              nodeRef={cardRef}
              timeout={{ enter: 250, exit: 250 }}
              unmountOnExit
            >
              <PathsInfo paths={paths} customRef={cardRef} />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </Container>
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
