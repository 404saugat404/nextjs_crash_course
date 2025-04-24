'use client';

import { useEffect, useState } from 'react';

// Define a type for the user object
type User = {
  id: number;
  name: string;
};

export default function Page() {
  const [users, setUsers] = useState<User[]>([]); // Use the User type here

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data)) // Specify the type of the fetched data
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Users</h1>
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
