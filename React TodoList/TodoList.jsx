import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTask = () => {
        if (inputValue !== '') {
            setTasks([...tasks, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const handleCompleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const pendingTasks = tasks.filter((task) => !task.completed);

    return (
        <div className='allbag'>
            <div className="todo-list">
                <h1>Pending Tasks ({pendingTasks.length})</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Add a task"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={handleAddTask}>Add</button>
                </div>
                <div className="tasks-container">
                    {tasks.map((task, index) => (
                        <div key={index} className={`task ${task.completed ? 'completed' : ''}`}>
                            <p>{task.text}</p>
                            <div className="buttons-container">
                                {!task.completed && (
                                    <button onClick={() => handleCompleteTask(index)}>Complete</button>
                                )}
                                <button onClick={() => handleDeleteTask(index)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodoList;
