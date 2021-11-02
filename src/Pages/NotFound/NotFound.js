import React from "react";
import FoundImg from "../../images/notFound/notfound.png";

const NotFound = () => {
  return (
    <div>
      <img className="w-100" src={FoundImg} alt="Not Found Img" />
    </div>
  );
};

export default NotFound;
