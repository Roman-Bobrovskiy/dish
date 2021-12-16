import React from "react";
import Routes from "../components/Routes";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <div className="nopage">
      <h1 className="text404">404</h1>
      <p>{<Link to={{ pathname: `${Routes.home}` }}>HOME</Link>}</p>
    </div>
  );
};
