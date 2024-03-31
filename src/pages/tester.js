// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import useRouteStore from '../store/routerStore';

function Tester() {
    const setCurrentPage = useRouteStore((state) => state.setCurrentPage);
    const [data, setData] = useState("nssssssssull");

    // useEffect(() => {
    //     // Fetch data from backend when component mounts
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:5000/api/data');
    //         setData(response.data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    function onDashboardClick() {
        console.log("abcs")
        setCurrentPage("/main_window/Dashboard");
    }

    return (
        <div className="App">
        <Button onClick={onDashboardClick}>appp</Button>
            <h1>Frontend with Backend Integration</h1>
            {data && <p>{data.message}</p>} 
        </div>
    );
}

export default Tester;
