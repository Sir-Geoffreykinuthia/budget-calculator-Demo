import React from 'react'
import ItemForm from "./ItemForm"
import { MdDelete } from 'react-icons/md';

const ItemList = ({ expenses}) => {

  return (
    <>
    <ul className='list'>
      {expenses.map(expense => {
      return <ItemForm key={expense.id} expense={expenses} />;
      })}
    </ul>
    {expenses.lenghth > 0 && (
    <button className='btn'>
      Change expenses
      <MdDelete className="btn-icon" />
      </button>
    )}  
    </>
  )


};

export default ItemList;