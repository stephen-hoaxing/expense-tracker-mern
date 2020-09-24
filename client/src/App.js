import React from "react";
import "./App.css";
import TransactionList from "./components/TransactionList";
import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  return (
    <div className="App">
      <Header />
      <ToggleTheme />
      <TransactionList />
      <Balance />
      <AddTransaction />
    </div>
  );
}

export default App;
