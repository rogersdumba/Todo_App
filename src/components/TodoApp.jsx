import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Trash2, CheckCircle, Folder } from 'lucide-react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useNavigate } from 'react-router-dom'; // ✅ Corrected import
import './styles/TodoApp.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [category, setCategory] = useState('General');
  const [categories, setCategories] = useState(['General']);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate(); // ✅ Replaced useHistory with useNavigate

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== '' && startDate && endDate) {
      setTasks([...tasks, { text: newTask, completed: false, category, startDate, endDate }]);
      setNewTask('');
      setStartDate('');
      setEndDate('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const addCategory = () => {
    const newCategory = prompt('Enter new category:');
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setCategory(newCategory);
    }
  };

  const handleLogout = () => {
    navigate('/login'); // ✅ Redirects user to login page after logging out
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="todo-container">
        <h1 className="todo-header">Create Tasks Here</h1>
        <div className="todo-input-container">
          <Input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="todo-input"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
          <label htmlFor="start-date" className='dateStart'>Start Date:</label>
          <Input
          id="start-date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="date-input"
          />

         <label htmlFor="end-date" className='dateEnd'>End Date:</label>
         <Input
         id="end-date"
         type="date"
         value={endDate}
         onChange={(e) => setEndDate(e.target.value)}
         className="date-input"
        />

          <Button onClick={addTask} className="todo-button">
            Add
          </Button>
        </div>

        <Button onClick={addCategory} className="add-category-button">
          <Folder /> Add Category
        </Button>

        <div className="w-full max-w-md space-y-2">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <Card key={index} className={`task-card ${task.completed ? 'completed' : ''}`}>
                <CardContent className="flex items-center gap-2">
                  <CheckCircle
                    className={`cursor-pointer ${task.completed ? 'text-green-500' : 'text-gray-300'}`}
                    onClick={() => toggleTask(index)}
                  />
                  <span className={`task-text ${task.completed ? 'completed' : ''}`}>{task.text}</span>
                  <span className="task-category">({task.category})</span>
                  <span className="task-dates">{task.startDate} - {task.endDate}</span>
                </CardContent>
                <Trash2 className="delete-icon" onClick={() => deleteTask(index)} />
              </Card>
            ))
          ) : (
            <p className="text-gray-500 text-center">No tasks yet! Add one above.</p>
          )}
        </div>

        <Button onClick={handleLogout} className="logout-button">
          Logout
        </Button>
      </div>
    </DndProvider>
  );
};

export default TodoApp;