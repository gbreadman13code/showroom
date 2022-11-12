import React, { useEffect, useState } from 'react';
import PathInfo from './PathInfo/PathInfo';

const PathsInfo = ({ paths }) => {
  let [activePath, setActivePath] = useState({});
  useEffect(() => {
    setActivePath(paths[0]);
  }, [paths]);
  return (
    <div>
      {paths.map((path) => (
        <button
          key={path.id}
          onClick={() => {
            setActivePath(path);
          }}>
          {path.path_title}
        </button>
      ))}
      {activePath && <PathInfo path={activePath} />}
    </div>
  );
};

export default PathsInfo;
