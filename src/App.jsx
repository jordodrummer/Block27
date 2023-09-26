import { useState } from "react";
import Authenticate from "./components/Authenitcate";
import SignUpForm from "./components/SignUpForm";


export default function App() {
const [token, setToken] = useState(null)

  return (
    <>      <h1>React Forms!</h1>
            <SignUpForm setToken={setToken}/>
            <Authenticate token={token}/>
    </>
  );
}


