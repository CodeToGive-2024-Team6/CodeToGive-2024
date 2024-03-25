import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './CaregiverSearchPage.css'; // Import CSS file
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import { MdNavigateBefore } from "react-icons/md";


const CaregiverSearchPage = () => {
    const navigate = useNavigate();    

    const [residents, setResidents] = useState([]);
    const [displayedResidents, setDisplayedResidents] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Change this to the number of items you want per page


    // Fetch residents data from the endpoint
    useEffect(() => {
        fetch('/residentalldata')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log('here')
                // Transform data to match the existing structure expected by the rendering logic
                const transformedData = data.map(resident => ({
                    name: `${resident.firstName} ${resident.lastName}`,
                    house: resident.currentAccommodation
                }));
                setResidents(transformedData);
                setDisplayedResidents(transformedData);
            })
            .catch(error => console.error('Error fetching resident data:', error));
    }, []); // The empty array ensures this effect runs once after the initial render


    const handleItemClick = (resident) => {
        console.log(`Clicked on ${resident.name}`);
        navigate('/caregiver_resident', { state: { resident } });
    };

    useEffect(() => {
        setDisplayedResidents(
            residents.filter(resident =>
                resident.name.toLowerCase().includes(searchValue.toLowerCase())
                || resident.house.toLowerCase().includes(searchValue.toLowerCase())
            )
        );
    }, [searchValue, residents]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = displayedResidents.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map((resident, index) => (
        <div key={index} className="list-item" onClick={() => handleItemClick(resident)}>
            <VscAccount style={{ color: '#00AFD7', fontSize: '2em' }} />
            <p>{resident.name}</p>
            <p>{resident.house}</p>

        </div>));


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(residents.length / itemsPerPage); i++) {
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
                <div className='search-before'>
                    <Link to="/caregiver_homepage">
                        <MdNavigateBefore />
                    </Link>
                </div>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                />
                <button className="filter-button">
                    <HiAdjustmentsHorizontal
                        style={{ color: '#00AFD7', fontSize: '2em' }}
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