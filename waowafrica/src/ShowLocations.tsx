import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

  
export default function ShowLocations() {
    const tasks = useQuery(api.locations.get);
    return (
      <div className="App">
        {tasks?.map(({ _id, name, editedby }) => (
          <div key={_id}>name:{name}, email:{editedby}</div>
        ))}
      </div>
    );
  }