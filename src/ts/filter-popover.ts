import { retranslate } from "./util";

const CHILD_LIMIT = 4;
const ADULT_LIMIT = 4;

const numbersWord = ["اول", "دوم", "سوم", "چهارم"];

const mappedNumbers: Record<number, string> = {};
for (let i = 0; i < CHILD_LIMIT; i++) {
  mappedNumbers[i + 1] = numbersWord[i];
}

const tCount = document.getElementById("t-count") as HTMLElement;
const roomCount = document.getElementById("room-count") as HTMLElement;

let totalRoomsCount = parseInt(roomCount.textContent!);
let totalPersons = parseInt(tCount.textContent!);

function updateTotal() {
  tCount.textContent = String(totalPersons);
  roomCount.textContent = String(totalRoomsCount);
}

class IncrementDecrement {
  private _count: number;

  constructor(
    private limit: number,
    private current: HTMLElement,
    private init?: number
  ) {
    this.current = current;

    this._count = parseInt(current.textContent!);
    this.limit = limit;
  }

  private update() {
    this.current.textContent = String(this.count);
    updateTotal();
  }

  public get count(): number {
    return this._count;
  }

  public set count(n: number) {
    this._count = n;
  }

  increment() {
    if (this.count !== this.limit) {
      this.count += 1;
      totalPersons += 1;
    }
    this.update();
  }

  decrement() {
    if (this.count !== 0) {
      this.count -= 1;
      totalPersons -= 1;
    }
    this.update();
  }
}

const roomContainer = document.getElementById("rooms") as HTMLElement;

const renderRooms = (room: HTMLElement) => {
  const incrementChild = room.querySelector(".increment-child") as HTMLElement;
  const decrementChild = room.querySelector(".decrement-child") as HTMLElement;

  const childField = room.querySelector(".child-count") as HTMLElement;
  const parentField = room.querySelector(".parent-count") as HTMLElement;

  const child = new IncrementDecrement(CHILD_LIMIT, childField);
  const adult = new IncrementDecrement(ADULT_LIMIT, parentField);

  if (room !== roomContainer.children[0]) {
    const removeRoomToggle = room.querySelector(".remove-room") as HTMLElement;

    removeRoomToggle.addEventListener("click", () => {
      if (roomContainer.children.length !== 1) {
        // Update total persons and remove the specific room
        totalPersons -= adult.count + child.count;
        roomContainer.removeChild(room);

        // Update room count and room numbers
        totalRoomsCount -= 1;
        updateRoomNumbers();
        updateTotal();
      }
    });
  }

  const childFields = room.querySelector(".child-fields") as HTMLElement;
  const incrementAdult = room.querySelector(".increment-adult") as HTMLElement;
  const decrementAdult = room.querySelector(".decrement-adult") as HTMLElement;

  incrementAdult?.addEventListener("click", () => {
    if (adult.count < ADULT_LIMIT) {
      adult.increment();
    }
  });

  decrementAdult.addEventListener("click", () => {
    if (adult.count > 0) {
      adult.decrement();
    }
  });

  incrementChild?.addEventListener("click", () => {
    if (child.count < CHILD_LIMIT) {
      child.increment();

      // Add unique ID based on room and child count
      const roomNumber = Array.from(roomContainer.children).indexOf(room) + 1;
      const selectId = `child-age-select-room-${roomNumber}-${child.count}`;

      childFields?.insertAdjacentHTML(
        "beforeend",
        `<div class="select mt-5 is-rounded w-full">
          <select class="select-age rounded-full w-full placeholder:!font-yekan"
            data-i18n="[placeholder]all"
            aria-label="Select Child Age"
            id="${selectId}"
          >
            <option value="" disabled selected>سن کودک ${
              mappedNumbers[child.count]
            }</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>`
      );
    }
  });

  decrementChild?.addEventListener("click", () => {
    if (child.count > 0 && childFields.lastElementChild) {
      childFields.removeChild(childFields.lastElementChild);
      child.decrement();
    }
  });
};

