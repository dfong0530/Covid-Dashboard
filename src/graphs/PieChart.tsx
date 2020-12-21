import React from 'react';
import Chart from 'react-apexcharts';
import "./Pie.css";
import PieProps from "../interface/PieInt";

const PieChart:React.FC<PieProps> = (PieData) => {
    
    return (
        <Chart  
        options={PieData.options}
        series={PieData.series}
        type="pie"
        width={380} />
    );
}

export default PieChart;