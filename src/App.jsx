import { useState, useEffect } from 'react';
import UserCard from './UserCard';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>User Directory</h1>

      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>Error loading data: {error}</p>}

      {!loading && !error && users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}