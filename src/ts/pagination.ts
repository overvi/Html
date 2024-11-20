import i18next from "i18next";


export default function Pagination (target : string , htmlData : string ,rpg : number) {
    document.addEventListener("DOMContentLoaded" , () => {

        const tableBody = document.querySelector(target) as HTMLElement;
        const pagination = document.getElementById("pagination");
        const selectRow = document.getElementById(
          "selectRowInpage"
        ) as HTMLInputElement;
      
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
            row.querySelectorAll("[data-i18n]").forEach((element) => {
                const keys = element.getAttribute("data-i18n")?.split(";") || [];
                keys.forEach((key) => {
                  const [attr, i18nKey] = key.includes("]")
                    ? key.split("]")
                    : ["innerHTML", key];
                  if (attr && i18nKey) {
                    if (attr === "innerHTML") {
                      element.innerHTML = i18next.t(i18nKey);
                    } else {
                      element.setAttribute(attr.slice(1), i18next.t(i18nKey));
                    }
                  }
                });
              });
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
    })
}