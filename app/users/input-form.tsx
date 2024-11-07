'use client';

//codesandbox.io/p/devbox/morning-fire-ryx3t8

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

export default function InputForm({ onSubmit }: any) {
  const [user, setUser] = useState('');
  const unis = [
    'Tu-Sofia',
    'SU',
    'UNSS'
  ]

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(user);
    setUser({ age: '', name: '' }); // reset form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="card flex flex-wrap flex-column align-items-center justify-content-center gap-3">
      <div className="p-inputgroup flex-1">
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <InputText
          placeholder="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div className="p-inputgroup flex-1">
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <InputText
          placeholder="Age"
          name="age"
          type="number"
          value={user.age}
          onChange={handleChange}
        />
      </div>
      <div className="p-inputgroup flex-1">
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <Dropdown
        value={user.uni}
        name="uni"
        onChange={handleChange} 
        options={unis} 
        optionLabel="name" 
        placeholder="Select a Uni" 
        className="w-full md:w-14rem"
     />
    </div>
      {user && <div> Success!!! </div>}
      <div style={{ 'align-self': 'end' }}>
        <Button label="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
}
