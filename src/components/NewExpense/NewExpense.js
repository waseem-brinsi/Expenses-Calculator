import React from "react";
import "./NewExpense.css"
import NewExpenseForm from "./NewExpenseForm"

function NewExpense(props){

    const passingDataHandler = (enteredExpenseData)=>{
        const  expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onSaveNewExpense(expenseData)
        console.log(expenseData);
    }
    
    return (
        <div className="new-expense">
            <NewExpenseForm  passingData={passingDataHandler }></NewExpenseForm>
        </div>
    );
}

export default NewExpense;