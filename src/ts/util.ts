import i18next from "i18next";

export function retranslate(el: HTMLElement | Element) {
  el.querySelectorAll("[data-i18n]").forEach((element) => {
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
}

export function inputExchange(src: HTMLInputElement, dest: HTMLInputElement) {
  let rightV = src.value;
  let leftV = dest.value;

  (src.value = leftV), (dest.value = rightV);
}
