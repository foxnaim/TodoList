import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("deadline");

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id !== id));
 };
 

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex flex-col items-center  min-h-screen p-10">
      <h1 className="text-4xl font-bold text-[#3B3B3B] mb-6">Управление задачами</h1>
      <div className="flex gap-10 w-full max-w-4xl">
        {/* Левая часть - Форма */}
        <div className=" p-6 rounded-2xl shadow-lg w-1/3">
          <h2 className="text-2xl text-[#3B3B3B] font-semibold mb-4">Добавить задачу</h2>
          <TaskForm onAddTask={addTask} />
        </div>

        {/* Правая часть - Список */}
        <div className="p-6 rounded-2xl shadow-lg w-2/3">
          <h2 className="text-2xl text-[#3B3B3B] font-semibold mb-4">Список задач</h2>
          <div className="flex justify-between mb-4">
            <select
              className="p-2 border rounded-lg text-[#3B3B3B]"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            >
              <option value="all">Все</option>
              <option value="completed">Выполненные</option>
              <option value="pending">Невыполненные</option>
            </select>

            <select
              className="p-2 border rounded-lg text-[#3B3B3B]"
              onChange={(e) => setSortBy(e.target.value)}
              value={sortBy}
            >
              <option value="deadline">По дедлайну</option>
              <option value="priority">По приоритету</option>
            </select>
          </div>
          <TaskList tasks={tasks} onToggleComplete={toggleComplete} onDeleteTask={deleteTask} filter={filter} sortBy={sortBy} />
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
