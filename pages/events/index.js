import EventList from "imr/components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import React from "react";

const AllEventsPage = () => {
  const allEvents = getAllEvents();
  return (
   <EventList items={allEvents} />
  );
};

export default AllEventsPage;
