import React from 'react';
import { observer } from 'mobx-react-lite';
import { TodoItemViewModel } from './TodoItem.viewmodel';
import styles from './TodoItem.scss';

// export function TodoItem2(props: {  // 아래꺼 동일한 것
//     viewmodel: TodoItemViewModel,
// }) {

// }

export const TodoItem: React.FunctionComponent<{
  viewmodel: TodoItemViewModel,
}> = observer((props) => {
  const {
    viewmodel,
  } = props;
  return (
    <>
      <div
        className={styles.root}
      >
        <input
          type="checkbox"
          checked={viewmodel.done}
          onChange={() => viewmodel.setDone(!viewmodel.done)}
        />
        <input
          // className={styles.textInput}
          type="text"
          value={viewmodel.text}
          onChange={(e) => viewmodel.setText(e.target.value)}
        />
      </div>
      <div>
        <p>
          {' '}
          {viewmodel.text}
        </p>
      </div>
    </>
  );
});
