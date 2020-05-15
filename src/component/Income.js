import React,{useContext} from 'react';
import {GlobalContext} from "../context/Globalstate";

export const Income = () => {
  const {transaction}=useContext(GlobalContext);

  const amount=transaction.map( transaction => transaction.amount);
  const amounts=transaction.map( transaction => transaction.amount);

  const income=amount.filter(item => (item>0)).reduce( (ans,item) => ans=ans+item,0).toFixed(2);
  const expense=amounts.filter(item => (item<0)).reduce( (ans,item) => ans=ans+item,0)*(-1).toFixed(2);
  
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
    <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
    <p className="money minus">{expense}</p>
        </div>
      </div>
    )
}
