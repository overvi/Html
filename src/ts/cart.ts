const minute = document.querySelector(".min")! as HTMLSpanElement;
const second = document.querySelector(".sec")! as HTMLSpanElement;

class CountdownTimer {
  private duration: number;
  private intervalId: NodeJS.Timeout | null = null;
  private displayElement: HTMLElement;

  constructor(minutes: number, displayElement: HTMLElement) {
    this.duration = minutes * 60;
    this.displayElement = displayElement;
  }

  start() {
    if (this.intervalId) return;

    this.intervalId = setInterval(() => {
      if (this.duration <= 0) {
        this.stop();
        this.displayElement.textContent = "Time's up!";
      } else {
        this.displayTime();
        this.duration--;
      }
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private displayTime() {
    const minutes = Math.floor(this.duration / 60);
    const seconds = this.duration % 60;
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

    const time = formattedTime.split(":");

    minute.innerText = time[1];
    second.innerText = time[0];
  }
}

const timerDisplay = document.getElementById("timer") as HTMLElement;
const timer = new CountdownTimer(15, timerDisplay);

timer.start();
