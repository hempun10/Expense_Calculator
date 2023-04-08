import React from "react";
import { categories } from "../constants";

interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((categroy) => (
          <option value={categroy} key={categroy}>
            {categroy}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
