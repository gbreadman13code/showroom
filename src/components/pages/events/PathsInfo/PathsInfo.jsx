import React, { useEffect, useState } from "react";
import PathInfo from "./PathInfo/PathInfo";
import styles from "./PathsInfo.module.scss";

const PathsInfo = ({ paths }) => {
  let [activePath, setActivePath] = useState({});
  useEffect(() => {
    setActivePath(paths[0]);
  }, [paths]);
  return (
    <div className={styles.path_info}>
      <div className={styles.buttons}>
        {paths.map((path) => (
          <button
            key={path.id}
            onClick={() => {
              setActivePath(path);
            }}
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
