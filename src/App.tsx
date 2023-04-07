import { useState } from "react";
import FormCard from "./Components/FormCard";
import ExpenseList from "./Components/ExpenseList";

function App() {
  const [expense, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Kitchen" },
    { id: 2, description: "aaa", amount: 10, category: "Kitchen" },
    { id: 3, description: "aaa", amount: 10, category: "Kitchen" },
    { id: 4, description: "aaa", amount: 10, category: "Kitchen" },
  ]);

  return (
    <div className="App">
      <FormCard />
      <ExpenseList
        expenses={expense}
        onDelete={(id) => setExpenses(expense.filter((e) => e.id != id))}
      />
    </div>
  );
}

export default App;
