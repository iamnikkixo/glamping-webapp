// about
import AboutImage from '../assets/images/group.jpg';

// accomodation
import TentOne from '../assets/images/accomodation/tentone.jpg';
import TentTwo from '../assets/images/accomodation/tenttwo.jpg';
import TentThree from '../assets/images/accomodation/tentthree.jpg';

// activities
import Biking from '../assets/images/activities/biking.jpg';
import Fishing from '../assets/images/activities/fishing.jpg';
import Hiking from '../assets/images/activities/hiking.jpg';
import Kayak from '../assets/images/activities/kayak.jpg';
import Swimming from '../assets/images/activities/swimming.jpg';
import NatureTrails from '../assets/images/activities/naturetrails.jpg';
import Stargazing from '../assets/images/activities/stargazing.jpg';
import Yoga from '../assets/images/activities/yoga.jpg';
import RockClimbing from '../assets/images/activities/rockclimbing.jpg';

//gallery
import GalImage1 from '../assets/images/gallery/image1.jpg';
import GalImage2 from '../assets/images/gallery/image2.jpg';
import GalImage3 from '../assets/images/gallery/image3.jpg';
import GalImage4 from '../assets/images/gallery/image4.jpg';
import GalImage5 from '../assets/images/gallery/image5.jpg';
import GalImage6 from '../assets/images/gallery/image6.jpg';
import GalImage7 from '../assets/images/gallery/image7.jpg';
import GalImage8 from '../assets/images/gallery/image8.jpg';
import GalImage9 from '../assets/images/gallery/image9.jpg';
import GalImage10 from '../assets/images/gallery/image10.jpg';
import GalImage11 from '../assets/images/gallery/image11.jpg';
import GalImage12 from '../assets/images/gallery/image12.jpg';

//testimonials photos
import EmilyImage from '../assets/images/testimony/emily.jpg';
import MarkImage from '../assets/images/testimony/mark.jpg';
import SofiaImage from '../assets/images/testimony/sofia.jpg';
import AlexImage from '../assets/images/testimony/alex.jpg';
import LiuImage from '../assets/images/testimony/liu.jpg';

export const navigation = [
  {
    id: '0',
    title: 'About',
    url: '#about',
  },
  {
    id: '1',
    title: 'Accomodation',
    url: '#accomodation',
  },
  {
    id: '2',
    title: 'Experience',
    url: '#experience',
  },
  {
    id: '3',
    title: 'Gallery',
    url: '#gallery',
  },
  {
    id: '4',
    title: 'Testimonial',
    url: '#testimony',
  },
];

export const about = [
  {
    id: '0',
    subheader: 'Origin',
    desc: "Our journey began in 2021, when founder Alex Johnson, inspired by a lifelong passion for the wilderness and a vision for sustainable luxury. Our team expanded to include experts with a deep respect for the environment and a commitment to eco-friendly practices, Alex's mission was to design a place that not only offers a luxurious escape but also promotes a deep connection with the natural world.",
  },
  {
    id: '1',

    subheader: 'Vision & Commitment',
    desc: 'At Starlight Haven Glamping, we blend the essence of a nature-centric experience with the principles of sustainability and conservation. Our vision is to provide a sanctuary where guests can unwind in comfort, explore the natural beauty, and foster a deep appreciation for the outdoors. We are committed to harmonizing luxury with nature, integrating eco-friendly practices in every facet of our retreat. Join us and be part of our journey towards creating lasting memories in a sustainable and luxurious environment.',
  },
];

export const aboutExtra = [
  {
    id: '0',
    category: 'Founded',
    value: '2021',
  },
  {
    id: '1',
    category: 'Stays',
    value: '5000+',
  },
  {
    id: '2',
    category: 'Rating',
    value: '4.5',
    icon: 'fas fa-star',
  },
];

