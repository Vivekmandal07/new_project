
export interface Destination {
  id: string;
  name: string;
  type: 'International' | 'Domestic';
  image: string;
  description: string;
}

export interface Package {
  id: string;
  title: string;
  price: string;
  image: string;
  duration: string;
  destination: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelDate: string;
  pax: number;
  children: number;
  childAges: string[];
  specialRequest: string;
}

export interface PackageFormData {
  name: string;
  leavingFrom: string;
  destination: string;
  pax: number;
  children: number;
  childAges: string[];
  travelDate: string;
}
