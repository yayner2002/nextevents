import { useRouter } from "next/router";
import React from "react";

import { getEventById } from "../../dummy-data";
import EventSummary from "imr/components/event-detail/event-summary";
import EventLogistics from "imr/components/event-detail/event-logistics";
import EventContent from "imr/components/event-detail/event-content";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;

  const event = getEventById(eventId);
  console.log(event);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <div>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        image={event.image}
        address={event.location}
        imageAlt={event.title}
        
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </div>
  );
};

export default EventDetailPage;
