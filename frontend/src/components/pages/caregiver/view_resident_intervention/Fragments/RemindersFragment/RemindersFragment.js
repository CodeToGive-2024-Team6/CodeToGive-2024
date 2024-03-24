import React, { useState } from 'react';
import './RemindersFragment.css'; // Import CSS file

function RemindersFragment() {
    const reminders = [
        { heading: 'Reminder 1', meetingInfo: 'Meeting with John', date: '2022-01-01', time: '10:00' },
        { heading: 'Reminder 2', meetingInfo: 'Meeting with Jane', date: '2022-01-02', time: '11:00' },
        // Add more reminders as needed
    ];

    const [selectedReminder, setSelectedReminder] = useState(null);

    const handleReminderClick = (reminder) => {
        setSelectedReminder(reminder);
    };

    const handleCloseModal = () => {
        setSelectedReminder(null);
    };

    return (
        <div>
            {reminders.map((reminder, index) => (
                <div key={index} className="reminder-item" onClick={() => handleReminderClick(reminder)}>
                    <h2>{reminder.heading}</h2>
                    <p>{reminder.meetingInfo}</p>
                    <p>{reminder.date} at {reminder.time}</p>
                </div>
            ))}
            {selectedReminder && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={handleCloseModal}>&times;</span>
                        <h2>{selectedReminder.heading}</h2>
                        <p>{selectedReminder.meetingInfo}</p>
                        <p>{selectedReminder.date} at {selectedReminder.time}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RemindersFragment;