import React ,{ useState } from "react";
import "./Expenses.css"

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart"


function Expenses(props) {

  const[filteredYear,setfilteredYear] = useState('all')

  const ChangeFilterHandler = (selectedYear)=>{
    setfilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filterd_Expenses = props.items.filter((elm)=>{
    return filteredYear === "all" 
            ? elm 
            : elm.date.getFullYear().toString() === filteredYear ;
  })
  
  console.log("lvel 1");
  console.log(filterd_Expenses.length);
  
  return (
  
  <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={ChangeFilterHandler}/>
    <ExpensesChart expenses = {filterd_Expenses}/>
    <ExpenseList itemsFiltered ={filterd_Expenses}/>
  </Card>
  
  );}

export default Expenses;