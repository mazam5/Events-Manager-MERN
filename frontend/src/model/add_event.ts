interface EventForm {
  eventId?: number;
  title: string;
  location: string;
  date: string;
  duration: string;
  mode: string;
  speakers: string[];
  description: string;
  categories: string[];
  agendas: string[];
}

export default EventForm;
