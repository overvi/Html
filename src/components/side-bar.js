class Sidebar extends HTMLElement {
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
  <div class="me-16 ltr:mr-16">
<div
  class="bg-white mx-3 dark:bg-gray-900 mb-3 rounded-full p-2 w-fit min-h-[540px] h-fit fixed flex justify-center items-center"
>
  <div class="space-y-10 flex flex-col items-center">
    <a
      href="/"
      class="side-tab p-2"
    >
      <svg
        class="max-w-full *:!fill-[#767676]"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="#767676"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M17.5117 17.2084V25.6551L3.51168 25.6784V17.2084L3.5 15.4584V8.24842C3.5 7.46675 3.89668 6.74338 4.53835 6.31171L9.20502 3.19673C9.98668 2.67173 11.0133 2.67173 11.795 3.19673L16.4616 6.31171C17.115 6.74338 17.5 7.46675 17.5 8.24842V15.4584L17.5117 17.2084Z"
        />
        <path
          d="M25.6668 24.7916H24.1851V21.2916C25.2935 20.93 26.0985 19.8916 26.0985 18.6666V16.3333C26.0985 14.805 24.8502 13.5566 23.3218 13.5566C21.7935 13.5566 20.5451 14.805 20.5451 16.3333V18.6666C20.5451 19.88 21.3385 20.9066 22.4235 21.28V24.7916H2.3335C1.85516 24.7916 1.4585 25.1883 1.4585 25.6666C1.4585 26.145 1.85516 26.5416 2.3335 26.5416H23.2518C23.2752 26.5416 23.2868 26.5533 23.3101 26.5533C23.3335 26.5533 23.3452 26.5416 23.3685 26.5416H25.6668C26.1452 26.5416 26.5418 26.145 26.5418 25.6666C26.5418 25.1883 26.1452 24.7916 25.6668 24.7916Z"
        />
        <path
          d="M17.5117 17.2083H3.51168L3.5 15.4583H17.5L17.5117 17.2083Z"
        />
        <path
          d="M10.5 26.5417C10.0217 26.5417 9.625 26.1451 9.625 25.6667V21.2917C9.625 20.8134 10.0217 20.4167 10.5 20.4167C10.9783 20.4167 11.375 20.8134 11.375 21.2917V25.6667C11.375 26.1451 10.9783 26.5417 10.5 26.5417Z"
        />
        <path
          d="M10.5002 12.5416C11.6277 12.5416 12.5418 11.6275 12.5418 10.4999C12.5418 9.37234 11.6277 8.45825 10.5002 8.45825C9.37258 8.45825 8.4585 9.37234 8.4585 10.4999C8.4585 11.6275 9.37258 12.5416 10.5002 12.5416Z"
        />
      </svg>
    </a>
    <a href="/booking" class="side-tab">
      <svg
        class="max-w-full  h-auto !active && *:!fill-[#767676]"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M25.6667 9.11159V9.91658H10.5V2.33325H18.8883C23.135 2.33325 25.6667 4.86492 25.6667 9.11159Z"
          fill="#767676"
        />
        <path
          opacity="0.4"
          d="M25.6667 18.0835V18.8885C25.6667 23.1352 23.135 25.6668 18.8883 25.6668H10.5V18.0835H25.6667Z"
          fill="#767676"
        />
        <path
          d="M10.4997 2.33325V25.6666H9.11134C4.86467 25.6666 2.33301 23.1349 2.33301 18.8883V9.11159C2.33301 4.86492 4.86467 2.33325 9.11134 2.33325H10.4997Z"
          fill="#767676"
        />
        <path
          opacity="0.6"
          d="M25.6667 9.91675H10.5V18.0834H25.6667V9.91675Z"
          fill="#767676"
        />
      </svg>
    </a>
    <div>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M22.4002 17.2434C21.3969 18.165 20.0668 18.6784 18.7018 18.6667H7.43184C2.6835 18.3284 2.67184 11.4334 7.43184 11.095H7.47851C4.22351 2.04171 17.9785 -1.56332 19.5535 7.93335C23.9519 8.49335 25.7369 14.3384 22.4002 17.2434Z"
          fill="#767676"
        />
        <path
          d="M21.875 24.4998C21.875 24.9782 21.4783 25.3748 21 25.3748H16.3333C16.275 25.3748 16.2283 25.3748 16.17 25.3515C15.8316 26.2148 14.98 26.8332 14 26.8332C13.02 26.8332 12.1684 26.2148 11.83 25.3515C11.7717 25.3748 11.725 25.3748 11.6667 25.3748H7C6.52167 25.3748 6.125 24.9782 6.125 24.4998C6.125 24.0215 6.52167 23.6248 7 23.6248H11.6667C11.725 23.6248 11.7717 23.6248 11.83 23.6482C12.0634 23.0415 12.5417 22.5632 13.1483 22.3299C13.125 22.2715 13.125 22.2248 13.125 22.1665V18.6665H14.875V22.1665C14.875 22.2248 14.875 22.2715 14.8517 22.3299C15.4583 22.5632 15.9366 23.0415 16.17 23.6482C16.2283 23.6248 16.275 23.6248 16.3333 23.6248H21C21.4783 23.6248 21.875 24.0215 21.875 24.4998Z"
          fill="#767676"
        />
      </svg>
    </div>
    <a  class="side-tab">
      <div>
        <svg
          class="max-w-full *:!fill-[#767676]"

          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M14.0002 25.5501C20.4435 25.5501 25.6668 20.3268 25.6668 13.8835C25.6668 7.44014 20.4435 2.2168 14.0002 2.2168C7.55684 2.2168 2.3335 7.44014 2.3335 13.8835C2.3335 20.3268 7.55684 25.5501 14.0002 25.5501Z"
            fill="#767676"
          />
          <path
            d="M16.6369 14L14.8752 13.3817V9.42667H15.2952C16.2402 9.42667 17.0102 10.255 17.0102 11.27C17.0102 11.7483 17.4069 12.145 17.8852 12.145C18.3635 12.145 18.7602 11.7483 18.7602 11.27C18.7602 9.28667 17.2085 7.67667 15.2952 7.67667H14.8752V7C14.8752 6.52167 14.4785 6.125 14.0002 6.125C13.5219 6.125 13.1252 6.52167 13.1252 7V7.67667H12.3669C10.6402 7.67667 9.22852 9.135 9.22852 10.92C9.22852 13.0083 10.4418 13.6733 11.3635 14L13.1252 14.6183V18.5617H12.7052C11.7602 18.5617 10.9902 17.7333 10.9902 16.7183C10.9902 16.24 10.5935 15.8433 10.1152 15.8433C9.63685 15.8433 9.24018 16.24 9.24018 16.7183C9.24018 18.7017 10.7918 20.3117 12.7052 20.3117H13.1252V21C13.1252 21.4783 13.5219 21.875 14.0002 21.875C14.4785 21.875 14.8752 21.4783 14.8752 21V20.3233H15.6335C17.3602 20.3233 18.7719 18.865 18.7719 17.08C18.7602 14.98 17.5469 14.315 16.6369 14ZM11.9468 12.355C11.3518 12.145 10.9902 11.9467 10.9902 10.9317C10.9902 10.1033 11.6085 9.43833 12.3785 9.43833H13.1369V12.775L11.9468 12.355ZM15.6335 18.5733H14.8752V15.2367L16.0535 15.645C16.6485 15.855 17.0102 16.0533 17.0102 17.0683C17.0102 17.8967 16.3919 18.5733 15.6335 18.5733Z"
            fill="#767676"
          />
        </svg>
      </div>
    </a>
  </div>
</div>
</div>
            `;
  }

  highlightCurrentPage() {
    let currentPage = window.location.pathname;
    const activeClass =
      "bg-orange-400 p-2 side-tab w-[38px] rounded-full h-auto";

    const homeRoutes = ["/", "/hotels", "/hotels/1"];
    const bookingRoutes = ["/booking", "/reservation", "/reservation/1"];
    const tabs = document.querySelectorAll(".side-tab");

    if (currentPage !== "/") {
      currentPage = currentPage.slice(0, -1);
    }

    if (currentPage) {
      if (bookingRoutes.includes(currentPage)) {
        tabs[1].classList = activeClass;
      } else if (homeRoutes.includes(currentPage)) {
        tabs[0].classList = activeClass;
      }
    }
  }
}

customElements.define("side-bar", Sidebar);
