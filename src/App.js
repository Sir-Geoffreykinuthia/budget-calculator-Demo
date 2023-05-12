import React, { useState} from 'react'
import './App.css';
import ItemList from './components/ItemList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
// trying react icons hehehe
import {MdDelete} from "react-icons/md";


const initialExpenses =[
  {id: 1, charge:"rent", amount:14000},
  {id: 2, charge:"water", amount:1500},
  {id: 3, charge:"electricity", amount:3000}
];
console.log(initialExpenses);

function App() {
  // using array destructuring 
  const [expenses, setExpenses] = useState(initialExpenses);
  //  console.log(expenses);
  const [charge, setCharge] =useState('')

  const [amount, setAmount] =useState('')

  const handleCharge=(e) => {
    setCharge(e.target.value)
    setCharge(e.target.value);
    // console.log(`charge: ${e.target.value}`)
  }


  const handleAmount=(e) => {
    setAmount(e.target.value)
    // console.log(`amount: ${e.target.value}`);
  }


  const handleSubmit=(e) => {
    e.preventDefault();
    // console.log(charge,amount)
    if(charge !=='' && amount>0) {
      // const singleExpense={id:,charge,amount};
      setExpenses([...expenses]);

    }else{
      // handle alert called
    }
  }


  return (
  // using react fragments
   <>
   {/* rendering components */}
   <Alert />
   <h1>budgeting  Calculator</h1>
   {/* initializing the main element */}
   <main className='App' >
   <ExpenseForm  
   charge={charge} 
   amountnt={amount} 
   handleAmount={handleAmount} 
   handleCharge={handleCharge} 
   handleSubmit={handleSubmit}/>
   <ItemList  expenses={expenses}/>
   </main>
   <h1>total expenditure : <span className='total'>
    ksh{expenses.reduce((acc , curr)=>{
      return acc += parseInt(curr.amount)
    },0)}
   </span>
   </h1>
   </>
);
    
}

export default App;
