
import { Destination, Package } from './types';

export const INTERNATIONAL_DESTINATIONS: Destination[] = [
  { id: '1', name: 'Paris, France', type: 'International', image: 'https://picsum.photos/seed/paris/600/400', description: 'Experience the city of love and lights.' },
  { id: '2', name: 'Maldives', type: 'International', image: 'https://picsum.photos/seed/maldives/600/400', description: 'Luxury water villas and crystal clear oceans.' },
  { id: '3', name: 'Dubai, UAE', type: 'International', image: 'https://picsum.photos/seed/dubai/600/400', description: 'Modern architecture and desert adventures.' },
  { id: '4', name: 'Bali, Indonesia', type: 'International', image: 'https://picsum.photos/seed/bali/600/400', description: 'Tropical paradise with rich culture.' },
];

export const DOMESTIC_DESTINATIONS: Destination[] = [
  { id: '5', name: 'Ladakh', type: 'Domestic', image: 'https://picsum.photos/seed/ladakh/600/400', description: 'The land of high passes.' },
  { id: '6', name: 'Kerala', type: 'Domestic', image: 'https://picsum.photos/seed/kerala/600/400', description: "God's own country." },
  { id: '7', name: 'Goa', type: 'Domestic', image: 'https://picsum.photos/seed/goa/600/400', description: 'Beaches, parties, and serenity.' },
  { id: '8', name: 'Himachal', type: 'Domestic', image: 'https://picsum.photos/seed/himachal/600/400', description: 'The snowy peaks and lush valleys.' },
];

export const PACKAGES: Package[] = [
  { id: 'p1', title: 'Serene Maldives Escape', price: '₹75,000', image: 'https://picsum.photos/seed/p1/600/400', duration: '4N/5D', destination: 'Maldives' },
  { id: 'p2', title: 'Majestic Ladakh Tour', price: '₹42,000', image: 'https://picsum.photos/seed/p2/600/400', duration: '5N/6D', destination: 'Ladakh' },
  { id: 'p3', title: 'Dubai Luxury Heights', price: '₹68,000', image: 'https://picsum.photos/seed/p3/600/400', duration: '4N/5D', destination: 'Dubai' },
  { id: 'p4', title: 'Romantic Paris Gateway', price: '₹1,20,000', image: 'https://picsum.photos/seed/p4/600/400', duration: '6N/7D', destination: 'Paris' },
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/seed/g1/400/400',
  'https://picsum.photos/seed/g2/400/400',
  'https://picsum.photos/seed/g3/400/400',
  'https://picsum.photos/seed/g4/400/400',
  'https://picsum.photos/seed/g5/400/400',
  'https://picsum.photos/seed/g6/400/400',
];

export const CONTACT_DETAILS = {
  name: 'Way2GoHolidays',
  phone: '+917303402841',
  email: 'way2goholidays.bookings@gmail.com',
  location: 'New Delhi',
  whatsapp: 'https://wa.me/917303402841'
};
