import React from "react";
import Banner from "../Banner/Banner";
import Beach from "../Beach/Beach";
import Blog from "../Blog/Blog";
import HomeService from "../HomeService/HomeService";
import Tour from "../Tour/Tour";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeService></HomeService>
      <Beach></Beach>
      <Tour></Tour>
      <Blog></Blog>
    </div>
  );
};

export default Home;
