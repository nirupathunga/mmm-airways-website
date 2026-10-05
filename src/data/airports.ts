export interface Airport {
  code: string;
  name: string;
  city: string;
  state: string;
  category: 'Major Hub' | 'Regional Hub' | 'Coastal' | 'Heritage' | 'Business';
  terminal: string;
  description: string;
  // Normalized coordinates for the South India SVG Map (x: 0-100, y: 0-100)
  mapX: number;
  mapY: number;
  popularWith: string;
  directConnections: string[];
  imageUrl?: string;
}

export const AIRPORTS: Airport[] = [
  {
    code: 'BLR',
    name: 'Kempegowda International Airport',
    city: 'Bengaluru',
    state: 'Karnataka',
    category: 'Major Hub',
    terminal: 'Terminal 1 / 2',
    description: "India's premier aviation powerhouse and Silicon Valley hub, serving as MMM Airways primary operational nexus.",
    mapX: 47,
    mapY: 53,
    popularWith: 'Tech, Business, Regional Connections',
    directConnections: ['MAA', 'HYD', 'COK', 'GOA', 'TRV', 'MYQ', 'HBX', 'SXV', 'VGA', 'TIR'],
    imageUrl: '/images/bengaluru.webp'
  },
  {
    code: 'MAA',
    name: 'Chennai International Airport',
    city: 'Chennai',
    state: 'Tamil Nadu',
    category: 'Major Hub',
    terminal: 'Terminal 1 (Domestic)',
    description: 'The cultural and automotive capital of South India, connecting coastal manufacturing corridors and heritage circuits.',
    mapX: 68,
    mapY: 57,
    popularWith: 'Manufacturing, Healthcare, Global Transit',
    directConnections: ['BLR', 'COK', 'IXM', 'TRZ', 'TCR', 'SXV', 'PNY', 'HYD', 'VTZ'],
    imageUrl: '/images/chennai.webp'
  },
  {
    code: 'HYD',
    name: 'Rajiv Gandhi International Airport',
    city: 'Hyderabad',
    state: 'Telangana',
    category: 'Major Hub',
    terminal: 'Main Terminal',
    description: 'Deccan technological gateway renowned for aerospace, pharmaceuticals, and vibrant culinary heritage.',
    mapX: 50,
    mapY: 34,
    popularWith: 'Pharma, Tech, Aerospace, Commerce',
    directConnections: ['BLR', 'MAA', 'VGA', 'TIR', 'VTZ', 'GBI', 'BOM', 'PNQ'],
    imageUrl: '/images/hyderabad.webp'
  },
  {
    code: 'COK',
    name: 'Cochin International Airport',
    city: 'Kochi',
    state: 'Kerala',
    category: 'Coastal',
    terminal: 'Terminal 1',
    description: "The world's first fully solar-powered airport, serving as Kerala's primary commercial trade and tourism gateway.",
    mapX: 35,
    mapY: 74,
    popularWith: 'Tourism, Spice Trade, Seafood Logistics',
    directConnections: ['BLR', 'MAA', 'TRV', 'GOA', 'BOM', 'IXM'],
    imageUrl: '/images/kochi.webp'
  },
  {
    code: 'TRV',
    name: 'Thiruvananthapuram International Airport',
    city: 'Thiruvananthapuram',
    state: 'Kerala',
    category: 'Coastal',
    terminal: 'Domestic Terminal',
    description: "The southern tip gateway, connecting Kerala's state capital, space research centers, and idyllic coastal wellness retreats.",
    mapX: 38,
    mapY: 86,
    popularWith: 'Space Tech, Ayurvedic Tourism, Government',
    directConnections: ['BLR', 'COK', 'MAA', 'TCR'],
    imageUrl: '/images/thiruvananthapuram.webp'
  },
  {
    code: 'GOA',
    name: 'Dabolim / Manohar International Airport',
    city: 'Goa',
    state: 'Goa',
    category: 'Coastal',
    terminal: 'Terminal 1',
    description: 'Sun-drenched coastline, global tourism, maritime trade, and vibrant leisure connectivity.',
    mapX: 25,
    mapY: 48,
    popularWith: 'Leisure, MICE, Coastal Hospitality',
    directConnections: ['BLR', 'BOM', 'COK', 'HYD', 'PNQ'],
    imageUrl: '/images/goa.webp'
  },
  {
    code: 'BOM',
    name: 'Chhatrapati Shivaji Maharaj International Airport',
    city: 'Mumbai',
    state: 'Maharashtra',
    category: 'Major Hub',
    terminal: 'Terminal 1C / 2',
    description: "Financial capital of India, anchoring MMM Airways' Western corridor connectivity.",
    mapX: 20,
    mapY: 20,
    popularWith: 'Finance, Entertainment, National Commerce',
    directConnections: ['BLR', 'HYD', 'GOA', 'PNQ', 'COK'],
    imageUrl: '/images/mumbai.webp'
  },
  {
    code: 'PNQ',
    name: 'Pune International Airport',
    city: 'Pune',
    state: 'Maharashtra',
    category: 'Business',
    terminal: 'New Terminal Building',
    description: "Oxford of the East and powerhouse of automotive engineering and IT innovation.",
    mapX: 28,
    mapY: 23,
    popularWith: 'Automotive, Education, Startups',
    directConnections: ['BLR', 'HYD', 'GOA', 'BOM'],
    imageUrl: '/images/pune.webp'
  },
  {
    code: 'VGA',
    name: 'Vijayawada International Airport',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    category: 'Regional Hub',
    terminal: 'Interim Terminal',
    description: 'The commercial heart of Andhra Pradesh, bustling with agro-processing and educational institutions.',
    mapX: 63,
    mapY: 42,
    popularWith: 'Agribusiness, Trade, Regional Administration',
    directConnections: ['HYD', 'BLR', 'VTZ', 'TIR'],
    imageUrl: '/images/vijayawada.webp'
  },
  {
    code: 'TIR',
    name: 'Tirupati International Airport',
    city: 'Tirupati',
    state: 'Andhra Pradesh',
    category: 'Heritage',
    terminal: 'Garuda Terminal',
    description: 'One of the world’s most visited pilgrimage centers, nested at the foothills of Tirumala Hills.',
    mapX: 62,
    mapY: 53,
    popularWith: 'Spiritual Tourism, Heritage Travel',
    directConnections: ['BLR', 'HYD', 'MAA', 'VGA'],
    imageUrl: '/images/tirupati.webp'
  },
  {
    code: 'VTZ',
    name: 'Visakhapatnam International Airport',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    category: 'Coastal',
    terminal: 'Integrated Terminal',
    description: 'Strategic port metropolis on the Bay of Bengal, balancing heavy industrial enterprise and beachside beauty.',
    mapX: 79,
    mapY: 30,
    popularWith: 'Ports, Steel, Tourism, Naval Command',
    directConnections: ['HYD', 'BLR', 'MAA', 'VGA'],
    imageUrl: '/images/visakhapatnam.webp'
  },
  {
    code: 'IXM',
    name: 'Madurai International Airport',
    city: 'Madurai',
    state: 'Tamil Nadu',
    category: 'Heritage',
    terminal: 'Integrated Terminal',
    description: 'Ancient city of temples and fragrant jasmine, key cultural artery of southern Tamil Nadu.',
    mapX: 48,
    mapY: 76,
    popularWith: 'Heritage, Textiles, Agriculture, Perishables',
    directConnections: ['MAA', 'BLR', 'COK', 'TRZ'],
    imageUrl: '/images/madurai.webp'
  },
  {
    code: 'TRZ',
    name: 'Tiruchirappalli International Airport',
    city: 'Tiruchirappalli (Trichy)',
    state: 'Tamil Nadu',
    category: 'Regional Hub',
    terminal: 'New Integrated Terminal',
    description: 'Historic fortress city along the Kaveri river, renowned for educational excellence and industrial fabrication.',
    mapX: 55,
    mapY: 69,
    popularWith: 'Fabrication, Education, Temple Circuits',
    directConnections: ['MAA', 'BLR', 'IXM', 'SXV'],
    imageUrl: '/images/tiruchirappalli.webp'
  },
  {
    code: 'TCR',
    name: 'Tuticorin (Thoothukudi) Airport',
    city: 'Thoothukudi',
    state: 'Tamil Nadu',
    category: 'Coastal',
    terminal: 'Domestic Terminal',
    description: 'The Pearl City, bustling sea freight port and gateway to coastal seafood and salt exports.',
    mapX: 47,
    mapY: 84,
    popularWith: 'Seafood Logistics, Maritime Trade, Power',
    directConnections: ['MAA', 'BLR', 'TRV'],
    imageUrl: '/images/thoothukudi.webp'
  },
  {
    code: 'SXV',
    name: 'Salem Airport',
    city: 'Salem',
    state: 'Tamil Nadu',
    category: 'Business',
    terminal: 'Passenger Terminal',
    description: 'Steel and mango hub connecting the western Tamil Nadu manufacturing and weaving clusters.',
    mapX: 53,
    mapY: 61,
    popularWith: 'Textiles, Steel, Agriculture',
    directConnections: ['BLR', 'MAA', 'TRZ'],
    imageUrl: '/images/salem.webp'
  },
  {
    code: 'HBX',
    name: 'Hubballi Airport',
    city: 'Hubballi (Hubli)',
    state: 'Karnataka',
    category: 'Regional Hub',
    terminal: 'Passenger Terminal',
    description: 'Commercial nucleus of North Karnataka, bridging agricultural markets and heavy engineering.',
    mapX: 33,
    mapY: 42,
    popularWith: 'Commerce, Railways, Engineering',
    directConnections: ['BLR', 'BOM', 'HYD'],
    imageUrl: '/images/hubballi.webp'
  },
  {
    code: 'MYQ',
    name: 'Mysuru Airport',
    city: 'Mysuru (Mysore)',
    state: 'Karnataka',
    category: 'Heritage',
    terminal: 'Passenger Terminal',
    description: 'City of Palaces, royal heritage, silk weaving, and flourishing IT satellite corridor.',
    mapX: 41,
    mapY: 60,
    popularWith: 'Royal Heritage, Silk, Tourism, Yoga',
    directConnections: ['BLR', 'COK', 'GOA'],
    imageUrl: '/images/mysuru.webp'
  },
  {
    code: 'PNY',
    name: 'Puducherry Airport',
    city: 'Puducherry (Pondicherry)',
    state: 'Puducherry',
    category: 'Coastal',
    terminal: 'Passenger Terminal',
    description: 'French colonial seaside promenade, serene spiritual retreats, and flourishing coastal tourism.',
    mapX: 67,
    mapY: 63,
    popularWith: 'Colonial Tourism, Spiritual Retreats, Arts',
    directConnections: ['BLR', 'MAA', 'HYD'],
    imageUrl: '/images/puducherry.webp'
  },
  {
    code: 'GBI',
    name: 'Kurnool Airport (Uyyalawada)',
    city: 'Kurnool',
    state: 'Andhra Pradesh',
    category: 'Regional Hub',
    terminal: 'Passenger Terminal',
    description: 'Gateway to Rayalaseema, mineral-rich industries, and ancient historic monuments.',
    mapX: 48,
    mapY: 41,
    popularWith: 'Mineral Commerce, Rayalaseema Transit',
    directConnections: ['HYD', 'BLR', 'VGA'],
    imageUrl: '/images/kurnool.webp'
  }
];
