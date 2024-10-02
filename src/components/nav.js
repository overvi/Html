class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const content = this.Nav();

    this.innerHTML = content;
  }

  Nav() {
    return `
      <header>
  <nav class="p-4 justify-between flex gap-3 items-center">
    <div class="flex items-center gap-3">
      <div class="rounded-full p-1 px-4 bg-white dark:bg-gray-900 w-fit">
        <img
          width="17"
          height="25"
          src="/public/assets/images/logo-orange.png"
          alt=""
        />
      </div>
      <button class="popover-toggle relative">
        <div
          class="bg-white flex justify-end dark:bg-gray-900 z-0 relative overflow-hidden rounded-full w-[27rem] h-[2.875rem]"
        >
          <div
            class="rounded-full justify-between z-10 flex h-[46px] w-[46px] relative bg-orange-400"
          >
            <svg
              class="m-auto"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M11.0095 20.02C15.9856 20.02 20.0195 15.9861 20.0195 11.01C20.0195 6.03391 15.9856 2 11.0095 2C6.03343 2 1.99951 6.03391 1.99951 11.01C1.99951 15.9861 6.03343 20.02 11.0095 20.02Z"
                fill="black"
              />
              <path
                d="M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z"
                fill="black"
              />
            </svg>
          </div>
          <input
            type="text"
            data-i18n="[placeholder]reservationSearch"
            class="w-full h-full pl-2 dark:bg-gray-900 dark:text-white pr-3 absolute z-[1] top-0 shadow-none outline-none border-none"
          />
        </div>
        <div
          class="popover transition-all ltr:right-0 ltr:left-[unset] origin-center duration-500 scale-0 left-0 top-14 z-50 shadow-md bottom-0 absolute bg-white dark:bg-gray-950"
        >
          <div
            class="bg-white space-y-4 w-[27rem] text-right border-0 dark:bg-gray-900 rounded-3xl shadow-md p-4 z-50"
          >
            <div
              class="hover:text-orange-400 pb-2 border-b transition-all duration-700 flex justify-between"
            >
              <div>رزررواسیون</div>
              <div>123222kdjsfkderFD</div>
            </div>
            <div
              class="hover:text-orange-400 transition-all duration-700 flex justify-between"
            >
              <div>رزررواسیون</div>
              <div>123222kdjsfkderFD</div>
            </div>
          </div>
        </div>
      </button>

      <button class="lang-toggle">
        <div class="rounded-full p-2 bg-white dark:bg-gray-900 w-fit">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="#767676"
            />
            <path
              d="M17.0002 15.97C15.6902 15.97 14.4402 15.37 13.4402 14.26C14.4302 12.99 15.0702 11.42 15.2102 9.70004H16.9902C17.4002 9.70004 17.7402 9.36004 17.7402 8.95004C17.7402 8.54004 17.4002 8.20004 16.9902 8.20004H14.5602C14.5402 8.20004 14.5202 8.19003 14.5002 8.19003C14.4802 8.19003 14.4602 8.20004 14.4402 8.20004H12.7502V7.27002C12.7502 6.86002 12.4102 6.52002 12.0002 6.52002C11.5902 6.52002 11.2502 6.86002 11.2502 7.27002V8.20004H7.01025C6.60025 8.20004 6.26025 8.54004 6.26025 8.95004C6.26025 9.36004 6.60025 9.70004 7.01025 9.70004H12.0002H13.7003C13.3303 13.22 10.4702 15.97 6.99023 15.97C6.58023 15.97 6.24023 16.31 6.24023 16.72C6.24023 17.13 6.58023 17.47 6.99023 17.47C9.06023 17.47 10.9502 16.67 12.4002 15.36C13.6702 16.72 15.2802 17.47 16.9902 17.47C17.4002 17.47 17.7402 17.13 17.7402 16.72C17.7402 16.31 17.4102 15.97 17.0002 15.97Z"
              fill="#767676"
            />
          </svg>
        </div>
      </button>
      <button class="toggle-color-mode">
        <div class="rounded-full p-2 bg-white dark:bg-gray-900 w-fit">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-gray-600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
              fill=""
            />
            <path
              d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z"
              fill=""
            />
          </svg>
        </div>
      </button>
    </div>
    <div class="flex items-center gap-2">
      <button class="relative popover-toggle">
        <div class="rounded-full p-2 bg-white dark:bg-gray-900 w-fit">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M19.24 5.57859H18.84L15.46 2.19859C15.19 1.92859 14.75 1.92859 14.47 2.19859C14.2 2.46859 14.2 2.90859 14.47 3.18859L16.86 5.57859H7.14L9.53 3.18859C9.8 2.91859 9.8 2.47859 9.53 2.19859C9.26 1.92859 8.82 1.92859 8.54 2.19859L5.17 5.57859H4.77C3.87 5.57859 2 5.57859 2 8.13859C2 9.10859 2.2 9.74859 2.62 10.1686C2.86 10.4186 3.15 10.5486 3.46 10.6186C3.75 10.6886 4.06 10.6986 4.36 10.6986H19.64C19.95 10.6986 20.24 10.6786 20.52 10.6186C21.36 10.4186 22 9.81859 22 8.13859C22 5.57859 20.13 5.57859 19.24 5.57859Z" fill="#616161"/>
<path d="M19.6509 10.7011H4.36094C4.06094 10.7011 3.75094 10.6911 3.46094 10.6211L4.72094 18.3011C5.00094 20.0211 5.75094 22.0011 9.08094 22.0011H14.6909C18.0609 22.0011 18.6609 20.3111 19.0209 18.4211L20.5309 10.6211C20.2509 10.6811 19.9509 10.7011 19.6509 10.7011ZM10.6109 17.1611C10.6109 17.5511 10.3009 17.8611 9.91094 17.8611C9.52094 17.8611 9.21094 17.5511 9.21094 17.1611V13.8611C9.21094 13.4711 9.52094 13.1611 9.91094 13.1611C10.3009 13.1611 10.6109 13.4711 10.6109 13.8611V17.1611ZM14.8909 17.1611C14.8909 17.5511 14.5809 17.8611 14.1909 17.8611C13.8009 17.8611 13.4909 17.5511 13.4909 17.1611V13.8611C13.4909 13.4711 13.8009 13.1611 14.1909 13.1611C14.5809 13.1611 14.8909 13.4711 14.8909 13.8611V17.1611Z" fill="#616161"/>
</svg>

        </div>
        <div
          class="popover transition-all ltr:right-0 ltr:left-[unset] origin-top-left duration-500 scale-0 left-0 top-14 z-50 shadow-md bottom-0 absolute bg-white dark:bg-gray-950"
        >
          <div
            class="bg-white text-right border-0 popover-triangle ltr:before:right-2 ltr:before:left-[unset] dark:bg-gray-900 dark:before:bg-gray-900 before:block before:content-[' '] before:bg-white before:-bottom-3 before:left-2 before:size-7 before:absolute border rounded-3xl shadow-md p-4 !pb-10 z-50"
          >
            <div dir="rtl" class="font-yekan w-[25rem] p-2 rounded-full">
              <div>
              <div class='flex justify-between items-center w-full'>

                <h1 data-i18n="cart" class="font-bold text-lg "></h1>
                <div class="flex w-fit border-0  next items-center px-4 py-2 gap-2 bg-[#F6F6F6] dark:bg-gray-950  group button text-green-600 rounded-full font-bold">
                           <svg class=" rtl:hidden " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="#2FAC66" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.4999 12H3.66992" stroke="#2FAC66" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              <div  data-i18n="cart" class="rtl:mt-0 ltr:mt-[5px]"></div>
              <svg class=" ltr:hidden " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.57 5.92969L3.5 11.9997L9.57 18.0697" stroke="#2FAC66" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.4999 12H3.66992" stroke="#2FAC66" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
       
                </div>
                <div class="mt-5 border-y py-3">
                  <div class="flex justify-between items-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                        fill="#DC2626"
                      />
                      <path
                        d="M9.79502 9.00002L11.52 7.27502C11.7375 7.05752 11.7375 6.69752 11.52 6.48002C11.3025 6.26252 10.9425 6.26252 10.725 6.48002L9.00002 8.20502L7.27502 6.48002C7.05752 6.26252 6.69752 6.26252 6.48002 6.48002C6.26252 6.69752 6.26252 7.05752 6.48002 7.27502L8.20502 9.00002L6.48002 10.725C6.26252 10.9425 6.26252 11.3025 6.48002 11.52C6.59252 11.6325 6.73502 11.685 6.87752 11.685C7.02002 11.685 7.16252 11.6325 7.27502 11.52L9.00002 9.79502L10.725 11.52C10.8375 11.6325 10.98 11.685 11.1225 11.685C11.265 11.685 11.4075 11.6325 11.52 11.52C11.7375 11.3025 11.7375 10.9425 11.52 10.725L9.79502 9.00002Z"
                        fill="#DC2626"
                      />
                    </svg>
                    <div class="font-semibold flex flex-col items-end">
                    <p class="font-bold">Ji Hotel Shenzhen Baoan Pingzhou Metro Station </p>
                    <p>deluxe room</p>
                    <p>2 adult - 1 kid...</p>
                    </div>
                  </div>
                 
                </div>
         
              </div>
            </div>
          </div>
        </div>
      </button>
      <button class="relative popover-toggle">
        <div class="rounded-full p-2 bg-white dark:bg-gray-900 w-fit">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.62 10.7501C17.19 10.7501 16.85 10.4001 16.85 9.9801C16.85 9.6101 16.48 8.8401 15.86 8.1701C15.25 7.5201 14.58 7.1401 14.02 7.1401C13.59 7.1401 13.25 6.7901 13.25 6.3701C13.25 5.9501 13.6 5.6001 14.02 5.6001C15.02 5.6001 16.07 6.1401 16.99 7.1101C17.85 8.0201 18.4 9.1501 18.4 9.9701C18.4 10.4001 18.05 10.7501 17.62 10.7501Z"
              fill="#767676"
            />
            <path
              d="M21.2298 10.75C20.7998 10.75 20.4598 10.4 20.4598 9.98C20.4598 6.43 17.5698 3.55 14.0298 3.55C13.5998 3.55 13.2598 3.2 13.2598 2.78C13.2598 2.36 13.5998 2 14.0198 2C18.4198 2 21.9998 5.58 21.9998 9.98C21.9998 10.4 21.6498 10.75 21.2298 10.75Z"
              fill="#767676"
            />
            <path
              opacity="0.4"
              d="M11.79 14.21L8.52 17.48C8.16 17.16 7.81 16.83 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.09 13.57 11.44 13.91 11.79 14.21Z"
              fill="#767676"
            />
            <path
              d="M21.9696 18.33C21.9696 18.61 21.9196 18.9 21.8196 19.18C21.7896 19.26 21.7596 19.34 21.7196 19.42C21.5496 19.78 21.3296 20.12 21.0396 20.44C20.5496 20.98 20.0096 21.37 19.3996 21.62C19.3896 21.62 19.3796 21.63 19.3696 21.63C18.7796 21.87 18.1396 22 17.4496 22C16.4296 22 15.3396 21.76 14.1896 21.27C13.0396 20.78 11.8896 20.12 10.7496 19.29C10.3596 19 9.96961 18.71 9.59961 18.4L12.8696 15.13C13.1496 15.34 13.3996 15.5 13.6096 15.61C13.6596 15.63 13.7196 15.66 13.7896 15.69C13.8696 15.72 13.9496 15.73 14.0396 15.73C14.2096 15.73 14.3396 15.67 14.4496 15.56L15.2096 14.81C15.4596 14.56 15.6996 14.37 15.9296 14.25C16.1596 14.11 16.3896 14.04 16.6396 14.04C16.8296 14.04 17.0296 14.08 17.2496 14.17C17.4696 14.26 17.6996 14.39 17.9496 14.56L21.2596 16.91C21.5196 17.09 21.6996 17.3 21.8096 17.55C21.9096 17.8 21.9696 18.05 21.9696 18.33Z"
              fill="#767676"
            />
          </svg>
        </div>
        <div
          class="popover transition-all ltr:right-0 ltr:left-[unset] origin-top-left duration-500 scale-0 left-0 top-14 z-50 shadow-md bottom-0 absolute bg-white dark:bg-gray-950"
        >
          <div
            class="bg-white text-right border-0 popover-triangle ltr:before:right-2 ltr:before:left-[unset] dark:bg-gray-900 dark:before:bg-gray-900 before:block before:content-[' '] before:bg-white before:-bottom-3 before:left-2 before:size-7 before:absolute border rounded-3xl shadow-md p-4 !pb-10 z-50"
          >
            <div dir="rtl" class="font-yekan w-[25rem] p-2 rounded-full">
              <div>
                <h1 data-i18n="label" class="font-bold text-lg pb-3"></h1>
                <div class="mt-2 border-t py-3">
                  <div>
                    <h2 data-i18n="contact" class="font-bold"></h2>
                    <div class="flex items-center gap-2 mt-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.62 10.7501C17.19 10.7501 16.85 10.4001 16.85 9.9801C16.85 9.6101 16.48 8.8401 15.86 8.1701C15.25 7.5201 14.58 7.1401 14.02 7.1401C13.59 7.1401 13.25 6.7901 13.25 6.3701C13.25 5.9501 13.6 5.6001 14.02 5.6001C15.02 5.6001 16.07 6.1401 16.99 7.1101C17.85 8.0201 18.4 9.1501 18.4 9.9701C18.4 10.4001 18.05 10.7501 17.62 10.7501Z"
                          fill="orange"
                        />
                        <path
                          d="M21.2298 10.75C20.7998 10.75 20.4598 10.4 20.4598 9.98C20.4598 6.43 17.5698 3.55 14.0298 3.55C13.5998 3.55 13.2598 3.2 13.2598 2.78C13.2598 2.36 13.5998 2 14.0198 2C18.4198 2 21.9998 5.58 21.9998 9.98C21.9998 10.4 21.6498 10.75 21.2298 10.75Z"
                          fill="orange"
                        />
                        <path
                          opacity="0.4"
                          d="M11.79 14.21L8.52 17.48C8.16 17.16 7.81 16.83 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.09 13.57 11.44 13.91 11.79 14.21Z"
                          fill="orange"
                        />
                        <path
                          d="M21.9696 18.33C21.9696 18.61 21.9196 18.9 21.8196 19.18C21.7896 19.26 21.7596 19.34 21.7196 19.42C21.5496 19.78 21.3296 20.12 21.0396 20.44C20.5496 20.98 20.0096 21.37 19.3996 21.62C19.3896 21.62 19.3796 21.63 19.3696 21.63C18.7796 21.87 18.1396 22 17.4496 22C16.4296 22 15.3396 21.76 14.1896 21.27C13.0396 20.78 11.8896 20.12 10.7496 19.29C10.3596 19 9.96961 18.71 9.59961 18.4L12.8696 15.13C13.1496 15.34 13.3996 15.5 13.6096 15.61C13.6596 15.63 13.7196 15.66 13.7896 15.69C13.8696 15.72 13.9496 15.73 14.0396 15.73C14.2096 15.73 14.3396 15.67 14.4496 15.56L15.2096 14.81C15.4596 14.56 15.6996 14.37 15.9296 14.25C16.1596 14.11 16.3896 14.04 16.6396 14.04C16.8296 14.04 17.0296 14.08 17.2496 14.17C17.4696 14.26 17.6996 14.39 17.9496 14.56L21.2596 16.91C21.5196 17.09 21.6996 17.3 21.8096 17.55C21.9096 17.8 21.9696 18.05 21.9696 18.33Z"
                          fill="orange"
                        />
                      </svg>
                      <p>44499839</p>
                    </div>
                    <div class="flex items-center gap-2 mt-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M12.75 15.375H5.25C3 15.375 1.5 14.25 1.5 11.625V6.375C1.5 3.75 3 2.625 5.25 2.625H12.75C15 2.625 16.5 3.75 16.5 6.375V11.625C16.5 14.25 15 15.375 12.75 15.375Z"
                          fill="#F9B233"
                        />
                        <path
                          d="M9.00008 9.65247C8.37008 9.65247 7.73258 9.45748 7.24508 9.05998L4.89758 7.18498C4.65758 6.98998 4.61258 6.63748 4.80758 6.39748C5.00258 6.15748 5.35508 6.11248 5.59508 6.30748L7.94257 8.18248C8.51257 8.63998 9.48007 8.63998 10.0501 8.18248L12.3976 6.30748C12.6376 6.11248 12.9976 6.14998 13.1851 6.39748C13.3801 6.63748 13.3426 6.99748 13.0951 7.18498L10.7476 9.05998C10.2676 9.45748 9.63008 9.65247 9.00008 9.65247Z"
                          fill="#F9B233"
                        />
                      </svg>

                      <p>Mangotels@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div class="mt-2 py-3">
                  <div>
                    <h2 data-i18n="workHours" class="font-bold"></h2>
                    <p data-i18n="workHoursExplicit" class="mt-2"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
      <button class="popover-toggle relative">
        <div class="rounded-full p-2 bg-white dark:bg-gray-900 w-fit">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
              stroke="#F9B233"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div
          class="popover transition-all ltr:right-0 ltr:left-[unset] origin-top-left duration-500 scale-0 left-0 top-14 z-50 shadow-md bottom-0 absolute bg-white dark:bg-gray-950"
        >
          <div
            class="bg-white text-right border-0 popover-triangle ltr:before:right-2 ltr:before:left-[unset] dark:bg-gray-900 dark:before:bg-gray-900 before:block before:content-[' '] before:bg-white before:-bottom-3 before:left-2 before:size-7 before:absolute border rounded-3xl shadow-md p-4 !pb-10 z-50"
          >
            <div dir="rtl" class="font-yekan w-[25rem] p-2 rounded-full">
              <div>
                <h1 data-i18n="favorites" class="font-bold text-lg pb-3"></h1>
                <div class="mt-2 border-y py-3">
                  <div class="flex justify-between items-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                        fill="#DC2626"
                      />
                      <path
                        d="M9.79502 9.00002L11.52 7.27502C11.7375 7.05752 11.7375 6.69752 11.52 6.48002C11.3025 6.26252 10.9425 6.26252 10.725 6.48002L9.00002 8.20502L7.27502 6.48002C7.05752 6.26252 6.69752 6.26252 6.48002 6.48002C6.26252 6.69752 6.26252 7.05752 6.48002 7.27502L8.20502 9.00002L6.48002 10.725C6.26252 10.9425 6.26252 11.3025 6.48002 11.52C6.59252 11.6325 6.73502 11.685 6.87752 11.685C7.02002 11.685 7.16252 11.6325 7.27502 11.52L9.00002 9.79502L10.725 11.52C10.8375 11.6325 10.98 11.685 11.1225 11.685C11.265 11.685 11.4075 11.6325 11.52 11.52C11.7375 11.3025 11.7375 10.9425 11.52 10.725L9.79502 9.00002Z"
                        fill="#DC2626"
                      />
                    </svg>
                    <div class="font-bold">fdsafdasfdasfdsa</div>
                  </div>
                  <p dir="ltr">Shior</p>
                </div>
                <div class="mt-2 py-3">
                  <div class="flex justify-between items-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                        fill="#DC2626"
                      />
                      <path
                        d="M9.79502 9.00002L11.52 7.27502C11.7375 7.05752 11.7375 6.69752 11.52 6.48002C11.3025 6.26252 10.9425 6.26252 10.725 6.48002L9.00002 8.20502L7.27502 6.48002C7.05752 6.26252 6.69752 6.26252 6.48002 6.48002C6.26252 6.69752 6.26252 7.05752 6.48002 7.27502L8.20502 9.00002L6.48002 10.725C6.26252 10.9425 6.26252 11.3025 6.48002 11.52C6.59252 11.6325 6.73502 11.685 6.87752 11.685C7.02002 11.685 7.16252 11.6325 7.27502 11.52L9.00002 9.79502L10.725 11.52C10.8375 11.6325 10.98 11.685 11.1225 11.685C11.265 11.685 11.4075 11.6325 11.52 11.52C11.7375 11.3025 11.7375 10.9425 11.52 10.725L9.79502 9.00002Z"
                        fill="#DC2626"
                      />
                    </svg>
                    <div class="font-bold">fdsafdasfdasfdsa</div>
                  </div>
                  <p dir="ltr">Shior</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
      <button class="popover-toggle relative">
        <div
          tabindex="0"
          class="rounded-full relative cursor-pointer flex items-center gap-2 p-1 bg-white dark:bg-gray-900 w-fit"
        >
          <img src="/public/assets/images/780.png" alt="" />
          <p class="dark:text-white">هفت هشتاد</p>
        </div>
        <div
          class="popover transition-all origin-top-left duration-500 scale-0 left-0 ltr:right-0 ltr:left-[unset] top-14 z-50 shadow-md bottom-0 absolute bg-white dark:bg-gray-950"
        >
          <div
            class="bg-white text-right border-0 popover-triangle dark:bg-gray-900 dark:before:bg-gray-900 before:block before:content-[' '] before:bg-white before:-bottom-3 ltr:before:right-2 ltr:before:left-[unset] before:left-2 before:size-7 before:absolute border rounded-3xl shadow-md p-4 !pb-10 z-50"
          >
            <div class="font-yekan w-[24rem] rounded-full">
              <div class="border-b pb-3 p-2 text-right">
                <h1 data-i18n="accountDetails" class="font-bold text-lg"></h1>
                <p>gxgrsadas8344</p>
              </div>
              <div class="border-b py-3 flex justify-between">
                <div>
                  <h1 data-i18n="balance" class="font-bold text-lg"></h1>
                  <p>1200.USD</p>
                </div>
                <div>
                  <a class="flex items-center text-slate-400 gap-2">
                    مشاهده بیشتر
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.58234 3.45923L2.0415 7.00006L5.58234 10.5409"
                        stroke="#767676"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.9581 7H2.14062"
                        stroke="#767676"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div class="py-3 text-right">
                <h1 data-i18n="customerInfo" class="font-bold text-lg"></h1>
                <p>Hjys</p>
              </div>
              <div class="mt-3 flex items-center justify-between mx-5 gap-7">
                <a class="flex flex-col justify-center items-center">
                  <div
                    class="rounded-full w-fit p-2 bg-gray-50 dark:bg-gray-900"
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
                        d="M12 9.60008V22.3867C12 26.6667 14.6667 29.3334 18.9333 29.3334H22.3867C26.6533 29.3334 29.32 26.6667 29.32 22.4001V9.60008C29.3333 5.33341 26.6667 2.66675 22.4 2.66675H18.9333C14.6667 2.66675 12 5.33341 12 9.60008Z"
                        fill="#F9B233"
                      />
                      <path
                        d="M16.5732 10.8269L21.0398 15.2935C21.4265 15.6802 21.4265 16.3202 21.0398 16.7069L16.5732 21.1735C16.1865 21.5602 15.5465 21.5602 15.1598 21.1735C14.7732 20.7869 14.7732 20.1469 15.1598 19.7602L17.9198 17.0002H3.6665C3.11984 17.0002 2.6665 16.5469 2.6665 16.0002C2.6665 15.4535 3.11984 15.0002 3.6665 15.0002H17.9198L15.1598 12.2402C14.9598 12.0402 14.8665 11.7869 14.8665 11.5335C14.8665 11.2802 14.9598 11.0269 15.1598 10.8269C15.5465 10.4269 16.1732 10.4269 16.5732 10.8269Z"
                        fill="#F9B233"
                      />
                    </svg>
                  </div>
                  <p data-i18n="exit" class="text-center"></p>
                </a>
                <a class="flex flex-col justify-center items-center">
                  <div
                    class="rounded-full w-fit p-2 bg-gray-50 dark:bg-gray-900"
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
                        fill="#F9B233"
                      />
                      <path
                        d="M15.9999 19.3335C9.31988 19.3335 3.87988 23.8135 3.87988 29.3335C3.87988 29.7068 4.17322 30.0002 4.54655 30.0002H27.4532C27.8265 30.0002 28.1199 29.7068 28.1199 29.3335C28.1199 23.8135 22.6799 19.3335 15.9999 19.3335Z"
                        fill="#F9B233"
                      />
                    </svg>
                  </div>
                  <p data-i18n="users" class="text-center"></p>
                </a>
                <a class="flex flex-col justify-center items-center">
                  <div
                    class="rounded-full w-fit p-2 bg-gray-50 dark:bg-gray-900"
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
                        fill="#F9B233"
                      />
                      <path
                        opacity="0.4"
                        d="M27.72 19.6C26.2266 20.6 24.1333 20.9734 22.2 20.72C22.7066 19.6267 22.9733 18.4134 22.9866 17.1334C22.9866 15.8 22.6933 14.5334 22.1333 13.4267C24.1066 13.1601 26.2 13.5334 27.7066 14.5334C29.8133 15.92 29.8133 18.2 27.72 19.6Z"
                        fill="#F9B233"
                      />
                      <path
                        opacity="0.4"
                        d="M8.5867 10.3601C8.68003 10.3468 8.77337 10.3468 8.8667 10.3601C10.9334 10.2934 12.5734 8.60008 12.5734 6.52008C12.5734 4.40008 10.8534 2.66675 8.72003 2.66675C6.60003 2.66675 4.8667 4.38675 4.8667 6.52008C4.88003 8.60008 6.52003 10.2934 8.5867 10.3601Z"
                        fill="#F9B233"
                      />
                      <path
                        opacity="0.4"
                        d="M8.73349 17.1332C8.73349 18.4265 9.01349 19.6532 9.52015 20.7598C7.64015 20.9598 5.68016 20.5598 4.24016 19.6132C2.13349 18.2132 2.13349 15.9331 4.24016 14.5331C5.66682 13.5731 7.68016 13.1865 9.57349 13.3998C9.02682 14.5198 8.73349 15.7865 8.73349 17.1332Z"
                        fill="#F9B233"
                      />
                      <path
                        d="M16.1599 21.16C16.0532 21.1467 15.9332 21.1467 15.8132 21.16C13.3599 21.08 11.3999 19.0667 11.3999 16.5867C11.3999 14.0533 13.4399 12 15.9866 12C18.5199 12 20.5732 14.0533 20.5732 16.5867C20.5732 19.0667 18.6266 21.08 16.1599 21.16Z"
                        fill="#F9B233"
                      />
                      <path
                        d="M11.8269 23.92C9.81356 25.2667 9.81356 27.48 11.8269 28.8134C14.1202 30.3467 17.8802 30.3467 20.1736 28.8134C22.1869 27.4667 22.1869 25.2534 20.1736 23.92C17.8936 22.3867 14.1336 22.3867 11.8269 23.92Z"
                        fill="#F9B233"
                      />
                    </svg>
                  </div>
                  <p data-i18n="management" class="text-center"></p>
                </a>
                <a class="flex flex-col justify-center items-center">
                  <div
                    class="rounded-full w-fit p-2 bg-gray-50 dark:bg-gray-900"
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
                        fill="#F9B233"
                      />
                      <path
                        opacity="0.4"
                        d="M25.2132 17.8135C24.8665 17.4135 24.3599 17.1869 23.8399 17.1869H19.0665C16.7199 17.1869 14.8132 15.2802 14.8132 12.9335V8.1602C14.8132 7.6402 14.5865 7.13353 14.1865 6.78687C13.7999 6.4402 13.2665 6.2802 12.7599 6.34687C9.62653 6.74687 6.74653 8.46687 4.86653 11.0535C2.9732 13.6535 2.27986 16.8269 2.87986 20.0002C3.74653 24.5869 7.4132 28.2535 12.0132 29.1202C12.7465 29.2669 13.4799 29.3335 14.2132 29.3335C16.6265 29.3335 18.9599 28.5869 20.9465 27.1335C23.5332 25.2535 25.2532 22.3735 25.6532 19.2402C25.7199 18.7202 25.5599 18.2002 25.2132 17.8135Z"
                        fill="#F9B233"
                      />
                    </svg>
                  </div>
                  <p data-i18n="database" class="text-center"></p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </button>
      <button class="relative popover-toggle">
        <div class="rounded-full p-2 bg-white dark:bg-gray-900 w-fit">
          <svg
            width="24"
            height="24"
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
              fill="#767676"
            />
          </svg>
        </div>
        <div
          class="popover transition-all origin-top-left ltr:right-0 ltr:left-[unset] duration-500 scale-0 left-0 top-14 z-50 shadow-md bottom-0 absolute bg-white dark:bg-gray-950"
        >
          <div
            class="bg-white border-0 popover-triangle ltr:before:right-2 ltr:before:left-[unset] dark:bg-gray-900 dark:before:bg-gray-900 before:block before:content-[' '] before:bg-white before:-bottom-3 before:left-2 before:size-7 before:absolute border rounded-3xl shadow-md p-4 !pb-10 z-50"
          >
            <div class="font-yekan w-[25rem] p-2 pb-20 rounded-full">
              <div>
                <div class="flex justify-between border-b text-right">
                  <h1
                    data-i18n="messageCenter"
                    class="font-bold text-lg pb-3"
                  ></h1>
                  <div>
                    <a class="flex items-center text-slate-400 gap-2">
                      مشاهده بیشتر
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.58234 3.45923L2.0415 7.00006L5.58234 10.5409"
                          stroke="#767676"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.9581 7H2.14062"
                          stroke="#767676"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div
                  class="mt-2 flex justify-between items-center py-3 border-b"
                >
                  <div>
                    <h2
                      data-i18n="passwordChange"
                      class="font-bold text-orange-500"
                    ></h2>
                    <p class="mt-2">1204/2014</p>
                  </div>
                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8025 3.9225C14.595 3.8025 13.3875 3.7125 12.1725 3.645V3.6375L12.0075 2.6625C11.895 1.9725 11.73 0.9375 9.975 0.9375H8.01C6.2625 0.9375 6.0975 1.9275 5.9775 2.655L5.82 3.615C5.1225 3.66 4.425 3.705 3.7275 3.7725L2.1975 3.9225C1.8825 3.9525 1.6575 4.23 1.6875 4.5375C1.7175 4.845 1.9875 5.07 2.3025 5.04L3.8325 4.89C7.7625 4.5 11.7225 4.65 15.6975 5.0475C15.72 5.0475 15.735 5.0475 15.7575 5.0475C16.0425 5.0475 16.29 4.83 16.32 4.5375C16.3425 4.23 16.1175 3.9525 15.8025 3.9225Z"
                        fill="#DC2626"
                      />
                      <path
                        opacity="0.3991"
                        d="M14.4226 6.105C14.2426 5.9175 13.9951 5.8125 13.7401 5.8125H4.26006C4.00506 5.8125 3.75006 5.9175 3.57756 6.105C3.40506 6.2925 3.30756 6.5475 3.32256 6.81L3.78756 14.505C3.87006 15.645 3.97506 17.07 6.59256 17.07H11.4076C14.0251 17.07 14.1301 15.6525 14.2126 14.505L14.6776 6.8175C14.6926 6.5475 14.5951 6.2925 14.4226 6.105Z"
                        fill="#DC2626"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.18506 12.75C7.18506 12.4393 7.4369 12.1875 7.74756 12.1875H10.2451C10.5557 12.1875 10.8076 12.4393 10.8076 12.75C10.8076 13.0607 10.5557 13.3125 10.2451 13.3125H7.74756C7.4369 13.3125 7.18506 13.0607 7.18506 12.75Z"
                        fill="#DC2626"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.5625 9.75C6.5625 9.43934 6.81434 9.1875 7.125 9.1875H10.875C11.1857 9.1875 11.4375 9.43934 11.4375 9.75C11.4375 10.0607 11.1857 10.3125 10.875 10.3125H7.125C6.81434 10.3125 6.5625 10.0607 6.5625 9.75Z"
                        fill="#DC2626"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  </nav>
</header>

`;
  }
}

customElements.define("nav-bar", Navbar);
