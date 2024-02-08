import { SignInButton, SignOutButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";

function App() {
  return (
    <div className="App">
      <Authenticated>
        <SignOutButton />
      </Authenticated>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
    </div>
  );
}

export default App
     