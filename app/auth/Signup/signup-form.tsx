"use client";
import React, { useState } from 'react';
import OAuth from '@/Components/Oauth';
import Link from 'next/link';
import axios from 'axios';


function CreateUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('Form submitted:', { name, email, password });
    const userData = { name, email, password, files: { image } };
    console.log('Sending user data:', userData);
    
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      if (image) {
        formData.append('files', image);
      }

      const response = await axios.post('/api/auth/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        const newUser = response.data;
        console.log('User created:', newUser);
        // Clear form or show success message
        setMessage('User created successfully!');
      } else {
        //console.error('Error creating user:', response.data.message);
        setMessage(response.data.message || 'Error creating user');
      }
    } catch (error) {
      //console.error('Network error:', error);
      setMessage(`${error}. Please try again later.`);
    }
  };
  // const files = {
  //   file: {

  //   }
  // }
  return (
    <div> 
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} required minLength={2} maxLength={100} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} required minLength={8} onChange={(e) => setPassword(e.target.value)} />
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} required />
      <button type="submit">Create User</button>
    </form>
    {message && <p>{message}</p>}
    <Link href="/login">Already have an account? Log in</Link>
    <OAuth />
    </div>
  );
}

export default CreateUserForm;