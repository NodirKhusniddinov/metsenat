<template>
  <div
    id="chart"
    class="container mx-auto px-6 py-6 bg-white rounded-xl border border-[rgba(235,238,252,1)] mt-7"
  >
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: function () {
    return {
      series: [
        {
          name: 'Homiylar',
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
        },
        {
          name: 'Talabalar',
          data: [2, 1.5, 15, 4, 14, 24, 12, 5, 7, 8, 8, 8, 5, 4, 6, 2, 17, 5],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          toolbar: {
            show: false,
          },
        },
        forecastDataPoints: {
          count: 7,
        },
        stroke: {
          width: 5,
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '1/11/2000',
            '2/11/2000',
            '3/11/2000',
            '4/11/2000',
            '5/11/2000',
            '6/11/2000',
            '7/11/2000',
            '8/11/2000',
            '9/11/2000',
            '10/11/2000',
            '11/11/2000',
            '12/11/2000',
            '1/11/2001',
            '2/11/2001',
            '3/11/2001',
            '4/11/2001',
            '5/11/2001',
            '6/11/2001',
          ],
          tickAmount: 10,

          labels: {
            formatter: function (value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), 'dd MMM')
            },
          },
        },
        title: {
          text: 'Homiylar va talabalar soni',
          align: 'left',
          style: {
            fontSize: '16px',
            color: '#666',
          },
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          floating: true,
          offsetY: -15,
        },
        fill: {
          type: 'solid',
        },
        colors: ['#747EFA', '#FF92AE'],
      },
    }
  },
}
</script>
<style scoped>
.chart-title {
  margin-bottom: 24px;
}
</style>
