import { useRouteError } from "react-router-dom";

const BaseError = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Oops! Something went wrong...</h1>
      <p>Sorry, there was an unexpected error.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default BaseError;
