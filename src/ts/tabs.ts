const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
const tabsArr = Array.from(tabs);

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const parentTab = tab.closest(".tab-content");
    tabs.forEach((tab2) => {
      if (!parentTab || parentTab.id !== tab2.getAttribute("data-tab")) {
        tab2.classList.remove("is-active");
      }
    });

    // Get the data-tab target
    const target = (tab as HTMLElement).getAttribute("data-tab")!;

    tabContents.forEach((tc) => {
      if (!parentTab || parentTab.id !== tc.id) {
        tc.classList.add("hidden");
      }
    });

    // Activate the clicked tab
    tab.classList.add("is-active");
    document.getElementById(target)!.classList.remove("hidden");
    const targetContent = document.getElementById(target)!;

    const childTabs = targetContent.querySelectorAll(".tab");
    if (childTabs.length > 0) {
      const firstChildTab = childTabs[0] as HTMLElement;
      firstChildTab.click(); // Programmatically trigger the click event
    }
  });
});
