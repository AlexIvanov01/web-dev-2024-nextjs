'use client';

import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { User } from './user';
import { Button } from 'primereact/button';

export default function UsersTable({ users }: { users: User[] }) {

  const [user, setUser] = useState(null);
  const [_users, setUsers] = useState(users);

  useEffect(()=>{
    setUsers(users);
  }, [])
  const deleteUser = (user) => {
    let _users = users.filter((val) => val.name !== user.name);

    setUsers(_users);
  };

const actionBodyTemplate = (rowData) => {
  return (
      <React.Fragment>
          <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => deleteUser(rowData)} />
      </React.Fragment>
  );
};

  return (
    <div className="card">
      <DataTable
        value={_users}
        paginator
        rows={10}
        dataKey="name"
        filterDisplay="row"
        emptyMessage="No customers found."
      >
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search by users"
          style={{ minWidth: '12rem' }}
        />
        <Column
          field="age"
          header="Age"
          filter
          filterPlaceholder="Search by age"
          style={{ minWidth: '12rem' }}
        />
        <Column
          field="uni"
          header="Uni"
          filter
          filterPlaceholder="Search by uni"
          style={{ minWidth: '12rem' }}
        />
        <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
        
      </DataTable>
    </div>
  );
}
