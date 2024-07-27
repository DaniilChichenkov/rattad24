import { makeAutoObservable } from "mobx";

class SideMenuStore {
  isOpened = false;

  constructor() {
    makeAutoObservable(this);
  }

  set sideMenuOpened(state) {
    this.isOpened = state;

    if (this.isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }

  get sideMenuState() {
    return this.isOpened;
  }
}

const sideMenuStore = new SideMenuStore();
export default sideMenuStore;
