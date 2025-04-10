import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Auth0ProviderWithHistory({ children }) {
  // use useNavigate hook
  const navigate = useNavigate();

  // Define callback function to handle navigation after authentication
  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  // Check environment variables
  if (
    !import.meta.env.VITE_AUTH0_DOMAIN ||
    !import.meta.env.VITE_AUTH0_CLIENT_ID
  ) {
    console.error(
      "Auth0 environment variables missing. Please check if VITE_AUTH0_DOMAIN and VITE_AUTH0_CLIENT_ID are set in the .env file."
    );
    return (
      <div style={{ color: "red", padding: "20px" }}>
        <h2>Auth0 Configuration Error</h2>
        <p>Please check the environment variables configuration.</p>
      </div>
    );
  }

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}
