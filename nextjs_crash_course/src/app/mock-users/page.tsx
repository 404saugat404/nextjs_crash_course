'use client';

import { useState, useEffect } from 'react';

// Server-side function to fetch users
async function fetchUsersOnServer() {
  const res = await fetch('https://6808b717942707d722df676a.mockapi.io/users');
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
}

export default function Page() {
  const [users, setUsers] = useState<{ id: string; name: string }[]>([]);
  const [newUserName, setNewUserName] = useState('');

  // Fetch users on the server side and initialize state
  useEffect(() => {
    fetchUsersOnServer()
      .then((data) => setUsers(data))
      .catch((err) => console.error(err.message));
  }, []);

  const addUser = async () => {
    if (!newUserName.trim()) return;

    const res = await fetch('https://6808b717942707d722df676a.mockapi.io/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newUserName }),
    });

    if (res.ok) {
      const newUser = await res.json();
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setNewUserName('');
    } else {
      console.error('Failed to add user');
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Mock Users</h1>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder="Enter user name"
            className="px-4 py-2 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none"
          />
          <button
            onClick={addUser}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add User
          </button>
        </div>
      </div>
      <ul className="max-w-md mx-auto bg-gray-800 shadow-md rounded-lg p-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="border-b border-gray-700 last:border-b-0 py-2 px-4 hover:bg-gray-700"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
