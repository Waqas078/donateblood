import React, { useState, useEffect } from "react";
import { Bar } from "@ant-design/plots";
import { getStockData } from "../../../api";

const StockCharts = (setStocks) => {
  const [allData, setallData] = useState([]);
  const fetchallData = async () => {
    const { data } = await getStockData();
    console.log(data);
    setallData(data);
    setStocks(data);
  };
  useEffect(() => {
    fetchallData();
  }, []);
  const data = [
    {
      year: "A+",
      value: allData.Ap,
    },
    {
      year: "A-",
      value: allData.An,
    },
    {
      year: "B+",
      value: allData.Bp,
    },
    {
      year: "B-",
      value: allData.Bn,
    },
    {
      year: "O+",
      value: allData.Op,
    },
    {
      year: "O-",
      value: allData.On,
    },
    {
      year: "AB+",
      value: allData.ABn,
    },
    {
      year: "AB-",
      value: allData.ABp,
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
