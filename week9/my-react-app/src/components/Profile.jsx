import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function Profile() {
  const { user } = useAuth0();
  console.log(user);
  return (
    user && (
      <div>
        <img src={user.picture} alt={user.name} />
        <p>Hello {user.name}</p>
        <p>{user.email}</p>
      </div>
    )
  );
}
