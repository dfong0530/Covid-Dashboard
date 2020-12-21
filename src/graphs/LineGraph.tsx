import React from "react";
import Chart from "react-apexcharts";
import "./Line.css";
import LineProps from "../interface/LineInt";

const LineGraph:React.FC<LineProps> = (lineData) => {

    return (
        <Chart  
        options={lineData.options} 
        series={lineData.series} 
        type="line" height={350} />
    );
}

export default LineGraph;

