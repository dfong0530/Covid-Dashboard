export default interface PieProps{
    series: number[],
        options: {
          title: {
            text: string,
            align: string
          },
          chart: {
            width: number,
            type: string,
          },
          labels: string[],
          responsive: {
            breakpoint: number,
            options: {
              chart: {
                width: number
              },
              legend: {
                position: string
              }
            }
          }[]
        }
}