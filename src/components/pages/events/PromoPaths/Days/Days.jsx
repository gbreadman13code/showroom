import React, { useEffect, useState } from 'react';

const Days = ({ days, setActiveDay }) => {
  return (
    <div>
      {days.map((day, index) => (
        <button key={index} onClick={() => setActiveDay(day)}>
          {day}
        </button>
      ))}
    </div>
  );
};

export default Days;
