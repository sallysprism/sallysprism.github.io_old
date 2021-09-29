import { makeAutoObservable } from 'mobx';

export class TodoItemViewModel { // 빵틀
  constructor(
    public done: boolean,
    public text: string, // 밖에서 받은 text
  ) {
    // this.done = done;
    // this.text = text;  <-- 앞에 public 붙이면 알아서 해줌

    makeAutoObservable(this); // mobx 가 지켜보고 있게
  }

  setDone(done: boolean) {
    this.done = done;
  }

  setText(text: string) {
    this.text = text;
  }
}
