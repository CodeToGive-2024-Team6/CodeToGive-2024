import React, { useState, useEffect } from "react";
import './NotesFragment.css';
import { CiCirclePlus } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";


function NotesFragment() {
    const [notes, setNotes] = useState([
        { title: 'Legal Clinic Attendance Follow-Up', type: 'Legal Assistance', details: 'Missed scheduled legal clinic appointment in February; client re-registered for March session. Follow-up required to ensure attendance and provide necessary support to address legal concerns.', observations: 'observations1', employee: 'employee1', followupType: 'Appointment confirmation and logistics support', motive: 'motive1', interventions: 'interventions1', goals: 'receive necessary legal assistance', date: '01/03/2024' },
        { title: 'Crisis Intervention for Mrs. Smith', type: 'Crisis', details: ' Attempted to wake up Mrs. Smith multiple times on Thursday, March 14, to offer her an appointment at the medical clinic. Mrs. Smith refused the appointment despite encouragement from staff and the coordinator.', observations: 'Mrs. Smith exhibited signs of distress and frustration during the interaction.', employee: 'employee2', followupType: 'followupType2', motive: 'Mrs. Smiths symptoms have been persistent since February, and medical consultation is essential to address her health concerns.', interventions: 'interventions2', goals: 'Encourage Mrs. Smith to reconsider the medical appointment and provide support in accessing necessary healthcare services.', date: '04/01/2019' },
        { title: 'title3', type: 'type3', details: 'details3', observations: 'observations3', employee: 'employee3', followupType: 'followupType3', motive: 'motive3', interventions: 'interventions3', goals: 'goals3', date: 'date3' },
        { title: 'title4', type: 'type4', details: 'details4', observations: 'observations4', employee: 'employee4', followupType: 'followupType4', motive: 'motive4', interventions: 'interventions4', goals: 'goals4', date: 'date4' },

    ]);

    const [selectedNote, setSelectedNote] = useState(null);
    const [newNote, setNewNote] = useState({ title: '', type: '', details: '', observations: '', employee: '', followupType: '', motive: '', interventions: '', goals: '', date: '' });
    const [showForm, setShowForm] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);


    const handleNoteClick = (note) => {
        setSelectedNote(note);
    };

    const handleCloseModal = () => {
        setSelectedNote(null);
    };

    const handleInputChange = (event) => {
        setNewNote({ ...newNote, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setNotes([...notes, newNote]);
        setNewNote({ title: '', type: '', details: '', observations: '', employee: '', followupType: '', motive: '', interventions: '', goals: '', date: '' });
        setShowForm(false);
        setIsFormOpen(false); // Reset scroll-disabled state
    };

    const handleLongPress = (index) => {
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setNotes(newNotes);

    };

    useEffect(() => {
        if (isFormOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isFormOpen]);

    return (
        <div className="notesfragment">
            <div className="chronological-notes">
                <div className="add-circle" onClick={() => { setShowForm(true); setIsFormOpen(true) }}>
                    <CiCirclePlus style={{ fontSize: '1.5em' }} />
                </div>
                Chronological notes
            </div>
            <div className='container'>
                <div className='list-view-notes'>
                    <div style={{ paddingBottom: '50px' }}>
                        {notes.map((note, index) => (
                            <div key={index} className="note-item" onClick={() => handleNoteClick(note)} onContextMenu={(event) => { event.preventDefault(); handleLongPress(index); }}>
                                <div className="note-item-content">
                                    <div className="important-details">
                                        <p><strong>Title: </strong> {note.title}</p>
                                        <p><strong>Date: </strong> {note.date}</p>
                                        <p><strong>Employee: </strong> {note.employee}</p>
                                    </div>
                                    <div className="note-details">
                                        <p><strong>Type: </strong> {note.type}</p>
                                        <br />
                                        <p><strong>Details: </strong> {note.details}</p>
                                        <br />
                                        <p><strong>Observations: </strong> {note.observations}</p>
                                        <br />
                                        <p><strong>Follow up type: </strong> {note.followupType}</p>
                                        <br />
                                        <p><strong>Motive: </strong> {note.motive}</p>
                                        <br />
                                        <p><strong>Interventions: </strong> {note.interventions}</p>
                                        <br />
                                        <p><strong>Goals: </strong> {note.goals}</p>
                                    </div>
                                    <br />
                                    <div className="delete">
                                        <delete-button onClick={() => handleLongPress(index)}><MdDeleteForever style={{ fontSize: '20px' }} /></delete-button>
                                    </div>
                                </div>

                            </div>
                        ))}

                        <button onClick={() => { setShowForm(true); setIsFormOpen(true) }}>Add a note</button>

                        {showForm && (
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close-button" onClick={() => { setShowForm(false); setIsFormOpen(false) }}>&times;</span>
                                    <form className="form-container" onSubmit={handleFormSubmit}>
                                        <br />
                                        <input name="title" value={newNote.title} onChange={handleInputChange} placeholder="Title" required />
                                        <input name="type" value={newNote.type} onChange={handleInputChange} placeholder="Type" required />
                                        <input name="details" value={newNote.details} onChange={handleInputChange} placeholder="Details" required />
                                        <input name="observations" value={newNote.observations} onChange={handleInputChange} placeholder="Observations" required />
                                        <input name="employee" value={newNote.employee} onChange={handleInputChange} placeholder="Employee" required />
                                        <input name="followupType" value={newNote.followUpType} onChange={handleInputChange} placeholder="Follow up type" required />
                                        <input name="motive" value={newNote.motive} onChange={handleInputChange} placeholder="Motive" required />
                                        <input name="interventions" value={newNote.interventions} onChange={handleInputChange} placeholder="Interventions" required />
                                        <input name="goals" value={newNote.goals} onChange={handleInputChange} placeholder="Goals" required />
                                        <input name="date" value={newNote.date} onChange={handleInputChange} placeholder="Date (YYYY-MM-DD)" required />
                                        <br />
                                        <button type="submit" style={{ marginBottom: '30px' }}>Add a note</button>
                                    </form>
                                </div>
                            </div>
                        )}

                    </div>
                </div>


            </div>
        </div>
    );
}

export default NotesFragment;
