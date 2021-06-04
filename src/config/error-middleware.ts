const getErrorMessage = errorData => {
  let message = errorData.message;
  if (errorData.fieldErrors) {
    errorData.fieldErrors.forEach(fErr => {
      message += `\nfield: ${fErr.field},  Object: ${fErr.objectName}, message: ${fErr.message}\n`;
    });
  }
  return message;
};

export default () => next => action => {
  // If not a promise, continue on
  if (!(action.payload instanceof Promise)) {
    return next(action);
  }
  return next(action).catch(error => {
    console.error(
      `${action.type} caught at middleware with reason: ${JSON.stringify(
        error.message
      )}.`
    );
    if (error && error.response && error.response.data) {
      const message = getErrorMessage(error.response.data);
      console.error(`Actual cause: ${message}`);
    }

    return Promise.reject(error);
  });
};
