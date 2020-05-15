import React,{useReducer} from 'react';
import AppReducer from './AppReducer';

const initialstate = {
    transaction :
    [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}
export const GlobalContext = React.createContext(initialstate);

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialstate);
    
    function deleteTransaction(id)
    {
        dispatch(
            {
                type:'Delete_Transaction',
                payload:id
            }
        );
    }
    function addTransaction(transaction)
    {
        dispatch(
            {
                type:'add_Transaction',
                payload:transaction
            }
        );
    }
    return(
        <GlobalContext.Provider value={
            {transaction:state.transaction,deleteTransaction,addTransaction}
        }>
            {children}
            </GlobalContext.Provider>

    );
}