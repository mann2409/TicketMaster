import React from "react";

const EventDetails = ({ event }) => {
  console.log(event);
  return (
    <div>
      {event && event._embedded && event._embedded.events && (
        <table className="event-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Category</th>
              <th>Price Range</th>
            </tr>
          </thead>
          <tbody>
            {event._embedded.events.map((event, index) => (
              <tr key={index}>
                <td>{event.name}</td>
                <td>{event.dates.status.code}</td>
                <td>{event.classifications[0].genre.name}</td>
                <td>
                  {event.priceRanges
                    .map(
                      (range) =>
                        `${range.type} ${range.currency} ${range.currency}-${range.max}`
                    )
                    .join("| ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EventDetails;
