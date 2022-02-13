import React, {useState} from "react";

const useUserValidation = () => {
  const [user, setUser] = useState(true);

  const userChange = () => {
    setUser(!user);
  }

  return [
    user,
    userChange
  ];
}

export default useUserValidation;