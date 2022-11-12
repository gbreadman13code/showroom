import React, { useEffect, useState } from 'react';

const Months = ({ months, setActiveMonth }) => {
  return (
    <div>
      {months.map((month, index) => (
        <button key={index} onClick={() => setActiveMonth(month)}>
          {month}
        </button>
      ))}
    </div>
  );
};

export default Months;
