(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#myTable tbody"),t=document.getElementById("pagination"),n=document.getElementById("selectRowInpage"),a=[{bookingId:"778899001",hotel:"هتل اسپیناس Deluxe Room - Triple",bookingDate:"1403/03/8 7:44",stayDuration:"1403/03/8 1403/03/10 یک اتاق دو شب",guests:"test testt 2 مهمان",payment:"غیر قابل استرداد<br>137.5 USD",status:"تایید شده",provider:"چارتر کننده API interface",actions:'<a href="" class="underline text-orange-400">جزییات</a><br><a href="" class="underline text-green-400">پرداخت</a>'},{bookingId:"778899010",hotel:"هتل اسپیناس Deluxe Room - Suite",bookingDate:"1403/03/8 11:00",stayDuration:"1403/03/8 1403/03/10 یک اتاق دو شب",guests:"test testt 4 مهمان",payment:"قابل استرداد<br>200 USD",status:"تایید شده",provider:"چارتر کننده API interface",actions:'<a href="" class="underline text-orange-400">جزییات</a><br><a href="" class="underline text-green-400">پرداخت</a>'},{bookingId:"778899001",hotel:"هتل اسپیناس Deluxe Room - Triple",bookingDate:"1403/03/8 7:44",stayDuration:"1403/03/8 1403/03/10 یک اتاق دو شب",guests:"test testt 2 مهمان",payment:"غیر قابل استرداد<br>137.5 USD",status:"تایید شده",provider:"چارتر کننده API interface",actions:'<a href="" class="underline text-orange-400">جزییات</a><br><a href="" class="underline text-green-400">پرداخت</a>'},{bookingId:"778899010",hotel:"هتل اسپیناس Deluxe Room - Suite",bookingDate:"1403/03/8 11:00",stayDuration:"1403/03/8 1403/03/10 یک اتاق دو شب",guests:"test testt 4 مهمان",payment:"قابل استرداد<br>200 USD",status:"تایید شده",provider:"چارتر کننده API interface",actions:'<a href="" class="underline text-orange-400">جزییات</a><br><a href="" class="underline text-green-400">پرداخت</a>'},{bookingId:"778899001",hotel:"هتل اسپیناس Deluxe Room - Triple",bookingDate:"1403/03/8 7:44",stayDuration:"1403/03/8 1403/03/10 یک اتاق دو شب",guests:"test testt 2 مهمان",payment:"غیر قابل استرداد<br>137.5 USD",status:"تایید شده",provider:"چارتر کننده API interface",actions:'<a href="" class="underline text-orange-400">جزییات</a><br><a href="" class="underline text-green-400">پرداخت</a>'},{bookingId:"778899010",hotel:"هتل اسپیناس Deluxe Room - Suite",bookingDate:"1403/03/8 11:00",stayDuration:"1403/03/8 1403/03/10 یک اتاق دو شب",guests:"test testt 4 مهمان",payment:"قابل استرداد<br>200 USD",status:"تایید شده",provider:"چارتر کننده API interface",actions:'<a href="" class="underline text-orange-400">جزییات</a><br><a href="" class="underline text-green-400">پرداخت</a>'}];let s=5,r=1,o=Math.ceil(a.length/s);function i(n){if(!e)return;e.innerHTML="";const d=(n-1)*s,l=d+s;a.slice(d,l).forEach((t=>{const n=document.createElement("tr");n.innerHTML=`\n                  <td><p class="p-4">${t.bookingId}<br />hjk-78579 --</p></td>\n                  <td><p class="p-4">${t.hotel}</p></td>\n                  <td><p class="p-4">${t.bookingDate}</p></td>\n                  <td><p class="p-4">${t.stayDuration}</p></td>\n                  <td><p class="p-4">${t.guests}</p></td>\n                  <td><div class="p-4">${t.payment}</div></td>\n                  <td class="p-5">\n                      <span class="rounded-full items-center gap-2 flex text-nowrap p-1 px-2 text-green-600 border border-green-600 bg-green-400/20 m-auto ml-10 w-fit">\n                          <span class="size-2 bg-green-600 block rounded-full"></span>\n                          ${t.status}\n                      </span>\n                  </td>\n                  <td class="p-4">${t.provider}</td>\n                  <td class="p-4">\n                      <div class="flex flex-col">${t.actions}</div>\n                  </td>\n              `,e.appendChild(n)})),function(e){if(!t)return;t.innerHTML="";const n=document.querySelector(".prev-table");n.classList.add("pagination-item"),1===e&&n.classList.add("disabled"),n.addEventListener("click",(()=>{r>1&&(r--,i(r))}));for(let n=1;n<=o;n++){const a=document.createElement("li");a.innerHTML=`\n          <button class="${n===e?"rounded-full px-3  bg-orange-400 text-white border-0":"rounded-full px-3  border-0 shadow-xl"} py-0 flex items-center justify-center button">\n            <p class="mt-1">${n}</p>\n          </button>\n        `,a.classList.add("pagination-item"),a.addEventListener("click",(()=>{r=n,i(r)})),t.appendChild(a)}const a=document.querySelector(".next-table");a.classList.add("pagination-item"),e===o&&a.classList.add("disabled"),a.addEventListener("click",(()=>{r<o&&(r++,i(r))}))}(n)}n.addEventListener("change",(e=>{const t=e.target;s=parseInt(t.value),r=1,o=Math.ceil(a.length/s),i(r)})),i(r)}))})();
//# sourceMappingURL=log.bundle.js.map