import axios from "axios";
import React, { useState, useEffect } from "react";
import ResidentsInfo from "./ResidentsInfo";

const Character = ({ url }) => {

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(url)
      .then(res => setCharacter(res.data))
  }, []);



  return (
    <>
      <div className="cards">
        <div className="cards-img">
          <img src={character.image} alt="" />
        </div>
        <ResidentsInfo character={character} />
      </div>
    </>
  );
};

export default Character;
