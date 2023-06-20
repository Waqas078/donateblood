import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';

const Barchart = () => {
  const data = [
    {
      year: 'A+',
      value: 38,
    },
    {
      year: 'A-',
      value: 52,
    },
    {
      year: 'B+',
      value: 61,
    },
    {
      year: 'B-',
      value: 145,
    },
    {
      year: 'O+',
      value: 48,
    },
    {
        year: 'O-',
        value: 61,
      },
      {
        year: 'AB+',
        value: 145,
      },
      {
        year: 'AB-',
        value: 48,
      },
  ];
  const config = {
    data,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: {
      position: 'top-left',
    },
  };
  return <Bar {...config} />;
};

export default Barchart;