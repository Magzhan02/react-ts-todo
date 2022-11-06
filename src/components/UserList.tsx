import React from 'react';
import { useActions } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypeSelector';

const UserList: React.FC = () => {
  const { users, error, loading } = useTypeSelector((state) => state.user);
  const { getUsers } = useActions();

  React.useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <h1>Загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return <div>{users && users.map((u) => <div key={u.id}>{u.name}</div>)}</div>;
};

export default UserList;
