import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import EventDetails from "./components/EventDetails";

function App() {
  const [event, setEvent] = useState(null); // Initialize event state as null

  return (
    <div className="App">
      <h1>Event Search</h1>
      <SearchForm setEvent={setEvent} />{" "}
      {/* Pass setEvent function as a prop to SearchForm */}
      {event && <EventDetails event={event} />}{" "}
      {/* Render EventDetails if event is available */}
    </div>
  );
}

export default App;
