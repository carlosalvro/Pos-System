import React, {useState} from "react";

const useChangeTurn = () => {
  const [turn, setTurn] = useState(false);

  const changeTurn = () => {
    setTurn(!turn);
  }

  return [
    turn,
    changeTurn
  ];
}

export default useChangeTurn;