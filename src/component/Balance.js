import React,{useContext} from 'react';
import {GlobalContext} from "../context/Globalstate";

export const Balance = () => {
    const {transaction} = useContext(GlobalContext);
    
    const amounts=transaction.map(transaction => transaction.amount);
    const Balance=amounts.reduce((total,item) => (total=total+item),0).toFixed(2);
    return (
        <div>
        <h4>Balance</h4>
        <h1>${Balance}</h1>
        </div>
    )
}