export const accommodations = [
  {
    id: '0',
    image: TentOne,
    name: 'Rustic',
    details: [
      {
        id: '0',
        info: '2',
        icon: 'fas fa-user',
      },
      {
        id: '1',
        info: '1',
        icon: 'fas fa-bed',
        bedType: 'queen-sized',
      },
    ],
    description:
      'Experience the classic charm of glamping in our spacious Rustic Tents. Each tent features a plush queen-sized bed, a private deck perfect for stargazing, offering a blend of rustic elegance and comfort.',
    amenities: [
      {
        id: '0',
        icon: 'fas fa-shield-alt',
        name: 'Safety Deposit Box',
      },
      {
        id: '1',
        icon: 'fas fa-plug',
        name: 'Universal Plug',
      },
      {
        id: '2',
        icon: 'fas fa-tree',
        name: 'Forest View',
      },
      {
        id: '3',
        icon: 'fas fa-toilet-paper',
        name: 'Towels',
      },
      {
        id: '4',
        icon: 'fas fa-snowflake',
        name: 'Air Conditioning',
      },
      {
        id: '5',
        icon: 'fas fa-wifi',
        name: 'Wifi',
      },
    ],
  },
  {
    id: '1',
    image: TentTwo,
    name: 'Oasis',
    details: [
      {
        id: '0',
        info: '3',
        icon: 'fas fa-user',
      },
      {
        id: '1',
        info: '2',
        icon: 'fas fa-bed',
        bedType: 'double & queen-sized',
      },
    ],
    description:
      'Elevate your stay in our Oasis tent by the forest. It provide panoramic views of the surrounding woodland, coupled with modern comforts, ensuring a unique and serene retreat.',
    amenities: [
      {
        id: '0',
        icon: 'fas fa-shield-alt',
        name: 'Safety Deposit Box',
      },
      {
        id: '1',
        icon: 'fas fa-plug',
        name: 'Universal Plug',
      },
      {
        id: '2',
        icon: 'fas fa-tree',
        name: 'Forest View',
      },
      {
        id: '3',
        icon: 'fas fa-toilet-paper',
        name: 'Towels',
      },
      {
        id: '4',
        icon: 'fas fa-snowflake',
        name: 'Air Conditioning',
      },
      {
        id: '5',
        icon: 'fas fa-wifi',
        name: 'Wifi',
      },
      {
        id: '6',
        icon: 'fas fa-bath',
        name: 'En Suite',
      },
    ],
  },
  {
    id: '2',
    image: TentThree,
    name: 'Zen',
    details: [
      {
        id: '0',
        info: '4',
        icon: 'fas fa-user',
      },
      {
        id: '1',
        info: '2',
        icon: 'fas fa-bed',
        bedType: '2 double & 1 queen-sized',
      },
    ],
    description:
      'Unwind in our Zen Cabin that has two queen-sized beds, where serene water scenes meet homely comfort. Offering direct lake access, these cabins feature cozy interiors, private terraces, and stunning views.',
    amenities: [
      {
        id: '0',
        icon: 'fas fa-shield-alt',
        name: 'Safety Deposit Box',
      },
      {
        id: '1',
        icon: 'fas fa-plug',
        name: 'Universal Plug',
      },
      {
        id: '2',
        icon: 'fas fa-water',
        name: 'Lake View',
      },
      {
        id: '3',
        icon: 'fas fa-toilet-paper',
        name: 'Towels',
      },
      {
        id: '4',
        icon: 'fas fa-snowflake',
        name: 'Air Conditioning',
      },
      {
        id: '5',
        icon: 'fas fa-wifi',
        name: 'Wifi',
      },
      {
        id: '6',
        icon: 'fas fa-bath',
        name: 'En Suite',
      },
    ],
  },
];

export const activities = [
  {
    id: '0',
    name: 'Kayaking & Canoeing',
    image: Kayak,
  },
  {
    id: '1',
    name: 'Fishing',
    image: Fishing,
  },
  {
    id: '2',
    name: 'Stargazing',
    image: Stargazing,
  },
  {
    id: '3',
    name: 'Swimming',
    image: Swimming,
  },
  {
    id: '4',
    name: 'Hiking',
    image: Hiking,
  },
  {
    id: '5',
    name: 'Nature Trails',
    image: NatureTrails,
  },
  {
    id: '6',
    name: 'Yoga',
    image: Yoga,
  },
  {
    id: '7',
    name: 'Biking',
    image: Biking,
  },
  {
    id: '8',
    name: 'Rock Climbing',
    image: RockClimbing,
  },
];

export const amenities = [
  {
    id: '0',
    name: 'Pet-Friendly',
    icon: 'fas fa-paw',
  },
  {
    id: '1',
    name: 'Yoga Zone',
    icon: 'fas fa-spa',
  },
  {
    id: '2',
    name: 'Cafe & Bar',
    icon: 'fas fa-martini-glass',
  },
  {
    id: '3',
    name: 'Restaurant',
    icon: 'fas fa-utensils',
  },
  {
    id: '4',
    name: 'Campfire Pit',
    icon: 'fas fa-fire',
  },
  {
    id: '5',
    name: 'Outdoor Dining Area',
    icon: 'fas fa-chair',
  },
  {
    id: '6',
    name: "Children's Playground",
    icon: 'fas fa-children',
  },
  {
    id: '7',
    name: 'Shower Facilities',
    icon: 'fas fa-shower',
  },
];

