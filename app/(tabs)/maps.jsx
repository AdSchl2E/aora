import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Maps() {
    const [results, setResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);

    // Function to handle keeping or removing a result
    const handleResultCheck = (index) => {
        const updatedResults = [...results];
        updatedResults[index].keep = !updatedResults[index].keep;
        setResults(updatedResults);
    };

    // Function to fetch and update the results from previous research
    const fetchResults = async () => {
        try {
            // Make API call to fetch the results from Google Maps Places API
            const response = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=dentist+in+marseille&key=YOUR_API_KEY');
            const data = await response.json();

            // Extract relevant information from the API response
            const resultsWithKeep = data.results.map((result) => ({
                name: result.name,
                latitude: result.geometry.location.lat,
                longitude: result.geometry.location.lng,
                keep: true,
                opening_hours: result.opening_hours, // Added to use in filtering
            }));

            setResults(resultsWithKeep);
        } catch (error) {
            console.error('Error fetching results:', error);
        }
    };

    // Call fetchResults when the component mounts
    useEffect(() => {
        fetchResults();
    }, []);

    // Function to handle filtering results by opening time
    const handleFilterByOpeningTime = (time) => {
        const filteredResults = results.filter((result) => {
            // Check if the result has opening hours
            if (result.opening_hours && result.opening_hours.periods) {
                // Check if any of the opening hours match the specified time
                return result.opening_hours.periods.some((period) => {
                    const openingTime = period.open.time;
                    const closingTime = period.close.time;
                    return openingTime <= time && time <= closingTime;
                });
            }
            return false;
        });

        setFilteredResults(filteredResults);
    };

    // Example call to handleFilterByOpeningTime with a specific time
    useEffect(() => {
        handleFilterByOpeningTime('0900'); // Pass time in 24-hour format as a string without colon
    }, [results]);

    // Decide whether to display filtered results or all results
    const resultsToDisplay = filteredResults.length > 0 ? filteredResults : results;

    return (
        <div>
            <h1>Home</h1>
            <LoadScript googleMapsApiKey="YOUR_API_KEY">
                <GoogleMap
                    center={{ lat: 43.2965, lng: 5.3698 }}
                    zoom={12}
                >
                    {resultsToDisplay.map((result, index) => (
                        <Marker
                            key={index}
                            position={{ lat: result.latitude, lng: result.longitude }}
                        />
                    ))}
                </GoogleMap>
            </LoadScript>
            {resultsToDisplay.map((result, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        checked={result.keep}
                        onChange={() => handleResultCheck(index)}
                    />
                    <span>{result.name}</span>
                </div>
            ))}
        </div>
    );
}

export default Maps;
