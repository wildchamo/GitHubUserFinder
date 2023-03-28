import { urlFetch } from "../constants/index";

const getUser = async (user) => {
  const response = await fetch(`${urlFetch}${user}`, { method: "GET" });

  const payload =response.json()

  return payload;
};
