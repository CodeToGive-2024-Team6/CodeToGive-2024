import React, { useState, useEffect } from 'react';
import './GoalsFragment.css'; // Import CSS file
import { MdDeleteForever } from "react-icons/md";

function GoalsFragment() {

    const [goals, setgoals] = useState([
        {heading: 'goal 1', meetingInfo: 'Meeting Info 1', date: '2022-01-01', time: '12:00', type: 'Type 1', note: 'Note 1', communication: 'Communication 1'},
        {heading: 'goal 2', meetingInfo: 'Meeting Info 2', date: '2022-02-02', time: '13:00', type: 'Type 2', note: 'Note 2', communication: 'Communication 2'},
        {heading: 'goal 3', meetingInfo: 'Meeting Info 3', date: '2022-03-03', time: '14:00', type: 'Type 3', note: 'Note 3', communication: 'Communication 3'},
        {heading: 'goal 4', meetingInfo: 'Meeting Info 4', date: '2022-04-04', time: '15:00', type: 'Type 4', note: 'Note 4', communication: 'Communication 4'},
    ]);

    const [selectedgoal, setSelectedgoal] = useState(null);
    const [newgoal, setNewgoal] = useState({ heading: '', meetingInfo: '', date: '', time: '', type: '', note: '', communication: ''});
    const [showForm, setShowForm] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handlegoalClick = (goal) => {
        setSelectedgoal(goal);
    };

    const handleCloseModal = () => {
        setSelectedgoal(null);
    };

    const handleInputChange = (event) => {
        setNewgoal({ ...newgoal, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setgoals([...goals, newgoal]);
        setNewgoal({ heading: '', meetingInfo: '', date: '', time: '' , type: '', note: '', communication: ''});
        setShowForm(false);
        setIsFormOpen(false);
    };

    const handleLongPress = (index) => {
        const newgoals = [...goals];
        newgoals.splice(index, 1);
        setgoals(newgoals);

    };

    useEffect(() => {
        if (isFormOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isFormOpen]);
    
    return (


        <div className='container'>
            <div className='list-view-goals'>
                

            {goals.map((goal, index) => (
                    <div key={index} className="goal-item"  onClick={() => handlegoalClick(goal)} onContextMenu={(event) => { event.preventDefault(); handleLongPress(index); }}>
                        <delete-button onClick={() => handleLongPress(index)}><MdDeleteForever style={{fontSize: '20px'}}/></delete-button>
                        <div className="goal-item-content">
                            <h2 className="goal-heading">{goal.heading}</h2>
                            <div className="goal-details">
                                <p><strong>Meeting Info: </strong> {goal.meetingInfo}</p>
                                <p><strong>Type: </strong> {goal.type}</p>
                                <p><strong>Note: </strong> {goal.note}</p>
                                <p><strong>Communication: </strong> {goal.communication}</p>

                            </div>
                        </div>
                        <div className="goal-date">
                            <p>{goal.date} at {goal.time}</p>
                        </div>

                    </div>
                ))}

                <button onClick={() => {setShowForm(true);setIsFormOpen(true)} }>Add goal</button>
                
                {showForm && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close-button" onClick={() => {setShowForm(false);setIsFormOpen(false)}}>&times;</span>
                            <form className="form-container" onSubmit={handleFormSubmit}>
                                <input name="heading" value={newgoal.heading} onChange={handleInputChange} placeholder="goal Heading" required />
                                <input name="meetingInfo" value={newgoal.meetingInfo} onChange={handleInputChange} placeholder="Meeting Info" required />
                                <input name="date" value={newgoal.date} onChange={handleInputChange} placeholder="Date (YYYY-MM-DD)" required />
                                <input name="time" value={newgoal.time} onChange={handleInputChange} placeholder="Time (HH:MM)" required />
                                <input name="type" value={newgoal.type} onChange={handleInputChange} placeholder="Type" required />
                                <input name="note" value={newgoal.note} onChange={handleInputChange} placeholder="Note" required />
                                <input name="communication" value={newgoal.communication} onChange={handleInputChange} placeholder="Means of Communication" required />
                                <br />
                                <button type="submit" style={{marginBottom: '30px'}}>Add goal</button>
                            </form>
                        </div>
                    </div>
                )}
           
                </div>
                

            </div>

        
    );
}

export default GoalsFragment;