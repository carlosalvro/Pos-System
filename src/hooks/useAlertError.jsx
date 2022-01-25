import React, {useContext} from 'react';

const useAlertError = (errorResponse) => {
  const status = errorResponse.status;

  if (status === 400) {
    var errorMessage = errorResponse.data.message
  } else if (status === 409) {
    var errorMessage = errorResponse.data.errors.map(error => error.message)
  }

  return {
    position: true,
    severity: "error",
    message: errorMessage 
  };
}

export default useAlertError;
