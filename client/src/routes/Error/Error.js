import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFound;
