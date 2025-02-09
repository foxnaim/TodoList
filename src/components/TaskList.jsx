function TaskList({ tasks, onToggleComplete, filter, sortBy, onDeleteTask }) {
 const today = new Date();

 // Фильтрация
 const filteredTasks = tasks.filter((task) => {
   if (filter === "completed") return task.completed;
   if (filter === "pending") return !task.completed;
   return true;
 });


 // Сортировка
 const sortedTasks = [...filteredTasks].sort((a, b) => {
   if (sortBy === "priority") {
     const priorityOrder = { high: 3, medium: 2, low: 1 };
     return priorityOrder[b.priority] - priorityOrder[a.priority];
   }
   return new Date(a.deadline) - new Date(b.deadline);
 });

 return (
   <ul>
     {sortedTasks.map((task) => {
       const isOverdue = new Date(task.deadline) < today && !task.completed;

       return (
         <li key={task.id} style={{ color: isOverdue ? "red" : "black" }}>
           <h3>{task.title}</h3>
           <p>{task.description}</p>
           <p>Дедлайн: {new Date(task.deadline).toLocaleDateString()}</p>
           <p>Приоритет: {task.priority}</p>
           <p>Статус: {task.completed ? "✅ Выполнено" : "⏳ В процессе"}</p>
           {isOverdue && <p style={{ color: "red" }}>Просрочено!</p>}
           <div className="gap-4">
           <button onClick={() => onToggleComplete(task.id)}>
             {task.completed ? "Отменить" : "Завершить"}
           </button>
           <br/>
           <button onClick={() => onDeleteTask(task.id)} style={{ color: "red" }}>
            ❌ Удалить
          </button>
          </div>
         </li>
       );
     })}
   </ul>
 );
}
export default TaskList;
