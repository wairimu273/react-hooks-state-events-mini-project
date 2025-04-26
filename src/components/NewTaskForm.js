import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: categories[0], // Default to first non-"All" category
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(), // Simple unique ID
      text: formData.text,
      category: formData.category,
    };
    onTaskFormSubmit(newTask);
    setFormData({ text: "", category: categories[0] }); // Reset form
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
