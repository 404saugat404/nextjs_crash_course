export default async function Page() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }

    const users = await res.json();

    return (
      <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">Users</h1>
        <ul className="max-w-md mx-auto bg-gray-800 shadow-md rounded-lg p-4">
          {users.map((user: { id: number; name: string }) => (
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
  catch (error) {
    throw new Error('Error fetching users');
  }
}
