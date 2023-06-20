import React, { useState, useEffect } from "react";
import { Bar } from "@ant-design/plots";

const StockCharts = () => {
  const data = [
    {
      year: "A+",
      value: 10,
    },
    {
      year: "A-",
      value: 15,
    },
    {
      year: "B+",
      value: 14,
    },
    {
      year: "B-",
      value: 9,
    },
    {
      year: "O+",
      value: 18,
    },
    {
      year: "O-",
      value: 13,
    },
    {
      year: "AB+",
      value: 12,
    },
    {
      year: "AB-",
      value: 12,
    },
  ];
  const config = {
    data,
    xField: "value",
    yField: "year",
    seriesField: "year",
    legend: {
      position: "top-left",
    },
  };
  return <Bar {...config} />;
};

export default StockCharts;
