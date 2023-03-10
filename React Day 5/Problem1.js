import { useState } from 'react';


export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleAddTask() {
        if (newTask.trim() === '') {
            return;
        }
        setTasks([...tasks, newTask]);
        setNewTask('');
    }

    function handleChange(event) {
        setNewTask(event.target.value);
    }

    return (
        <div style={{textAlign:"center"}}>

            <div className="add-task">
                <input
                    type="text"
                    value={newTask}
                    onChange={handleChange}
                    placeholder="Enter task"
                />
                <button onClick={handleAddTask}>Add</button>
            </div>
             
                {tasks.map((task, index) => (
                    <h5><li key={index}>{task}</li></h5>
                ))}
        
        </div>
    );
}
