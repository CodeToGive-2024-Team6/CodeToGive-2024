import React, { useState, useEffect } from "react";
import './NotesFragment.css';
import { FaPlus } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";


function NotesFragment() {
    const [selectedNote, setSelectedNote] = useState(null);
    const [notes, setNotes] = useState([
        {
            title: 'Legal Clinic Attendance Follow-Up',
            type: 'Legal Assistance',
            date: '01/26/2024',
            details: 'Missed scheduled legal clinic appointment in February; client re-registered for March session. Follow-up required to ensure attendance and provide necessary support to address legal concerns.',
            employee: 'Employee 1',
            followUpType: 'Appointment confirmation and logistics support',
            goals: 'receive necessary legal assistance'
        },
        {
            title: 'Crisis Intervention for Mrs. Smith',
            type: 'Crisis',
            date: '01/03/2024',
            details: ' Attempted to wake up Mrs. Smith multiple times on Thursday, March 14, to offer her an appointment at the medical clinic. Mrs. Smith refused the appointment despite encouragement from staff and the coordinator.',
            observations: 'Mrs. Smith exhibited signs of distress and frustration during the interaction.',
            employee: 'Employee 2',
            followUpType: 'Medical appointment',
            motive: 'Mrs. Smiths symptoms have been persistent since February, and medical consultation is essential to address her health concerns.',
            interventions: 'Active listening, encouragement, reassurance',
            goals: 'Encourage Mrs. Smith to reconsider the medical appointment and provide support in accessing necessary healthcare services.'
        }
    ]);
    const [isAddingNote, setIsAddingNote] = useState(false); // State to manage visibility of add note popup

    // Calculate height of each note dynamically
    useEffect(() => {
        const updateNoteHeights = () => {
            const noteElements = document.querySelectorAll('.note');
            noteElements.forEach((noteElement) => {
                noteElement.style.height = `${noteElement.scrollHeight}px`;
            });
        };

        updateNoteHeights();

        window.addEventListener('resize', updateNoteHeights);

        return () => {
            window.removeEventListener('resize', updateNoteHeights);
        };
    }, [notes]);


    const handleNoteClick = (noteIndex) => {
        setSelectedNote(noteIndex);
    };

    const handleSaveNote = () => {
        setSelectedNote(null); // Close the popup after saving
    };

    const handleCancelEdit = () => {
        setSelectedNote(null);
    };

    const handleAddNote = () => {
        setIsAddingNote(true); // Open the add note popup
    };

    const handleCancelAddNote = () => {
        setIsAddingNote(false); // Close the add note popup
    };

    return (
        <div className="notescontainer">
            <div className="chronological-notes">
                <div className="add-circle" onClick={handleAddNote}>
                    <CiCirclePlus style={{ fontSize: '1.5em' }} />
                </div>
                Chronological Notes
                <div className="spacing"></div>
            </div>
            {notes.map((note, index) => (
                <div key={index} className="note" onClick={() => handleNoteClick(index)}>
                    <div className="general-info">
                        <div><b>Title</b>: {note.title}</div>
                        <div><b>Date</b>: {note.date}</div>
                        <div><b>Employee</b>: {note.employee}</div>
                    </div>
                    <div className="white-note">
                        <div className="details">
                            {note.type && <div><b>Type</b>: {note.type}</div>}
                            {note.details && <div><br /><b>Details</b>: {note.details}</div>}
                            {note.observations && <div><br /><b>Observations</b>: {note.observations}</div>}
                            {note.followUpType && <div><br /><b>Follow Up Type</b>: {note.followUpType}</div>}
                            {note.motive && <div><br /><b>Motive</b>: {note.motive}</div>}
                            {note.interventions && <div><br /><b>Interventions</b>: {note.interventions}</div>}
                            {note.goals && <div><br /><b>Goals</b>: {note.goals}</div>}
                        </div>
                    </div>
                    <div className="spacing"></div>
                </div>
            ))}
            {selectedNote !== null && (
                <div className="popup">
                    <div>Title: <input value={notes[selectedNote].title} /></div>
                    <div>Type: <input value={notes[selectedNote].type} /></div>
                    <div>Date: <input value={notes[selectedNote].date} /></div>
                    <div>Details: <input value={notes[selectedNote].details} /></div>
                    <div>Observations: <input value={notes[selectedNote].observations} /></div>
                    <div>Employee: <input value={notes[selectedNote].employee} /></div>
                    <div>Follow Up Type: <input value={notes[selectedNote].followUpType} /></div>
                    <div>Motive: <input value={notes[selectedNote].motive} /></div>
                    <div>Interventions: <input value={notes[selectedNote].interventions} /></div>
                    <div>Goals: <input value={notes[selectedNote].goals} /></div>
                    <button onClick={handleSaveNote}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                </div>
            )}
            {/* Add box for adding new note */}
            {isAddingNote && (
                <div className="popup">
                    <div>Title: <input /></div>
                    <div>Type: <input /></div>
                    <div>Date: <input /></div>
                    <div>Details: <input /></div>
                    <div>Observations: <input /></div>
                    <div>Employee: <input /></div>
                    <div>Follow Up Type: <input /></div>
                    <div>Motive: <input /></div>
                    <div>Interventions: <input /></div>
                    <div>Goals: <input /></div>
                    <button onClick={handleSaveNote}>Save</button>
                    <button onClick={handleCancelAddNote}>Cancel</button>
                </div>
            )}
            <div className="add-note" onClick={handleAddNote}>
                <div className="plus">
                    <div className="add-button">
                        <FaPlus style={{ fontSize: '3em' }} />
                    </div>
                </div>
                <div className="spacing"></div>
            </div>
        </div>
    );
}

export default NotesFragment;
