import ApexCharts from "apexcharts";

document.addEventListener("DOMContentLoaded", function () {
  const options: ApexCharts.ApexOptions = {
    series: [
      {
        name: "Series 1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    chart: {
      height: 350,
      type: "area",
      events: {
        mounted: function (chart) {
          chart.windowResizeHandler();
        },
      },
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
      type: "datetime",
      categories: [
        "2022-09-19T00:00:00.000Z",
        "2022-09-20T01:30:00.000Z",
        "2022-09-21T02:30:00.000Z",
        "2022-09-22T03:30:00.000Z",
        "2022-09-23T04:30:00.000Z",
        "2022-09-24T05:30:00.000Z",
        "2022-09-25T06:30:00.000Z",
      ],
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
  };

  const chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
});

document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el: HTMLElement) {
    $el.classList.add("is-active");
  }

  function closeModal($el: HTMLElement) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    const modals = document.querySelectorAll<HTMLElement>(".modal");
    modals.forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  const modalTriggers =
    document.querySelectorAll<HTMLElement>(".js-modal-trigger");
  modalTriggers.forEach(($trigger) => {
    const modalId = $trigger.dataset.target;
    if (modalId) {
      const $target = document.getElementById(modalId);
      if ($target) {
        $trigger.addEventListener("click", () => {
          openModal($target);
        });
      }
    }
  });

  // Add a click event on various child elements to close the parent modal
  const modalCloses = document.querySelectorAll<HTMLElement>(
    ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
  );
  modalCloses.forEach(($close) => {
    const $target = $close.closest<HTMLElement>(".modal");
    if ($target) {
      $close.addEventListener("click", () => {
        closeModal($target);
      });
    }
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });
});
