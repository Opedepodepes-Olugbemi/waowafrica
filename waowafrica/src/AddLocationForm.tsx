
import {
  useMutation, } from "convex/react";
import { api } from "../convex/_generated/api";

 
export default function AddLocationForm() {
    const addLocation = useMutation(api.waowFunctions.addLocation);

  
    return (
      <>
        <p>Add Location</p>
  
        <p>
        Name: <input id="location" type="text"/>
        <button type="button" onClick={() => {
                let x = (document.getElementById('location')as HTMLInputElement).value;
                void addLocation({ name: x});
            }}>Click Me!</button>
  
        </p>
      </>
    );
  }