import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { getUsers } from '../redux/actionCreator/user';

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const { users, error, loading } = useTypeSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(getUsers());
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
