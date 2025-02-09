import React from 'react'

function TaskList({tasks, onToggleComplete, filter, sortBy}) {
 const today = new Date();
 {/*фильтр*/}
 const filteredTasks = tasks.filter(task => {
  if (filter === "comleted") return task.completed;
  if (filter === "pending") return !task.completed;
  return true;
 });
 {/*Сортировка*/}

 return (
    <div>TaskList</div>
  )
}

export default TaskList