const updateRoomNumbers = () => {
  Array.from(roomContainer.children).forEach((room, index) => {
    const roomTitle = room.querySelector("p:first-child") as HTMLElement;
    roomTitle.textContent = `اتاق ${index + 1}`;
  });
};

renderRooms(roomContainer!.children[0] as HTMLElement);

const addNewRoom = document.getElementById("add-new-room");

addNewRoom?.addEventListener("click", () => {
  if (roomContainer?.children.length == 4) return;
  totalRoomsCount += 1;
  updateTotal();
  roomContainer?.insertAdjacentHTML(
    "beforeend",
    `    <div class="room  mt-3 pt-3 pl-2">
                   
                      <div class="flex items-center justify-between">
               <p>اتاق ${roomContainer.childElementCount + 1} </p>
                        
                        <button  aria-label="Remove Room" class="remove-room">
                          <svg role="img"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#DC2626"/>
                            <path d="M13.0601 11.9994L15.3601 9.69937C15.6501 9.40937 15.6501 8.92937 15.3601 8.63938C15.0701 8.34938 14.5901 8.34938 14.3001 8.63938L12.0001 10.9394L9.70011 8.63938C9.41011 8.34938 8.93011 8.34938 8.64011 8.63938C8.35011 8.92937 8.35011 9.40937 8.64011 9.69937L10.9401 11.9994L8.64011 14.2994C8.35011 14.5894 8.35011 15.0694 8.64011 15.3594C8.79011 15.5094 8.98011 15.5794 9.17011 15.5794C9.36011 15.5794 9.55011 15.5094 9.70011 15.3594L12.0001 13.0594L14.3001 15.3594C14.4501 15.5094 14.6401 15.5794 14.8301 15.5794C15.0201 15.5794 15.2101 15.5094 15.3601 15.3594C15.6501 15.0694 15.6501 14.5894 15.3601 14.2994L13.0601 11.9994Z" fill="#DC2626"/>
                            </svg>
                        </button>
                      </div>
                    <div class="flex items-center mt-4 justify-between w-full">
                    
                      <p data-i18n="adult"></p>
                      <div class="flex items-center gap-2">
                        <button aria-label="Decrease Adult" class="bg-gray-200 decrement-adult  size-[20px] rounded-full flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L18 12" class="stroke-gray-400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <p aria-live="polite" class="mt-1 parent-count">0</p>
                        <button  aria-label="Increment Adult" class="bg-primary-100 increment-adult size-[20px] rounded-full flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            
                            <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" class="stroke-primary-400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          
                            </svg>
                        </button>
                      </div>
                    </div>
                    <div class="flex items-center mt-4 justify-between w-full">
                      <p data-i18n="child"></p>
                      <div class="flex items-center gap-2">
                        <button aria-label="Decrease Child" class="bg-gray-200 decrement-child  size-[20px] rounded-full flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L18 12" class="stroke-gray-400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <p class="mt-1 child-count" aria-live="polite">0</p>
                        <button aria-label="Increase Child"  class="bg-primary-100  increment-child size-[20px] rounded-full flex items-center justify-center">
                          <svg role="img" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            
                            <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" class="stroke-primary-400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          
                            </svg>
                        </button>
                      </div>
                    </div>

                    <div class="child-fields">

                    </div>
                  
                  </div>     `
  );

  renderRooms(roomContainer?.lastElementChild! as HTMLElement);

  retranslate(roomContainer?.lastElementChild!);
});

const toggleRoomFilter = document.querySelectorAll(
  ".toggle-room-filter"
) as NodeListOf<HTMLElement>;
const roomFilter = document.getElementById("room-filter");

toggleRoomFilter.forEach((trf) => {
  trf.addEventListener("click", () => {
    roomFilter?.classList.toggle("hidden");
    trf.classList.toggle("opened-filter");
  });
});

window.addEventListener("click", (ev) => {
  const event = ev.target as HTMLElement;
  if (!event.closest("#room-filter , .toggle-room-filter , .remove-room")) {
    roomFilter?.classList.add("hidden");
    toggleRoomFilter.forEach((trf) => {
      trf.classList.remove("opened-filter");
    });
  }
});
