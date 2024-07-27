import { makeAutoObservable } from "mobx";

class LanguageStore {
  currentLang = "est";

  constructor() {
    makeAutoObservable(this);
  }

  set setLanguage(lang) {
    if (lang === "est" || lang === "rus" || lang === "fin") {
      this.currentLang = lang;
    }
  }

  getLanguage = () => {
    return this.currentLang;
  };
}

const langStore = new LanguageStore();
export default langStore;
