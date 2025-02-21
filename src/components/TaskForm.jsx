import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !deadline) return;
    const newTask = {
      id: Date.now(),
      title,
      description,
      deadline: new Date(deadline),
      priority,
      completed: false,
    };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
    setDeadline('');
    setPriority('low');
  };

  return (
    <div className=" p-6 rounded-2xl shadow-xl max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-center">Создать задачу</h1>
        
        <input
          type="text"
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-100 text-white"
          required
        />
        
        <textarea
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-gray-100 text-white" 
        />
        
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-100"
          required
        />
        
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-100"
        >
          <option value="low">Низкий</option>
          <option value="medium">Средний</option>
          <option value="high">Высокий</option>
        </select>
        
        <button
          type="submit"
          className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-900 transition"
        >
          Добавить
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
