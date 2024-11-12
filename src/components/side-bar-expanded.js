class SidebarExpanded extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const content = this.Nav();

    this.innerHTML = content;
    this.highlightCurrentPage();
  }

  Nav() {
    return `
       <div class="ml-44 ltr:me-56 ltr:ml-4">
          <div>
            <div
              class="bg-white h-[50rem] w-[12.75rem] flex fixed mt-3 dark:bg-gray-900 dark:text-white dark:border-gray-500 rounded-b-[42px] rounded-tl-[42px] ltr:rounded-tl-none ltr:rounded-tr-[42px]"
            >
              <div
                class="absolute h-full w-[56px] shadow-md rounded-full"
              ></div>
              <div class="flex w-full space-y-3 flex-col rounded-full gap-7">
                <div class="flex group side-tab mt-20">
                  <a
                    href="/account"
                    class=" group-[.active-side-tab]:bg-primary-400 h-fit rounded-full p-1.5 mx-1.5"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M16.0002 16.0001C19.6821 16.0001 22.6668 13.0153 22.6668 9.33341C22.6668 5.65152 19.6821 2.66675 16.0002 2.66675C12.3183 2.66675 9.3335 5.65152 9.3335 9.33341C9.3335 13.0153 12.3183 16.0001 16.0002 16.0001Z"
                        class="group-[.active-side-tab]:fill-black"
                        fill="gray"
                      />
                      <path
                        d="M15.9999 19.3335C9.31988 19.3335 3.87988 23.8135 3.87988 29.3335C3.87988 29.7068 4.17322 30.0002 4.54655 30.0002H27.4532C27.8265 30.0002 28.1199 29.7068 28.1199 29.3335C28.1199 23.8135 22.6799 19.3335 15.9999 19.3335Z"
                        class="group-[.active-side-tab]:fill-black"
                        fill="gray"
                      />
                    </svg>
                  </a>
                  <div class="w-full h-fit m-auto">
                    <div
                      class="flex justify-between px-3 group-[.active-side-tab]:text-primary-400 collapse-toggle font-bold"
                    >
                      <p class="side-tab-title" data-i18n="management"></p>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        class="group-[.active-side-tab]:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.29995 3.73021L5.58328 6.44687C5.26245 6.76771 4.73745 6.76771 4.41662 6.44687L1.69995 3.73021"
                          class="group-[.active-side-tab]:stroke-primary-400"
                          stroke-width="1.5"
                          stroke="black"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="hidden px-1 collapse-content mt-1">
                      <div
                        class="py-2 px-2  mt-3 rounded-2xl mb-3"
                      >
                        <a class='side-tab-link' data-i18n="management" href="/account"></a>
                      </div>
                      <div
                        class="py-2 px-2  mt-3 rounded-2xl mb-3"
                      >
                        <a class='side-tab-link' data-i18n="deliverRegion" href="/delivery"></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex group side-tab">
                  <a
                    href="/voucher"
                    class=" group-[.active-side-tab]:bg-primary-400 h-fit rounded-full p-1.5 mx-1.5"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M23.3734 10.3601C23.28 10.3468 23.1867 10.3468 23.0934 10.3601C21.0267 10.2934 19.3867 8.60008 19.3867 6.52008C19.3867 4.40008 21.1067 2.66675 23.2401 2.66675C25.3601 2.66675 27.0934 4.38675 27.0934 6.52008C27.0801 8.60008 25.44 10.2934 23.3734 10.3601Z"
                        class="group-[.active-side-tab]:fill-black"
                        fill="gray"
                      />
                      <path
                        opacity="0.4"
                        d="M27.72 19.6C26.2266 20.6 24.1333 20.9734 22.2 20.72C22.7066 19.6267 22.9733 18.4134 22.9866 17.1334C22.9866 15.8 22.6933 14.5334 22.1333 13.4267C24.1066 13.1601 26.2 13.5334 27.7066 14.5334C29.8133 15.92 29.8133 18.2 27.72 19.6Z"
                        class="group-[.active-side-tab]:fill-black"
                        fill="gray"
                      />
                      <path
                        opacity="0.4"
                        d="M8.5867 10.3601C8.68003 10.3468 8.77337 10.3468 8.8667 10.3601C10.9334 10.2934 12.5734 8.60008 12.5734 6.52008C12.5734 4.40008 10.8534 2.66675 8.72003 2.66675C6.60003 2.66675 4.8667 4.38675 4.8667 6.52008C4.88003 8.60008 6.52003 10.2934 8.5867 10.3601Z"
                        class="group-[.active-side-tab]:fill-black"
                        fill="gray"
                      />
                      <path
                        opacity="0.4"
                        d="M8.73349 17.1332C8.73349 18.4265 9.01349 19.6532 9.52015 20.7598C7.64015 20.9598 5.68016 20.5598 4.24016 19.6132C2.13349 18.2132 2.13349 15.9331 4.24016 14.5331C5.66682 13.5731 7.68016 13.1865 9.57349 13.3998C9.02682 14.5198 8.73349 15.7865 8.73349 17.1332Z"
                        class="group-[.active-side-tab]:fill-black"
                        fill="gray"
                      />
                      <path
                        d="M16.1599 21.16C16.0532 21.1467 15.9332 21.1467 15.8132 21.16C13.3599 21.08 11.3999 19.0667 11.3999 16.5867C11.3999 14.0533 13.4399 12 15.9866 12C18.5199 12 20.5732 14.0533 20.5732 16.5867C20.5732 19.0667 18.6266 21.08 16.1599 21.16Z"
                        class="group-[.active-side-tab]:fill-black"
                        fill="gray"
                      />
                      <path
                        d="M11.8269 23.92C9.81356 25.2667 9.81356 27.48 11.8269 28.8134C14.1202 30.3467 17.8802 30.3467 20.1736 28.8134C22.1869 27.4667 22.1869 25.2534 20.1736 23.92C17.8936 22.3867 14.1336 22.3867 11.8269 23.92Z"
                        class="group-[.active-side-tab]:fill-black"
                        fill="gray"
                      />
                    </svg>
                  </a>
                  <div class="w-full h-fit m-auto">
                    <div
                      class="flex justify-between px-3 group-[.active-side-tab]:text-primary-400 collapse-toggle font-bold"
                    >
                      <p class="side-tab-title" data-i18n="users">کاربران</p>
                      <svg
                        width="10"
                        class="group-[.active-side-tab]:rotate-180"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.29995 3.73021L5.58328 6.44687C5.26245 6.76771 4.73745 6.76771 4.41662 6.44687L1.69995 3.73021"
                          stroke="black"
                          stroke-width="1.5"
                          class="group-[.active-side-tab]:stroke-primary-400"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="collapse-content px-1 hidden mt-5">
                      <div class="py-2 px-2  mt-3 rounded-2xl mb-3">
                        <a class='side-tab-link' data-i18n="voucherSettings" href="/voucher">
                          تنظیمات واچر</a
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex group side-tab">
                  <a
                    href="/datacenter"
                    class=" group-[.active-side-tab]:bg-primary-400 h-fit rounded-full p-1.5 mx-1.5"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.8931 9.2667C28.0397 6.37337 25.6264 3.96003 22.7331 3.1067C20.5331 2.4667 19.0131 2.52003 17.9597 3.3067C16.6931 4.25337 16.5464 5.96003 16.5464 7.17337V10.4934C16.5464 13.7734 18.0397 15.44 20.9731 15.44H24.7997C25.9997 15.44 27.7197 15.2934 28.6664 14.0267C29.4797 12.9867 29.5464 11.4667 28.8931 9.2667Z"
                        fill="gray"
                      />
                      <path
                        opacity="0.4"
                        d="M25.2132 17.8135C24.8665 17.4135 24.3599 17.1869 23.8399 17.1869H19.0665C16.7199 17.1869 14.8132 15.2802 14.8132 12.9335V8.1602C14.8132 7.6402 14.5865 7.13353 14.1865 6.78687C13.7999 6.4402 13.2665 6.2802 12.7599 6.34687C9.62653 6.74687 6.74653 8.46687 4.86653 11.0535C2.9732 13.6535 2.27986 16.8269 2.87986 20.0002C3.74653 24.5869 7.4132 28.2535 12.0132 29.1202C12.7465 29.2669 13.4799 29.3335 14.2132 29.3335C16.6265 29.3335 18.9599 28.5869 20.9465 27.1335C23.5332 25.2535 25.2532 22.3735 25.6532 19.2402C25.7199 18.7202 25.5599 18.2002 25.2132 17.8135Z"
                        fill="gray"
                      />
                    </svg>
                  </a>

                  <div
                    class="  px-3 h-fit m-auto w-full font-bold"
                  >
                    <a
                      class="side-tab-link side-tab-link-sole group-[.active-side-tab]:text-primary-400"
                      href="/datacenter"
                      data-i18n="database"
                    ></a>
                  </div>
                </div>
                <div class="flex gap-6 group side-tab">
                  <a
                    href="/messages"
                    class=" group-[.active-side-tab]:bg-primary-400 h-fit rounded-full p-1.5 mx-1.5"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M19.3399 14.4901L18.3399 12.8301C18.1299 12.4601 17.9399 11.7601 17.9399 11.3501V8.82015C17.9399 5.56015 15.2899 2.90015 12.0199 2.90015C8.74994 2.90015 6.09994 5.56015 6.09994 8.82015V11.3501C6.09994 11.7601 5.90994 12.4601 5.69994 12.8201L4.68994 14.4901C4.28994 15.1601 4.19994 15.9001 4.44994 16.5801C4.68994 17.2501 5.25994 17.7701 5.99994 18.0201C7.93994 18.6801 9.97994 19.0001 12.0199 19.0001C14.0599 19.0001 16.0999 18.6801 18.0399 18.0301C18.7399 17.8001 19.2799 17.2701 19.5399 16.5801C19.7999 15.8901 19.7299 15.1301 19.3399 14.4901Z"
                        fill="#767676"
                      />
                      <path
                        d="M14.2508 3.32C13.5608 3.05 12.8108 2.9 12.0208 2.9C11.2408 2.9 10.4908 3.04 9.80078 3.32C10.2308 2.51 11.0808 2 12.0208 2C12.9708 2 13.8108 2.51 14.2508 3.32Z"
                        fill="#767676"
                      />
                      <path
                        d="M14.8297 20.01C14.4097 21.17 13.2997 22 11.9997 22C11.2097 22 10.4297 21.68 9.87969 21.11C9.55969 20.81 9.31969 20.41 9.17969 20C9.30969 20.02 9.43969 20.03 9.57969 20.05C9.80969 20.08 10.0497 20.11 10.2897 20.13C10.8597 20.18 11.4397 20.21 12.0197 20.21C12.5897 20.21 13.1597 20.18 13.7197 20.13C13.9297 20.11 14.1397 20.1 14.3397 20.07C14.4997 20.05 14.6597 20.03 14.8297 20.01Z"
                        fill="gray"
                      />
                    </svg>
                  </a>
                  <div
                    class=" h-fit m-auto w-full group-[.active-side-tab]:text-primary-400 font-bold"
                  >
                    <a class='side-tab-link side-tab-link-sole' href="/messages" data-i18n="messages"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> `;
  }
  highlightCurrentPage() {
    let currentPage = window.location.pathname;

    const tabs = document.querySelectorAll(".side-tab");
    const tabsArr = Array.from(tabs);
    const sideTabs = document.querySelectorAll(".side-tab-link");

    if (currentPage !== "/" && currentPage[currentPage.length - 1] == "/") {
      currentPage = currentPage.slice(0, -1);
    }

    sideTabs.forEach((tab) => {
      if (tab.pathname == currentPage) {
        const par = tabsArr.find((x) => x.contains(tab));

        const content = par.querySelector(".collapse-content");

        if (content) {
          content.classList.remove("hidden");
        }

        par.classList.add("active-side-tab");
        if (!tab.classList.contains("side-tab-link-sole")) {
          tab.parentElement.classList.add("bg-primary-400");
        }
      }
    });
  }
}

customElements.define("side-bar-expanded", SidebarExpanded);
