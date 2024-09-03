import { makeAutoObservable } from "mobx";

class LanguageStore {
  currentLang = window.localStorage.getItem("lang") || "rus";

  constructor() {
    makeAutoObservable(this);
  }

  set setLanguage(lang) {
    if (lang === "est" || lang === "rus" || lang === "fin") {
      this.currentLang = lang;
      window.localStorage.setItem("lang", lang);
    }
  }

  getLanguage = () => {
    return this.currentLang;
  };
}

const langStore = new LanguageStore();
export default langStore;
