interface BookingData {
  bookingId: string;
  hotel: string;
  bookingDate: string;
  stayDuration: string;
  guests: string;
  payment: string;
  status: string;
  provider: string;
  actions: string;
}

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#myTable tbody") as HTMLElement;
  const pagination = document.getElementById("pagination");

  const data: BookingData[] = [
    {
      bookingId: "778899001",
      hotel: "هتل اسپیناس Deluxe Room - Triple",
      bookingDate: "1403/03/8 7:44",
      stayDuration: "1403/03/8 1403/03/10 یک اتاق دو شب",
      guests: "test testt 2 مهمان",
      payment: "غیر قابل استرداد<br>137.5 USD",
      status: "تایید شده",
      provider: "چارتر کننده API interface",
      actions:
        '<a href="" class="underline text-orange-400">جزییات</a><br><a href="" class="underline text-green-400">پرداخت</a>',
    },

    {
      bookingId: "778899010",
      hotel: "هتل اسپیناس Deluxe Room - Suite",
      bookingDate: "1403/03/8 11:00",
      stayDuration: "1403/03/8 1403/03/10 یک اتاق دو شب",
      guests: "test testt 4 مهمان",
      payment: "قابل استرداد<br>200 USD",
      status: "تایید شده",
      provider: "چارتر کننده API interface",
      actions:
        '<a href="" class="underline text-orange-400">جزییات</a><br><a href="" class="underline text-green-400">پرداخت</a>',
    },
    {
      bookingId: "778899001",
      hotel: "هتل اسپیناس Deluxe Room - Triple",
      bookingDate: "1403/03/8 7:44",
      stayDuration: "1403/03/8 1403/03/10 یک اتاق دو شب",
      guests: "test testt 2 مهمان",
      payment: "غیر قابل استرداد<br>137.5 USD",
      status: "تایید شده",
      provider: "چارتر کننده API interface",
      actions:
        '<a href="" class="underline text-orange-400">جزییات</a><br><a href="" class="underline text-green-400">پرداخت</a>',
    },

    {
      bookingId: "778899010",
      hotel: "هتل اسپیناس Deluxe Room - Suite",
      bookingDate: "1403/03/8 11:00",
      stayDuration: "1403/03/8 1403/03/10 یک اتاق دو شب",
      guests: "test testt 4 مهمان",
      payment: "قابل استرداد<br>200 USD",
      status: "تایید شده",
      provider: "چارتر کننده API interface",
      actions:
        '<a href="" class="underline text-orange-400">جزییات</a><br><a href="" class="underline text-green-400">پرداخت</a>',
    },
    {
      bookingId: "778899001",
      hotel: "هتل اسپیناس Deluxe Room - Triple",
      bookingDate: "1403/03/8 7:44",
      stayDuration: "1403/03/8 1403/03/10 یک اتاق دو شب",
      guests: "test testt 2 مهمان",
      payment: "غیر قابل استرداد<br>137.5 USD",
      status: "تایید شده",
      provider: "چارتر کننده API interface",
      actions:
        '<a href="" class="underline text-orange-400">جزییات</a><br><a href="" class="underline text-green-400">پرداخت</a>',
    },

    {
      bookingId: "778899010",
      hotel: "هتل اسپیناس Deluxe Room - Suite",
      bookingDate: "1403/03/8 11:00",
      stayDuration: "1403/03/8 1403/03/10 یک اتاق دو شب",
      guests: "test testt 4 مهمان",
      payment: "قابل استرداد<br>200 USD",
      status: "تایید شده",
      provider: "چارتر کننده API interface",
      actions:
        '<a href="" class="underline text-orange-400">جزییات</a><br><a href="" class="underline text-green-400">پرداخت</a>',
    },
  ];

  const rowsPerPage = 5;
  let currentPage = 1;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  function displayTable(page: number): void {
    if (!tableBody) return;

    tableBody.innerHTML = "";

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = data.slice(start, end);

    paginatedData.forEach((row: BookingData) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
                  <td><p class="p-4">${row.bookingId}<br />hjk-78579 --</p></td>
                  <td><p class="p-4">${row.hotel}</p></td>
                  <td><p class="p-4">${row.bookingDate}</p></td>
                  <td><p class="p-4">${row.stayDuration}</p></td>
                  <td><p class="p-4">${row.guests}</p></td>
                  <td><div class="p-4">${row.payment}</div></td>
                  <td class="p-5">
                      <span class="rounded-full items-center gap-2 flex text-nowrap p-1 px-2 text-green-600 border border-green-600 bg-green-400/20 m-auto ml-10 w-fit">
                          <span class="size-2 bg-green-600 block rounded-full"></span>
                          ${row.status}
                      </span>
                  </td>
                  <td class="p-4">${row.provider}</td>
                  <td class="p-4">
                      <div class="flex flex-col">${row.actions}</div>
                  </td>
              `;
      tableBody.appendChild(tr);
    });

    updatePagination(page);
  }

  function updatePagination(page: number): void {
    if (!pagination) return;

    pagination.innerHTML = ""; // Clear existing pagination

    // Create previous button
    const prev = document.querySelector(".prev-table")!;

    prev.classList.add("pagination-item");
    if (page === 1) prev.classList.add("disabled");
    prev.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        displayTable(currentPage);
      }
    });

    // Create page numbers
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.innerHTML = `
          <button class="${
            i === page
              ? "rounded-full px-3  bg-orange-400 text-white border-0"
              : "rounded-full px-3  border-0 shadow-xl"
          } py-0 flex items-center justify-center button">
            <p class="mt-1">${i}</p>
          </button>
        `;
      li.classList.add("pagination-item");
      li.addEventListener("click", () => {
        currentPage = i;
        displayTable(currentPage);
      });
      pagination.appendChild(li);
    }

    const next = document.querySelector(".next-table")!;

    next.classList.add("pagination-item");
    if (page === totalPages) next.classList.add("disabled");
    next.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        displayTable(currentPage);
      }
    });
  }

  displayTable(currentPage);
});
