import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Searcher } from "./Components/Searcher";
import {getUser} from "./services/users"

const App = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState("");

  const getGUser= async(user)=>{
    const userResponse= await getUser(user);
    console.log(userResponse)
  }


  useEffect(() => {
    getGUser(inputUser)
  }, [inputUser]);

  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        height: "500px",
        borderRadius: "16px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  );
};

export default App;
