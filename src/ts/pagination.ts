import { retranslate } from "./util";

export default function Pagination(
  target: string,
  htmlData: string,
  rpg: number,
  p?: string
) {
  document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector(target) as HTMLElement;
    const pagination = document.getElementById(
      p ? `pagination${p}` : "pagination"
    );
    const selectRow = document.getElementById(
      `selectRowInpage${p}`
    ) as HTMLInputElement;
    const rowsCount = document.querySelector(".rowsCount") as HTMLElement;

    const data = document.querySelectorAll(htmlData);
    const dataArr = Array.from(data);

    let rowsPerPage = rpg;
    let currentPage = 1;
    let totalPages = Math.ceil(dataArr.length / rowsPerPage);

    if (selectRow) {
      selectRow.addEventListener("change", (v) => {
        const target = v.target as HTMLSelectElement;
        rowsPerPage = parseInt(target.value);
        currentPage = 1;
        updateTotalPages();
        displayTable(currentPage);
        rowsCount.textContent = target.value;
      });
    }

    function updateTotalPages(): void {
      totalPages = Math.ceil(data.length / rowsPerPage);
    }

    function displayTable(page: number): void {
      if (!tableBody) return;

      tableBody.innerHTML = "";

      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      const paginatedData = dataArr.slice(start, end);

      paginatedData.forEach((row) => {
        retranslate(row);
        document.querySelector(target)!.appendChild(row);
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
                    ? "rounded-full px-3  bg-primary-400 text-white border-0"
                    : "rounded-full px-3  border border-storm-200 shadow-xl"
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
}
