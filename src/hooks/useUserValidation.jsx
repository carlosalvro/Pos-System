import React, {useState} from "react";

const useUserValidation = () => {
  const [user, setUser] = useState(true);

  const userChange = () => {
    console.log(user)
    setUser(!user);
    console.log(user)
  }

  return [
    user,
    userChange
  ];
}

export default useUserValidation;