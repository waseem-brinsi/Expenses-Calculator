import React from "react"
import ExpenseItem from "./ExpenseItem";


function ExpenseList(props) {


  if ( props.itemsFiltered.length === 0 ) {
    return (
      <h2 className="expenses-list">No Expenses Found</h2>
    )
  }

  return(
    <ul className="expenses-list">
      { 
      props.itemsFiltered.map((elm)=>{   
        return (
          <ExpenseItem
            key = {elm.id} 
            title = {elm.title} 
            amount = {elm.amount}
            date = {elm.date}>
          </ExpenseItem>
        )
      })
      }
    </ul>
  )
}
export default ExpenseList