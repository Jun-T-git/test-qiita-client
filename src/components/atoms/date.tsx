import React from 'react';
import { number } from 'prop-types';
//
// type Props = {
//   year: number;
// };

export const Date = () => {
  //const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  const years = [2006, 2007, 2008];


  return (
    <select name="year">
      {years.map((year) => {
        return (
          <option value={year}>{year}</option>
        );
      })}
    </select>
  );

};
export default Date;