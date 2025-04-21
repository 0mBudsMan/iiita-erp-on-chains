import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";

const Home = () => {
  const { token } = useContext(MyContext);
  const [owner, setOwner] = useState("");

  useEffect(() => {
    const fetchOwner = async () => {
      if (!token) {
        console.log("Initialising token")
        return;
      }

      try {
        const _owner = await token.owner();
        setOwner(_owner);
      } catch (error) {
        console.error("Error fetching owner:", error);
      }
    };

    fetchOwner();
  }, [token]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Contract Owner: {owner || "Loading..."}</p>
    </div>
  );
};

export default Home;
