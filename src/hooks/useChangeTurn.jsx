import React, {useState} from "react";

const useChangeTurn = () => {
  const [turn, setTurn] = useState(false);

  const changeTurn = () => {
    console.log(turn)
    setTurn(!turn);
    console.log(turn)
  }

  return [
    turn,
    changeTurn
  ];
}

export default useChangeTurn;