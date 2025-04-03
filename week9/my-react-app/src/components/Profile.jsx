import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(user);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !user) {
    return <div>Please log in to view your profile</div>;
  }

  return (
    <div className="profile">
      <div className="profile-header">
        {user.picture && <img src={user.picture} alt="Profile" />}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <div className="profile-details">
        <h3>User Information</h3>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
}
