import React, {useState, useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const {addTransaction} = useContext(GlobalContext);

    const handleText = e => {
        setText(e.target.value);
    };

    const handleAmount = e => {
        setAmount(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000),
            text: text,
            amount: +amount
        };
          if (text && amount) {
            addTransaction(newTransaction);
        } else {
            alert("Please fill in both input fields")
        }
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={handleText} placeholder="Enter text..."/>
                    {/*<input type="text" value={text} onChange={(e) => setText(e.target.value)}*/}
                    {/*       placeholder="Enter text..."/>*/}
                    {/*if you dont create handleText function*/}
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={handleAmount}
                           placeholder="Enter amount..."/>
                    {/*<input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}*/}
                    {/*       placeholder="Enter amount..."/>*/}
                    {/*if you dont create handleAmount function*/}
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
};
