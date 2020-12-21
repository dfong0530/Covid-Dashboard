export default interface LineProps{
  series: {
    name: string,
    data: number[]
  }[],
  options: {
    chart: {
      height: number,
      type: string,
      width: number,
      zoom: {
        enabled: boolean
      }
    },
    dataLabels: {
      enabled: boolean
    },
    stroke: {
      curve: string
    },
    title: {
      text: string,
      align: string
    },
    grid: {
      row: {
        colors: string[], 
        opacity: number
      },
    },
    xaxis: {
      categories: string[],
    }
  }
}


