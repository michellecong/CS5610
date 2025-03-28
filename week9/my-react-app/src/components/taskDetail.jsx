import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function TaskDetail() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/users?task=${id}`);

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [id]); // Fetch users whenever the id changes

  return (
    <div className="task-detail">
      <h3>Task ID: {id}</h3>

      {loading ? (
        <p>Loading responsible users...</p>
      ) : (
        <div>
          <h4>Responsible Users:</h4>
          {users.length > 0 ? (
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          ) : (
            <p>No users assigned to this task</p>
          )}
        </div>
      )}
    </div>
  );
}
