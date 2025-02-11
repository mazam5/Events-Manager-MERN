const events = [
  {
    id: 1,
    title: "AI in Healthcare Summit",
    location: "San Francisco, CA",
    dateTime: "2024-03-15T09:00:00",
    duration: "3 hours",
    mode: "Online",
    speakers: ["Dr. Emily Carter", "Dr. David Lee"],
    shortDescription:
      "Explore the latest advancements and applications of Artificial Intelligence in the healthcare industry.",
    longDescription:
      "The AI in Healthcare Summit brings together industry experts, healthcare professionals, and technology innovators to discuss the latest trends and developments in the field of Artificial Intelligence. From predictive analytics to personalized medicine, this summit covers a wide range of topics that are shaping the future of healthcare.",
    categories: ["Technology", "Healthcare", "AI"],
    agendas: [
      {
        time: "09:00 AM",
        title: "Opening Keynote",
        speaker: "Dr. Emily Carter",
      },
      {
        time: "10:00 AM",
        title: "Panel Discussion: AI in Diagnostics",
        speakers: ["Dr. David Lee", "Dr. Sarah Johnson"],
      },
      {
        time: "11:00 AM",
        title: "Breakout Sessions",
        speakers: ["Various Speakers"],
      },
      {
        time: "12:00 PM",
        title: "Closing Remarks",
        speaker: "Dr. Emily Carter",
      },
    ],
  },
  {
    id: 2,
    title: "Sustainable Living Workshop",
    location: "London, UK",
    dateTime: "2025-04-22T14:00:00",
    duration: "2 hours",
    mode: "Online",
    speakers: ["Jane Green", "Michael Brown"],
    shortDescription:
      "Learn practical tips and strategies for adopting a more sustainable lifestyle.",
    longDescription:
      "The Sustainable Living Workshop is designed to help individuals and communities reduce their environmental impact and live more sustainably. From eco-friendly practices to renewable energy solutions, this workshop covers a wide range of topics that can make a positive difference in the world.",
    eventCategories: ["Environment", "Sustainability", "Lifestyle"],
    agendas: [
      {
        time: "02:00 PM",
        title: "Welcome and Introduction",
        speaker: "Jane Green",
      },
      {
        time: "02:30 PM",
        title: "Keynote Address: The Future of Sustainability",
        speaker: "Michael Brown",
      },
      {
        time: "03:30 PM",
        title: "Breakout Sessions",
        speakers: ["Various Speakers"],
      },
      {
        time: "04:30 PM",
        title: "Closing Remarks",
        speaker: "Jane Green",
      },
    ],
  },
  {
    id: 3,
    title: "Creative Writing Masterclass",
    location: "New York City, NY",
    dateTime: "2024-05-10T10:00:00",
    duration: "4 hours",
    mode: "In-person",
    speakers: ["Sarah Jones"],
    shortDescription:
      "Hone your creative writing skills with renowned author Sarah Jones.",
    eventCategories: ["Writing", "Literature", "Arts"],
    agendas: [
      {
        time: "10:00 AM",
        title: "Introduction to Creative Writing",
        speaker: "Sarah Jones",
      },
      {
        time: "11:00 AM",
        title: "Workshop: Writing Techniques",
        speaker: "Sarah Jones",
      },
      {
        time: "12:00 PM",
        title: "Lunch Break",
      },
      {
        time: "01:00 PM",
        title: "Feedback Session",
        speaker: "Sarah Jones",
      },
    ],
  },
  {
    id: 4,
    title: "Global Tech Conference",
    location: "Tokyo, Japan",
    dateTime: "2024-06-05T09:30:00",
    duration: "1 day",
    mode: "Hybrid",
    speakers: ["Kenji Tanaka", "Aisha Khan"],
    shortDescription:
      "Connect with industry leaders and explore the future of technology.",
    eventCategories: ["Technology", "Innovation", "Business"],
    agendas: [
      {
        time: "09:30 AM",
        title: "Opening Keynote",
        speaker: "Kenji Tanaka",
      },
      {
        time: "10:30 AM",
        title: "Panel Discussion: Emerging Technologies",
        speakers: ["Aisha Khan", "Dr. Li Wei"],
      },
      {
        time: "11:30 AM",
        title: "Breakout Sessions",
        speakers: ["Various Speakers"],
      },
      {
        time: "12:30 PM",
        title: "Lunch Break",
      },
      {
        time: "01:30 PM",
        title: "Workshop: AI and Robotics",
        speaker: "Dr. Li Wei",
      },
      {
        time: "03:30 PM",
        title: "Closing Keynote",
        speaker: "Kenji Tanaka",
      },
    ],
  },
  {
    id: 5,
    title: "Food and Wine Festival",
    location: "Napa Valley, CA",
    dateTime: "2025-07-12T12:00:00",
    duration: "3 hours",
    mode: "In-person",
    speakers: ["Chef Jean-Pierre Dubois", "Sommelier Maria Rodriguez"],
    shortDescription:
      "Indulge in a culinary experience featuring world-class food and wine.",
    eventCategories: ["Food", "Wine", "Culture"],
    agendas: [
      {
        time: "12:00 PM",
        title: "Wine Tasting Workshop",
        speaker: "Sommelier Maria Rodriguez",
      },
      {
        time: "01:00 PM",
        title: "Cooking Demonstration",
        speaker: "Chef Jean-Pierre Dubois",
      },
      {
        time: "02:00 PM",
        title: "Gourmet Lunch",
      },
    ],
  },
  {
    id: 6,
    title: "Marketing Strategy Summit",
    location: "Chicago, IL",
    dateTime: "2024-08-20T09:00:00",
    duration: "1 day",
    mode: "Online",
    speakers: ["David Miller", "Susan Wilson"],
    shortDescription:
      "Learn the latest marketing strategies and techniques to grow your business.",
    eventCategories: ["Marketing", "Business", "Sales"],
    agendas: [
      {
        time: "09:00 AM",
        title: "Opening Keynote",
        speaker: "David Miller",
      },
      {
        time: "10:00 AM",
        title: "Panel Discussion: Digital Marketing Trends",
        speakers: ["Susan Wilson", "Mark Johnson"],
      },
      {
        time: "11:00 AM",
        title: "Breakout Sessions",
        speakers: ["Various Speakers"],
      },
      {
        time: "12:00 PM",
        title: "Closing Remarks",
        speaker: "David Miller",
      },
      {
        time: "01:00 PM",
        title: "Networking Session",
      },
    ],
  },
  {
    id: 7,
    title: "Music Festival",
    location: "Austin, TX",
    dateTime: "2024-09-07T15:00:00",
    duration: "3 hours",
    mode: "In-person",
    speakers: ["Various Artists"],
    shortDescription:
      "Enjoy live performances from a variety of musical artists.",
    eventCategories: ["Music", "Entertainment", "Arts"],
    agendas: [
      {
        time: "03:00 PM",
        title: "Opening Act",
        speaker: "Local Band",
      },
      {
        time: "04:00 PM",
        title: "Headliner Performance",
        speaker: "Featured Artist",
      },
      {
        time: "06:00 PM",
        title: "Closing Remarks",
      },
    ],
  },
  {
    id: 8,
    title: "Photography Workshop",
    location: "Los Angeles, CA",
    dateTime: "2024-10-26T10:00:00",
    duration: "6 hours",
    mode: "In-person",
    speakers: ["John Smith"],
    shortDescription:
      "Improve your photography skills with professional photographer John Smith.",
    eventCategories: ["Photography", "Arts", "Education"],
    agendas: [
      {
        time: "10:00 AM",
        title: "Introduction to Photography",
        speaker: "John Smith",
      },
      {
        time: "11:00 AM",
        title: "Outdoor Photo Session",
        speaker: "John Smith",
      },
      {
        time: "01:00 PM",
        title: "Lunch Break",
      },
      {
        time: "02:00 PM",
        title: "Editing Workshop",
        speaker: "John Smith",
      },
      {
        time: "04:00 PM",
        title: "Q&A Session",
        speaker: "John Smith",
      },
    ],
  },
  {
    id: 9,
    title: "Financial Planning Seminar",
    location: "New York City, NY",
    dateTime: "2025-11-18T18:00:00",
    mode: "In-person",
    duration: "2 hours",
    speakers: ["Robert Johnson"],
    shortDescription:
      "Learn how to effectively manage your finances and plan for the future.",
    eventCategories: ["Finance", "Business", "Personal Development"],
    agendas: [
      {
        time: "06:00 PM",
        title: "Introduction to Financial Planning",
        speaker: "Robert Johnson",
      },
      {
        time: "07:00 PM",
        title: "Budgeting Strategies",
        speaker: "Robert Johnson",
      },
      {
        time: "08:00 PM",
        title: "Q&A Session",
        speaker: "Robert Johnson",
      },
    ],
  },
  {
    id: 10,
    title: "Holiday Craft Fair",
    location: "Denver, CO",
    mode: "In-person",
    dateTime: "2025-12-08T10:00:00",
    duration: "3 hours",
    speakers: ["Local Artisans"],
    shortDescription:
      "Find unique handmade gifts and crafts for the holiday season.",
    eventCategories: ["Crafts", "Shopping", "Community"],
    agendas: [
      {
        time: "10:00 AM",
        title: "Craft Fair Opens",
      },
      {
        time: "11:00 AM",
        title: "Artisan Demonstrations",
        speakers: ["Local Artists"],
      },
      {
        time: "12:00 PM",
        title: "Holiday Shopping",
      },
    ],
  },
];

export default events;
