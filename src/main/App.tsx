import React, {useEffect,useState} from "react";
import './App.css';
import LineGraph from "../graphs/LineGraph";
import BarGraph from "../graphs/BarGraph";
import PieChart from "../graphs/PieChart";
import {GetLineData} from "../Api/DataApi";
import {GetPieData} from "../Api/DataApi";
import {GetBarData} from "../Api/DataApi";
import BarProps from "../interface/BarInt";
import LineProps from "../interface/LineInt";
import PieProps from "../interface/PieInt";

function App(){

  const [barData,setBarData] = useState<BarProps | null>(null);
  const [lineData,setLineData] = useState<LineProps | null>(null);
  const [PieData,setPieData] = useState<PieProps | null>(null);

  useEffect(() => {

    async function FetchApiData(){
      setLineData(await GetLineData());
      setBarData(await GetBarData());
      setPieData(await GetPieData());
    }

    FetchApiData();

    console.log(barData);
    console.log(lineData);
    console.log(PieData);

  },[])


  return(
    <React.Fragment>
      
      <div className="top">
        <section className="line">
          {lineData && <LineGraph {...lineData}/>}
        </section>
      </div>
      <div className="bottom">
        <section className="pie">
          {PieData && <PieChart {...PieData} />}
        </section>
        <section className="bar">
        {barData && <BarGraph {...barData}/>}
        </section>
      </div>
    </React.Fragment>
  );
  
}

export default App;


