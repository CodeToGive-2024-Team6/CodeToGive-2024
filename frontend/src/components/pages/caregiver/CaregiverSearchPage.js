import React, { useState, useEffect, useMemo } from 'react';
import './CaregiverSearchPage.css'; // Import CSS file
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import {VscAccount} from  "react-icons/vsc";
import { useNavigate } from 'react-router-dom';

const CaregiverSearchPage = () => {
    const navigate = useNavigate();
    const allResidents = useMemo(() => [
        { name: 'Resident 1', house: 'House A' },
        { name: 'Resident 2', house: 'House B' },
        { name: 'Resident 3', house: 'House A' },
        { name: 'Resident 4', house: 'House C' }
    ], []);    
    const [searchValue, setSearchValue] = useState('');
    const [displayedResidents, setDisplayedResidents] = useState(allResidents);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Change this to the number of items you want per page

    const handleItemClick = (resident) => {
        console.log(`Clicked on ${resident.name}`);
        navigate('/caregiver_resident', { state: { resident } });
    };

    useEffect(() => {
        setDisplayedResidents(
            allResidents.filter(resident =>
                resident.name.toLowerCase().includes(searchValue.toLowerCase())
                || resident.house.toLowerCase().includes(searchValue.toLowerCase())
            )
        
        );
    }, [searchValue, allResidents]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = displayedResidents.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map((resident, index) => (
        <div key={index} className="list-item" onClick={() => handleItemClick(resident)}>
            <VscAccount style={{color: '#00AFD7', fontSize: '2em'}}/>
            <p>{resident.name}</p>
            <p>{resident.house}</p>
            
        </div>));


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