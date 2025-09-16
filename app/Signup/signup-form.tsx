"use client";
import React, { useState } from 'react';
import OAuth from '../Components/Oauth';
import Link from 'next/link';
import axios from 'axios';

function CreateUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userData = { name, email, password };

    try {
      const response = await axios.post('/api/users', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        const newUser = response.data;
        console.log('User created:', newUser);
        // Clear form or show success message
      } else {
        console.error('Error creating user:', response.data.message);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div> 
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} required minLength={2} maxLength={100} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} required minLength={8} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Create User</button>
    </form>
    <Link href="/login">Already have an account? Log in</Link>
    <OAuth />
    </div>
  );
}

export default CreateUserForm;