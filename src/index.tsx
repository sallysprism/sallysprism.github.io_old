import React from 'react';
import { render } from 'react-dom';
import { TodoItem } from './components/TodoItem';
import { TodoItemViewModel } from './components/TodoItem.viewmodel';
import { TodoList } from './components/TodoList';
import { TodoListViewModel } from './components/TodoList.viewmodel';

const todoItemVM = new TodoItemViewModel( // 빵
  false, '할일',
);

const todoListVM = new TodoListViewModel(
  [
    todoItemVM,
  ],
);

render(
  <TodoList viewmodel={todoListVM} />,
  document.getElementById('root'),
);
