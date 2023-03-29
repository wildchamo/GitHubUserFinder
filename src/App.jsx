import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Searcher } from "./Components/Searcher";
import { getUser } from "./services/users";
import UserCard from "./Components/containers/userCard";

const App = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState("");
  const [notFound, setnotFound] = useState(false);

  const getGUser = async (user) => {
    try {
      const userResponse = await getUser(user);
      setUserState(userResponse)

      console.log(userResponse)
    } catch (error) {
      console.log("Error detectado: ", error);
      setnotFound(true);
    }
  };

  useEffect(() => {
    getGUser(inputUser);
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

      <UserCard userState={userState}/>
    </Container>
  );
};

export default App;
