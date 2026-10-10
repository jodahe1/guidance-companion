import { img } from "./images";

/**
 * Central hotel content. Values marked `verified: false` (or rendered via <Verify/>)
 * were taken from the old website or are unknown and must be confirmed by the hotel.
 */
export const hotel = {
  name: "Gambella Hotel",
  city: "Addis Ababa",
  area: "Piassa",
  address: "From Piazza to 4 Kilo road, Ras Mekonnen Bridge, 70 Dereja, Addis Ababa",
  email: "info@gambellahotel.com",
  phone: null as string | null, // [Confirm with hotel] — no number listed on the old site
  hours: null as string | null, // [Confirm with hotel]
  mapQuery: "Gambella Hotel, Piassa, Addis Ababa",
  shortDescription:
    "Comfortable accommodation and helpful hospitality for your stay in Addis Ababa.",
};

export type Room = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  bed: string;
  occupancy: string;
  size: string;
  amenities: string[];
  images: { src: string; alt: string }[];
};

/** Size, occupancy and bed details are as listed on the old site — confirm before publishing. */
export const rooms: Room[] = [
  {
    slug: "standard-single",
    name: "Standard Single Room",
    summary: "One double bed, a work desk and a balcony looking over the old town.",
    description:
      "The Standard Single Room has one double bed, a bedside table, and a desk and chair. It is furnished with wall-to-wall carpeting and a balcony with an old-town view. The glass bathroom includes a hairdryer and a magnifying mirror, and a coffee/tea kit and bottled water are provided in the room.",
    bed: "1 double bed",
    occupancy: "1–2 guests",
    size: "25 m²",
    amenities: ["Balcony with old-town view", "Work desk", "Hairdryer", "Coffee & tea kit", "Bottled water", "En-suite bathroom"],
    images: [
      { src: img.standard3, alt: "Standard Single Room with a double bed and upholstered headboard" },
      { src: img.a1_img_9652, alt: "Standard Single Room interior" },
      { src: img.a1_img_9651, alt: "Standard Single Room bed and window" },
      { src: img.a1_img_9650, alt: "Standard Single Room seating area" },
      { src: img.a1_img_9649, alt: "Standard Single Room detail" },
      { src: img.a1_img_9644, alt: "Standard Single Room view" },
      { src: img.a1_gopr1991, alt: "Standard Single Room wide view" },
      { src: img.a1_gopr1992, alt: "Standard Single Room bathroom area" },
    ],
  },
  {
    slug: "twin",
    name: "Twin Room",
    summary: "Two single beds — a practical choice for friends, family or colleagues.",
    description:
      "Our Standard Twin rooms include two single beds, a bedside table and a work desk, plus complimentary toiletries in the en-suite bathroom and an ironing board. Rooms have a balcony with an old-town view.",
    bed: "2 single beds",
    occupancy: "Up to 2 guests",
    size: "44 m²",
    amenities: ["Two single beds", "Work desk", "Wi-Fi", "Ironing board", "Toiletries", "Balcony"],
    images: [
      { src: img.twin, alt: "Twin Room with two single beds and wall-mounted TV" },
      { src: img.a2_img_9688, alt: "Twin Room beds and window" },
      { src: img.a2_gopr2001, alt: "Twin Room interior" },
      { src: img.a2_gopr2002, alt: "Twin Room furnishings" },
      { src: img.a2_gopr1999, alt: "Twin Room wide view" },
      { src: img.a2_gopr1995, alt: "Twin Room detail" },
      { src: img.a2_gopr1994, alt: "Twin Room bathroom" },
      { src: img.a2_gopr1998, alt: "Twin Room desk area" },
    ],
  },
  {
    slug: "king",
    name: "King Room",
    summary: "A king-size bed and extra space, with bathrobe and coffee/tea kit.",
    description:
      "A larger room with a king-size bed, work desk and bedside table. Complimentary toiletries are provided in the en-suite bathroom, along with a bathrobe, mineral water and a coffee/tea kit.",
    bed: "1 king-size bed",
    occupancy: "Confirm with hotel",
    size: "33 m²",
    amenities: ["King-size bed", "Work desk", "Wi-Fi", "Bathrobe", "Coffee & tea kit", "Mineral water"],
    images: [
      { src: img.a3_img_9703, alt: "King Room with teal upholstered king bed" },
      { src: img.a3_img_9704, alt: "King Room interior" },
      { src: img.a3_room_deluxe_img_04, alt: "King Room bed with decorative pillows" },
    ],
  },
  {
    slug: "suite-apartment",
    name: "Suite Apartment",
    summary: "A separate bedroom, living room and fully equipped kitchen.",
    description:
      "Designed for longer or more independent stays, each Lechwe Suite Apartment includes a kitchen, a living room and a separate bedroom, with internet access and complimentary toiletries.",
    bed: "Confirm with hotel",
    occupancy: "Up to 4 guests",
    size: "59 m²",
    amenities: ["Separate bedroom", "Living room", "Fully equipped kitchen", "Wi-Fi", "Toiletries"],
    images: [
      { src: img.suite, alt: "Suite Apartment kitchen and living area" },
      { src: img.a4_img_9738, alt: "Suite Apartment interior" },
      { src: img.a4_img_9736, alt: "Suite Apartment living room" },
      { src: img.a4_img_9726, alt: "Suite Apartment bedroom" },
      { src: img.a4_img_9711, alt: "Suite Apartment detail" },
      { src: img.a4_img_9712, alt: "Suite Apartment kitchen" },
      { src: img.a4_img_9716, alt: "Suite Apartment seating" },
      { src: img.a4_img_9707, alt: "Suite Apartment wide view" },
    ],
  },
];

