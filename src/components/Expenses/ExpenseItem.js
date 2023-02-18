import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";





function ExpenseItem(props) {

  const [title,setTitle] = useState(props.title)



  const clickhundler = () =>{

    setTitle("you click me")
    console.log(title);

  }

  return (
    <Card className="expense-item">
      <ExpenseDate
      date = {props.date}
      ></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickhundler}>im button </button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
