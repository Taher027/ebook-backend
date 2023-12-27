import { IGenericErrorMessage } from "../../interface/error";

const handleDuplicateError = (error: Record<string, any>) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: Object.keys(error.keyPattern)[0],
      message: `${Object.keys(error.keyPattern)[0]} is already exists`,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Duplicate Entry',
    errorMessages: errors,
  };
};

export default handleDuplicateError;
