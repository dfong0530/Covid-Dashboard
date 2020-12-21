

export const GetLineData = async () => {
     var res = await fetch("https://localhost:44378/api/GlobalCases");
     var ret = await res.json();

     var dataArray = ret.map((obj: { numberOfCases: number; month:string }) => obj.numberOfCases);
     var categoriesArray = ret.map((obj: { numberOfCases: number; month:string }) => obj.month);


    return {
          
        series: [{
            name: "Global Covid Cases",
            data: dataArray
        }],
        options: {
          chart: {
            height: 600,
            type: 'line',
            width: 2000,
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'New Coronavirus Cases Each Month Globally',
            align: 'center'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], 
              opacity: 0.5
            },
          },
          xaxis: {
            categories: categoriesArray,
          }
        }
      };

}


export const GetBarData = async () => {
    var res = await fetch("https://localhost:44378/api/CasesPerCountry");
    var ret = await res.json();  

    let dataArray = ret.map((obj: { numCases: number; countries:string }) => obj.numCases)
    let categoriesArray = ret.map((obj: { numCases: number; countries:string }) => obj.countries)



    return {
          
        series: [{
          data: dataArray
        }],
        options: {
          title: {
            text: "Number of Coronavirus Cases By Country",
            align:"center"
          },
          chart: {
            type: 'bar',
            height: 200,
            width: 1000
          },
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: categoriesArray,
          }
        }
      };

}

export const GetPieData = async () => {
    var res = await fetch("https://localhost:44378/api/PercentPerCountry");
    var ret = await res.json();

    let dataArray = ret.map((obj: { percentCases1: number; countries: string}) => obj.percentCases1)
    let categoriesArray = ret.map((obj: { percentCases1: number; countries: string}) => obj.countries)



    return  {
          
        series: dataArray,
        options: {
          title: {
            text: "Percent Coronavirus Cases By Country",
            align: "center"
          },
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: categoriesArray,
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
      };
}

