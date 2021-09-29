import { makeAutoObservable } from 'mobx';
import { TodoItemViewModel } from './TodoItem.viewmodel';

// a = [1,2,3,]`

export class TodoListViewModel {
  constructor(

    public todos: TodoItemViewModel[],

    public newTodoText: string = '',
  ) {
    makeAutoObservable(this);
  }

  // addTodo(
  //     text: string,
  //     done: boolean,
  // ) {
  //     this.todos.push(
  //         new TodoItemViewModel(done, text)
  //     )
  // }

  addNewTodo() { // 만들기 버튼 눌렀을때
    this.todos.push(
      new TodoItemViewModel(false, this.newTodoText),
    );
    this.newTodoText = '';
  }

  setNewTodoText(newTodoText: string) { // 새로운 todo 글 수정 시
    this.newTodoText = newTodoText;
  }
}
