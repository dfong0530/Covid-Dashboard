export default interface BarProps{
    series: {
        data: number[]
      }[],
      options: {
        title: {
          text: string,
          align:string
        },
        chart: {
          type: string,
          height: number,
          width: number
        },
        plotOptions: {
          bar: {
            horizontal: boolean,
          }
        },
        dataLabels: {
          enabled: boolean
        },
        xaxis: {
          categories: string[],
        }
      }
}
