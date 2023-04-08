import { useState } from "react";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import ExpenseFilter from "./Components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expense, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Groceries" },
    { id: 2, description: "aaa", amount: 10, category: "Groceries" },
    { id: 3, description: "aaa", amount: 10, category: "Groceries" },
    { id: 4, description: "aaa", amount: 10, category: "Groceries" },
  ]);
  const visibleExpense = selectedCategory
    ? expense.filter((e) => e.category === selectedCategory)
    : expense;
  return (
    <div className="App ">
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(newExpense) =>
            setExpenses([...expense, { ...newExpense, id: expense.length + 1 }])
          }
        />
      </div>
      <div className="mb-3 mt-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpense}
        onDelete={(id) => setExpenses(expense.filter((e) => e.id != id))}
      />
    </div>
  );
}

export default App;
