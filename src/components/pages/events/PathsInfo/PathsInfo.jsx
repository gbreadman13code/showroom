import React, { useEffect, useState } from "react";
import PathInfo from "./PathInfo/PathInfo";
import styles from "./PathsInfo.module.scss";

import useMobileDetect from "use-mobile-detect-hook";

const PathsInfo = ({ paths }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  let [activePath, setActivePath] = useState({});
  useEffect(() => {
    setActivePath(paths[0]);
  }, [paths]);

  return (
    <div
      className={
        isMobile
          ? `${styles.path_info} ${styles.path_info__mobile}`
          : styles.path_info
      }
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

      {activePath && <PathInfo path={activePath} />}
    </div>
  );
};

export default PathsInfo;
