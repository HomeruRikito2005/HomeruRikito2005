export default function UserCard({ user }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      padding: '16px', 
      margin: '10px 0', 
      maxWidth: '300px' 
    }}>
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Company:</strong> {user.company?.name}</p>
      <p><strong>City:</strong> {user.address?.city}</p>
    </div>
  );
}