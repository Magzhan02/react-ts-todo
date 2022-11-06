import React from 'react';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypeSelector';

const TodoList = () => {
  const { todo, error, loading, page, limit } = useTypeSelector((state) => state.todo);
  const { getTodo, setPageTodo } = useActions();
  const pages = [1, 2, 3, 4, 5];
  React.useEffect(() => {
    getTodo(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todo &&
        todo.map((t) => (
          <div key={t.id}>
            {t.id} - {t.title}
          </div>
        ))}
      <div style={{ display: 'flex' }}>
        {pages &&
          pages.map((p) => (
            <div
              key={p}
              onClick={() => setPageTodo(p)}
              style={{
                border: p === page ? '2px solid green' : '1px solid blue',
                padding: '5px 10px',
                margin: '10px 10px 0px 0px',
              }}>
              {p}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoList;
