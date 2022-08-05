import React from 'react';
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { ConnectButton, Icon } from "web3uikit";
import Project from './Project';
import "./Home.css";

const Home = () => {
  const { isAuthenticated, Moralis } = useMoralis();
return(
  <>
    {isAuthenticated ? (
      <Project/>
    ):(
      <div className="loginPage">
          <ConnectButton />
      </div>
    )}
    {console.log(isAuthenticated)}
  </>
)
}

export default Home;
