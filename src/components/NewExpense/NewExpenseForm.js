import React,{useState} from "react";
import "./NewExpenseForm.css"


function NewExpenseForm(props){

//#---Multiple useState
    const [enteredTitle,setEnteredTitle] = useState('')
    const [enteredAmount,setEnteredAmount] = useState('')
    const [enteredDate,setEnteredDate] = useState('')


//#---one line useState depend on the previous state "the best practecies"
    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })



    const titleChangeHandler = (event) => {
//#---Multiple useState
        setEnteredTitle(event.target.value)
//#---one line useState depend on the previous state "the best practecies"
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle: event.target.value};
        // })
    };

    const amountChangeHandler = (event) => {
//#---Multiple useState
        setEnteredAmount(event.target.value)
//#---one line useState depend on the previous state "the best practecies"
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredAmount:event.target.value};
        // })
    }
    
    const dateChangeHandler = (event) => {
//#---Multiple useState
        setEnteredDate(event.target.value)
//#---one line useState depend on the previous state "the best practecies"
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredDate:event.target.value};
        // })
    }

    console.log(enteredTitle);
    console.log(enteredAmount);
    console.log(enteredDate);

//#---one line useState depend on the previous state "the best practecies"
    // console.log(userInput)
    // console.log(userInput.enteredTitle);
    // console.log(userInput.enteredAmount);
    // console.log(userInput.enteredDate);


    const submitHandler = (event) =>{
        event.preventDefault() //meaning that the default action that belongs to the event will not occur

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        props.passingData(expenseData)

        console.log(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01"  onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date'  min="2019-01-01" max="2023-12-31"  onClick={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" > add Expense</button>
                </div>
            </div>
        </form>
    );
}
export default NewExpenseForm;