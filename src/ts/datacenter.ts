import ApexCharts from "apexcharts";

const series = [103, 34, 34];
const options: ApexCharts.ApexOptions = {
  chart: {
    type: "donut",
    width: "400",
  },
  series,
  labels: ["موفق", "پرداخت نشده", "کنسل شده"],
  colors: ["#00E396", "#FEB019", "#FF4560"],
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
          },
          value: {
            show: true,
            offsetY: -8,
            color: "orange",
            fontSize: "3rem",
            fontFamily: "yekan",
            fontWeight: "bold",
          },
          total: {
            show: true,
            showAlways: true,
            label: "",
            formatter: () => "۵۵%",
          },
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 500,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};

const options2: ApexCharts.ApexOptions = {
  series: [
    {
      name: "Series 1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],

  chart: {
    height: 350,

    events: {
      mounted: (chart) => {
        chart.windowResizeHandler();
      },
    },

    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#FFA500"], // Set the color to orange
  grid: {
    show: false,
  },

  fill: {
    opacity: 0.1, // Adjust the opacity as needed
    type: "solid", // Ensure the fill type is solid
    gradient: {
      opacityFrom: 0.2,
      opacityTo: 0.1,
      stops: [0, 100],
    },
  },
  yaxis: {
    labels: {
      show: false, // Hide Y-axis labels
    },
  },

  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      style: {
        fontSize: "12px",
        fontFamily: "Yekan, sans-serif",
        fontWeight: 700,
        colors: "gray",
      },
    },
  },
  tooltip: {
    theme: "dark",
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};
const options3: ApexCharts.ApexOptions = {
  series: [
    {
      name: "Series1",
      data: [11, 40, 28, 51, 42, 49, 22],
    },
    {
      name: "Series2",
      data: [21, 30, 18, 41, 32, 49, 25],
    },
  ],

  chart: {
    height: 350,

    events: {
      mounted: (chart) => {
        chart.windowResizeHandler();
      },
    },

    type: "area",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    dashArray: 3,
    width: [2, 3],
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["red", "#4169E1", "#FF4560"], // Set the first series to blue

  legend: {
    show: false, // Hide the legend
  },
  fill: {
    opacity: 0.05, // Adjust the opacity as needed
    type: "solid", // Ensure the fill type is solid
    gradient: {
      opacityFrom: 0.2,
      opacityTo: 0.1,
      stops: [0, 100],
    },
  },
  yaxis: {
    labels: {
      formatter: (value: number) => {
        return `${value.toFixed(0)}k`;
      },
      style: {
        fontSize: "14px",
        fontFamily: "Yekan, sans-serif",
        fontWeight: 600,
        colors: ["gray"],
      },

      offsetX: -21,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
  },

  tooltip: {
    theme: "dark",
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  markers: {
    colors: ["#FFA500"], // Set default marker color to orange
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 500,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};
const options4: ApexCharts.ApexOptions = {
  series: [
    {
      name: "Series3",
      data: [0.9, 0.7, 1, 0.6, 1.4, 2.3, 1, 3],
    },
  ],

  chart: {
    height: 250,

    events: {
      mounted: (chart) => {
        chart.windowResizeHandler();
      },
    },

    type: "area",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "straight",
    width: [2, 3],
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#0047AB", "#4169E1", "#FF4560"],

  legend: {
    show: false,
  },
  fill: {
    opacity: 0.05,
    type: "solid",
    gradient: {
      opacityFrom: 0.2,
      opacityTo: 0.1,
      stops: [0, 100],
    },
  },
  yaxis: {
    labels: {
      formatter: (value: number) => {
        return `${value.toFixed(0)}k`;
      },
      style: {
        fontSize: "14px",
        fontFamily: "Yekan, sans-serif",
        fontWeight: 600,
        colors: ["gray"],
      },

      offsetX: -21,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
  },

  tooltip: {
    theme: "dark",
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  markers: {
    colors: ["#FFA500"],
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 500,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};
const options5: ApexCharts.ApexOptions = {
  series: [
    {
      name: "Series3",
      data: [0.9, 0.7, 1, 0.6, 1.4, 2.3, 1, 3],
    },
  ],

  chart: {
    height: 176,

    events: {
      mounted: (chart) => {
        chart.windowResizeHandler();
      },
    },

    type: "area",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "monotoneCubic",
    width: [2, 3],
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["orange", "white", "white"],

  legend: {
    show: false,
  },
  fill: {
    opacity: 0,
    type: "solid",
    gradient: {
      opacityFrom: 0.2,
      opacityTo: 0.1,
      stops: [0, 100],
    },
  },
  yaxis: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
  },

  tooltip: {
    theme: "dark",
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: false,
  },
  markers: {
    colors: ["#FFA500"],
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 500,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};
const options6: ApexCharts.ApexOptions = {
  series: [
    {
      name: "Series3",
      data: [0.9, 0.7, 1, 0.6, 1.4, 2.3, 1, 3],
    },
  ],

  chart: {
    height: 350,

    events: {
      mounted: (chart) => {
        chart.windowResizeHandler();
      },
    },

    type: "area",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "monotoneCubic",
    width: [4, 3],
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#2FAC66"],

  legend: {
    show: false,
  },
  fill: {
    opacity: 0.1,
    type: "solid",
    gradient: {
      opacityFrom: 0,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  yaxis: {
    show: false,
  },

  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      style: {
        fontSize: "12px",
        fontFamily: "Yekan, sans-serif",
        fontWeight: 700,
        colors: "gray",
      },
    },
  },

  tooltip: {
    theme: "dark",
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: false,
  },
  markers: {
    colors: ["#FFA500"],
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 500,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
};

const chart = new ApexCharts(document.querySelector("#chart"), options);
const chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
const chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
const chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
const chart5 = new ApexCharts(document.querySelector("#chart5"), options5);
const chart6 = new ApexCharts(document.querySelector("#chart6"), options6);
chart.render();
chart2.render();
chart3.render().then((e) => {
  setTimeout(() => {
    const chartElement = document.querySelectorAll(
      "#chart3  g.apexcharts-series[seriesName='Series2'] path.apexcharts-area  "
    );

    chartElement.forEach((item) => {
      item.setAttribute("stroke-dasharray", "0");
      console.log(item);
    });
  }, 300);
});

chart4.render();
chart5.render();
chart6.render();
