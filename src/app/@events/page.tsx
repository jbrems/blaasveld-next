import { getEvents } from "./actions"

export default async function EventsPage() {
  const events = await getEvents().catch()

  return <ul>
    {events.map((event) => <li key={event.id}>{event.id} - {event.name}</li>)}
  </ul>
}