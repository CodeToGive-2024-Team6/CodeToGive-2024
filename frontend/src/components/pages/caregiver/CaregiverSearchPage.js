import React, { useState, useEffect, useMemo } from 'react';
import './CaregiverSearchPage.css'; // Import CSS file
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const CaregiverSearchPage = () => {
    const allResidents = useMemo(() => ['Resident 1', 'Resident 2', 'Resident 3', 'Resident 4'], []); // Use useMemo here
    const [searchValue, setSearchValue] = useState('');
    const [displayedResidents, setDisplayedResidents] = useState(allResidents);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Change this to the number of items you want per page

    useEffect(() => {
        setDisplayedResidents(
            allResidents.filter(resident =>
                resident.toLowerCase().includes(searchValue.toLowerCase())
            )
        );
    }, [searchValue, allResidents]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = displayedResidents.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map((resident, index) => (
        <p key={index}>{resident}</p>
    ));

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(displayedResidents.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => (
        <button key={number} onClick={() => setCurrentPage(number)}>
            {number}
        </button>
    ));

    return (
        <div>
            <div className="header-bar">
                <h1>Caregiver Search</h1>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                />
                <button className="filter-button">
                    <HiAdjustmentsHorizontal 
                        style={{color: '#00AFD7', fontSize: '2em'}}
                    />
                </button>
            </div>
            <div className="list-view">
                {renderItems}
            </div>
            <div className="pagination">
                {renderPageNumbers}
            </div>
        </div>
    );
};

export default CaregiverSearchPage;