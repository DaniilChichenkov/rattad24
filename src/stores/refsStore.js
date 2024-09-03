import { makeAutoObservable } from "mobx";

class RefsStorage {
  refs = {};

  constructor() {
    makeAutoObservable(this);
  }

  setRef = (key, node) => {
    this.refs[key] = node;
  };

  getRef = (key) => {
    return this.refs[key];
  };
}

const refsStorage = new RefsStorage();

export default refsStorage;
