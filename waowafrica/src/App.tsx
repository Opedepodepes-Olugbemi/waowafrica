import { SignInButton, SignOutButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated,} from "convex/react";
import AddLocationForm from "./AddLocationForm";
import ShowLocations from "./ShowLocations";

export default function App() {
  return (
    <div className="App">
      <Authenticated>
        <SignOutButton />
        <AddLocationForm/>
        <ShowLocations/>
      </Authenticated>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
    </div>
  );
}