export const gallery = [
  [
    {
      id: 1,
      name: 'Cafe Food',
      image: GalImage1,
    },
    {
      id: 2,
      name: 'Dog Camping',
      image: GalImage2,
    },
    {
      id: 3,
      name: 'bathroom',
      image: GalImage3,
    },
  ],
  [
    {
      id: 4,
      name: 'Group Camping',
      image: GalImage4,
    },
    {
      id: 5,
      name: 'Campfire',
      image: GalImage5,
    },
    {
      id: 6,
      name: 'Restaurant Food',
      image: GalImage6,
    },
  ],
  [
    {
      id: 7,
      name: 'starry sky',
      image: GalImage7,
    },
    {
      id: 8,
      name: 'lights by the lake',
      image: GalImage8,
    },
    {
      id: 9,
      name: 'glamping tent',
      image: GalImage9,
    },
  ],
  [
    {
      id: 10,
      name: 'night time sharing party',
      image: GalImage10,
    },
    {
      id: 11,
      name: 'outdoor seating',
      image: GalImage11,
    },
    {
      id: 12,
      name: 'deer at camp',
      image: GalImage12,
    },
  ],
];

export const testimonials = [
  {
    id: '0',
    name: 'Emily Thompson',
    image: EmilyImage,
    date: '24/03/2024',
    testimony:
      "Our stay at Starlight Haven Glamping was magical! The starry skies were breathtaking, and the comfort of the safari tent made it feel like a luxury retreat in the heart of nature. Can't wait to return!",
    rating: '4.8',
  },
  {
    id: '1',
    name: 'Mark Johnson',
    image: MarkImage,
    date: '05/09/2022',
    testimony:
      'Starlight Haven is a hidden gem! The serene lake view from our cabin was the perfect backdrop for a relaxing weekend. The staff were incredibly friendly and made sure we had everything we needed.',
    rating: '4.6',
  },
  {
    id: '2',
    name: 'Sofia Martinez',
    image: SofiaImage,
    date: '20/07/2022',
    testimony:
      'I absolutely loved the treehouse experience at Starlight Haven! It felt like a childhood dream come true, with all the modern comforts. The natural surroundings and wildlife were amazing.',
    rating: '4.7',
  },
  {
    id: '3',
    name: 'Alex Smith',
    image: AlexImage,
    date: '14/11/2023',
    testimony:
      'Starlight Haven Glamping provided the perfect balance of adventure and comfort. The guided nature trails were enlightening, and the nights by the campfire were unforgettable.',
    rating: '4.5',
  },
  {
    id: '4',
    name: 'Liu Yang',
    image: LiuImage,
    date: '02/06/2021',
    testimony:
      'The attention to detail at Starlight Haven is outstanding. From the eco-friendly amenities to the beautifully designed accommodations, everything was perfect. A truly sustainable luxury experience!',
    rating: '4.9',
  },
];

export const contacts = [
  {
    id: '0',
    icon: 'fas fa-location-dot',
    detail: '123 Glamping Way, Natureville, NV 12345',
    href: 'https://www.google.com/maps',
  },
  {
    id: '1',
    icon: 'fas fa-envelope',
    detail: 'info@glampingretreat.com',
    href: 'mailto:info@glampingretreat.com',
  },
  {
    id: 'e',
    icon: 'fas fa-phone',
    detail: 'tel:+1234567890',
    href: 'tel:+1234567890',
  },
];

export const socials = [
  {
    id: '0',
    icon: 'fab fa-facebook',
    href: 'http://www.facebook.com',
  },
  {
    id: '1',
    icon: 'fab fa-youtube',
    href: 'http://www.youtube.com',
  },
  {
    id: '2',
    icon: 'fab fa-instagram',
    href: 'http://www.instagram.com',
  },
  {
    id: '3',
    icon: 'fab fa-twitter',
    href: 'http://www.twitter.com',
  },
  {
    id: '5',
    icon: 'fab fa-github',
    href: 'https://github.com/iamnikkixo',
  },
];
