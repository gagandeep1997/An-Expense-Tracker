import React from 'react';
import './App.css';
import {Header} from "./component/header.js";
import {Balance} from "./component/Balance.js";
import {Income} from "./component/Income.js";
import {TransactionList} from "./component/TransactionList.js";
import {AddTransaction} from "./component/AddTransaction.js";
import {GlobalProvider} from "./context/Globalstate.js";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
      <Balance />
      <Income />
      <TransactionList />
      <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
