import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Login from "./components/Login";
import JudgementForm from "./components/JudgementForm";


export default function App() {
  const [isUserLogged, setUserLogged] = useState(false);
  const [correctNetwork, setCorrectNetwork] = useState(false);
  const [currentAccount, setCurrentAccount] = useState('');


  const onConnect = async() =>{
    const {ethereum } = window;
    try{

      if(!ethereum){
        console.log("metamask not connected");
        return;
      }
      let chainId = await ethereum.request({method: 'mumbai_chainId'});
      console.log("connected through chain Id", chainId);
      const polygon = '80001';
      if(chainId !== polygon){
        alert("not the correct network");
        setCorrectNetwork(false);
        return;
      }
      else{
        setCorrectNetwork(true);
        console.log("connected ");

      }
    }
    catch(error){
      console.log(error);
    }

    const accounts = await ethereum.request({method : 'eth_requestAccounts'});
    setCurrentAccount(accounts[0]);
    setUserLogged(true);
  }


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Mainpage onConnect={onConnect} isUserLogged={isUserLogged} correctNetwork={correctNetwork} />} />
          <Route path="/login" element={<Login onConnect={onConnect} />} />
          <Route path="/efiling" element={<JudgementForm />} />
          
        </Routes>
      </div>
    </Router>
  );
}