export const getRoom = (slug: string) => rooms.find((r) => r.slug === slug);

/** Facilities mentioned on the old site — hours, charges and conditions need confirming. */
export const facilities = [
  { group: "Guest comfort", items: ["Wi-Fi", "Room service", "Housekeeping", "Elevator"] },
  { group: "Dining & refreshments", items: ["In-house restaurant", "Breakfast"] },
  { group: "Transport & convenience", items: ["Airport transfer", "Shuttle", "Parking"] },
  { group: "Guest assistance", items: ["Laundry", "Cultural Hall for events", "Safe box"] },
];

export type GalleryItem = { src: string; alt: string; category: "Rooms" | "Dining" | "Spaces" | "Views" };
export const gallery: GalleryItem[] = [
  { src: img.hero_3, alt: "Guest room with double bed", category: "Rooms" },
  { src: img.hero_1, alt: "Twin guest room", category: "Rooms" },
  { src: img.standard3, alt: "Standard Single Room", category: "Rooms" },
  { src: img.a3_img_9703, alt: "King Room", category: "Rooms" },
  { src: img.suite, alt: "Suite Apartment kitchen and lounge", category: "Rooms" },
  { src: img.e9651, alt: "Spacious room with desk", category: "Rooms" },
  { src: img.slider_2, alt: "Restaurant tables by the window", category: "Dining" },
  { src: img.slider_3, alt: "Chef at the breakfast buffet", category: "Dining" },
  { src: img.hero_2, alt: "Cultural Hall with traditional decor", category: "Spaces" },
  { src: img.about, alt: "Staircase landing with tall windows", category: "Spaces" },
  { src: img.exterior, alt: "View over Addis Ababa from the hotel", category: "Views" },
];

export const faqs = [
  { q: "How do I book a room?", a: "Send a reservation inquiry through our Book a Room page or email us. Our team will reply to confirm availability and rates." },
  { q: "What are the check-in and check-out times?", a: null },
  { q: "Is breakfast included?", a: null },
  { q: "What payment methods are accepted?", a: null },
  { q: "Can I cancel or change a reservation?", a: null },
  { q: "Is Wi-Fi available?", a: "Wi-Fi is listed among our facilities. Please contact us for any details." },
  { q: "Is airport transportation available?", a: "Airport transfer is listed among our services. Please contact us to arrange it and confirm any charges." },
  { q: "Is parking available?", a: null },
  { q: "How can I contact the hotel?", a: `Email us at ${hotel.email} or use the form on our Contact page.` },
];
