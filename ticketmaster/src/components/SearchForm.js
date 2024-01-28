import React, { useState } from "react";
import axios from "axios";

function SearchForm({ setEvent }) {
  const apiKey = "Q0liYwgLd0EUFfCYyWsEOt7ALiXdo8Wq";
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState(""); // State for start date
  const [endDate, setEndDate] = useState(""); // State for end date

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "https://app.ticketmaster.com/discovery/v2/events.json",
        {
          params: {
            apikey: apiKey,
            city: city,
            startDateTime: startDate, // Include start date parameter
            endDateTime: endDate, // Include end date parameter
          },
        }
      );
      setEvent(response.data);
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <label htmlFor="startDate">Start Date:</label>
      {/* <input
        type="date"
        id="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        id="endDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      /> */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchForm;
