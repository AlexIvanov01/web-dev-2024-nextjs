'use client';

import { useState } from 'react';
import InputForm from './users/input-form';
import UsersTable from './users/user-list';

export default function DataTable() {
  const [users, setUsers] = useState([{ name: 'Georgi', age: 30, uni: "TU-Sofia" }]);

  const handleFormSubmit = (user) => {
    console.log(`parent ${JSON.stringify(user)}`);
    setUsers((prevData) => [...prevData, user]);
  };

  return (
    <>
      <InputForm onSubmit={handleFormSubmit} />
      <UsersTable users={users} />
    </>
  );
}
