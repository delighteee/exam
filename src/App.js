import "./App.css";
import React, { useState } from "react";
import { UserAuthContext } from "./context/userContext";
import Layout from "./pages/components/Layout";
import AppRouter from "./Route/AppRouter";
import { ErrorBoundary } from "react-error-boundary"; //

//Errorfallback
function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

//App
const USER = { isGuestUser: true, displayName: " " };

export default function App() {
  const [user, setUser] = useState(USER);

  function logIn(username) {
    setUser({ isGuestuser: false, displayName: username });
  }

  function logOut() {
    setUser(USER);
  }

  return (
    <UserAuthContext.Provider value={{ user, logIn, logOut }}>
      <div className="App">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Layout />
          <AppRouter />
        </ErrorBoundary>
      </div>
    </UserAuthContext.Provider>
  );
}
