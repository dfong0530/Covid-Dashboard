import React from "react";
import Chart from "react-apexcharts";
import "./Bar.css";
import BarProps from "../interface/BarInt";

const BarGraph:React.FC<BarProps> = (barData) => {

       return <Chart 
            options={barData.options}
            series={barData.series}
            type="bar"
            width="500"
        />;
}

export default BarGraph;