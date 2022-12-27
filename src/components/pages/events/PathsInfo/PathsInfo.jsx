import React, { useEffect, useState, useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import PathInfo from './PathInfo/PathInfo';
import styles from './PathsInfo.module.scss';

import useMobileDetect from 'use-mobile-detect-hook';

const PathsInfo = ({ paths, customRef }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  const mode = 'out-in';
  const infoRef = useRef(null);

  let [activePath, setActivePath] = useState({});
  useEffect(() => {
    setActivePath(paths[0]);
  }, [paths]);

  // console.log(activePath.id);

  return (
    <div
      className={
        isMobile
          ? `${styles.path_info} ${styles.path_info__mobile}`
          : styles.path_info
      }
      ref={customRef}
    >
      <div className={styles.buttons}>
        {paths.map((path) => (
          <button
            key={path.id}
            onClick={() => {
              setActivePath(path);
            }}
            className={path === activePath ? styles.active : null}
          >
            <span>{path.path_title}</span>
          </button>
        ))}
      </div>
      <SwitchTransition mode={mode}>
        <CSSTransition
          className={'fade'}
          key={activePath?.id}
          nodeRef={infoRef}
          timeout={{ enter: 250, exit: 250 }}
          unmountOnExit
        >
          <div ref={infoRef}>
            {activePath && <PathInfo path={activePath} />}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default PathsInfo;
