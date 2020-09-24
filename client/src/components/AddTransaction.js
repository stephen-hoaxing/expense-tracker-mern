import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { changeStyle } from "../utils/format";
import classNames from "classnames";

const AddTransaction = () => {
  const { addTransaction, theme } = useContext(ExpenseContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const styleLabel = changeStyle(theme, "");
  const styleInput = classNames({
    "light-border": theme === "light",
    "dark-border": theme === "dark",
  });
  const submitForm = (e) => {
    const newTransaction = {
      text,
      amount: +amount,
    };
    e.preventDefault();
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };
  return (
    <div className="form-container">
      <div className="main-container">
        <form className="form" onSubmit={submitForm}>
          <div className="form-control">
            <label htmlFor="text" className={styleLabel}>
              Text
            </label>
            <input
              type="text"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={styleInput}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount" className={styleLabel}>
              Amount
            </label>
            <input
              type="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={styleInput}
            />
          </div>
          <div className="form-control">
            <button className="add-btn">Add Transaction</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
