const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabs.forEach((tab) => {
      tab.classList.remove("is-active");
    });

    const target = (tab as HTMLElement).getAttribute("data-tab")!;
    console.log(target);

    tabContents.forEach((tc) => tc.classList.add("hidden"));

    tab.classList.add("is-active");
    document.getElementById(target)!.classList.remove("hidden");

    !tab.classList.contains("is-active") && tab.classList.add("is-active");
  });
});
