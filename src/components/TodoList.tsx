import React from 'react';
import { observer } from 'mobx-react-lite';
import { TodoListViewModel } from './TodoList.viewmodel';
import { TodoItem } from './TodoItem';

export const TodoList: React.FunctionComponent<{
  viewmodel: TodoListViewModel,
}> = observer((props) => {
  const {
    viewmodel,
  } = props;
  return (
    <div>
      {viewmodel.todos.map(
        (itemViewModel) => (
          <TodoItem viewmodel={itemViewModel} />
        ),
      )}

      <hr />
      <input
        type="text"
        value={viewmodel.newTodoText}
        onChange={
                    (e) => viewmodel.setNewTodoText(e.target.value)
                }
      />
      <button
        type="button"
        onClick={() => viewmodel.addNewTodo()}
      >
        추가하기
      </button>
    </div>
  );
});
