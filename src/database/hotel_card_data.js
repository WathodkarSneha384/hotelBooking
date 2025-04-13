const hotels = [
  {
    id: "c1",
    name: "Taj Hotel",
    city: "Mumbai",
    state: "Maharastra",
    price: 5000,
    discount:50,
    rating: "4.7",
    address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001",
    phone: "022 6665 3366",
    specification: {
      internet: "Wi-Fi free",
      FoodAndDrink:
        "Restaurant ,Bar,Buffet dinner ,Breakfast buffet,Breakfast free ,Room service 24-hour",
      ParkingTransport:
        "Parking ,Valet parking ,Airport shuttle extra charge,Local shuttle",
      Services: "Front desk 24-hour ,Full-service laundry",
      Pools: "Outdoor pool ,Lifeguard ,Hot tub",
      Children: "Child-friendly",
      BusinessEvents: "Business centre",
      quality: {
        hotel1: "Eco-certified hotel",
        hotel2: "5-Star hotel",
      },
    },
    image: "/assets/HotelCardImages/Taj_hotel_mumbai.jpg",
    review: [
      {
        id: 1,
        comment: "This hotel is awesome.",
        rating: 4.7,
      },
      {
        id: 2,
        comment: "This hotel is good.",
        rating: 4.6,
      },
      {
        id: 3,
        comment: "Service of this hotel is very good.",
        rating: 4.2,
      },
      {
        id: 4,
        comment: "Awesome service in affordable price.",
        rating: 4.8,
      },
    ],
  },

  {
    id: "c2",
    name: "Rambagh Palace Hotel",
    city: "Jaipur",
    state: "Rajasthan",
    price: 4000,
    rating: "4.7",
    address: "Bhawani Singh Rd, Rambagh, Jaipur, Rajasthan 302005",
    phone: "0141 667 1234",
    specification: {
      internet: "Wi-Fi free",
      FoodAndDrink:
        "Restaurant,Bar ,Room service 24-hour ,Breakfast free ,Breakfast buffet",
      ParkingTransport:
        "Parking free ,Valet parking ,Airport shuttle extra charge ,Local shuttle",
      Services: "Front desk 24-hour ,Full-service laundry",
      Pools: "Indoor pool ,Outdoor pool ,Lifeguard ,Hot tub",
      Children: "Child-friendly ,Games room",
      BusinessEvents: "Business centre",
      quality: {
        hotel1: "Eco-certified hotel",
        hotel2: "5-Star hotel",
      },
    },
    image: "/assets/HotelCardImages/Rambagh_palace_hotel_jaipur.jpg",
    review: [
      {
        id: 1,
        comment: "This hotel is awesome.",
        rating: 4.7,
      },
      {
        id: 2,
        comment: "This hotel is good.",
        rating: 4.6,
      },
      {
        id: 3,
        comment: "Service of this hotel is very good.",
        rating: 4.2,
      },
      {
        id: 4,
        comment: "Awesome service in affordable price.",
        rating: 4.8,
      },
    ],
  },

  {
    id: "c3",
    name: "Uptown Hotel",
    city: "Nagpur",
    state: "Maharastra",
    price: 4500,
    rating: "3.7",
    address:
      "211, Mouza Sitabuldi, Residency Rd, Sadar, Nagpur, Maharashtra 440001",
    phone: "090497 05050",
    specification: {
      internet: "Wi-Fi",
      FoodAndDrink: "Room service ,Breakfast free",
      ParkingTransport: " parking",
      Services: "Front desk 24-hour ,Full-service laundry",
      Pools: "Pool ,No hot tub",
      Children: "No Child-friendly ",
      BusinessEvents: "not available",
      quality: {
        hotel1: "Eco-certified hotel",
        hotel2: "3-Star hotel",
      },
    },
    image: "/assets/HotelCardImages/Uptown_hotel_nagpur.jpg",
    review: [
      {
        id: 1,
        comment: "This hotel is awesome.",
        rating: 4.7,
      },
      {
        id: 2,
        comment: "This hotel is good.",
        rating: 4.6,
      },
      {
        id: 3,
        comment: "Service of this hotel is very good.",
        rating: 4.2,
      },
      {
        id: 4,
        comment: "Awesome service in affordable price.",
        rating: 4.8,
      },
    ],
  },

  {
    id: "c4",
    name: "Hyatt Hotel",
    city: "Pune",
    state: "Maharastra",
    price: 6000,
    rating: "4.4",
    address:
      "Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057",
    phone: "020 6698 1234",
    specification: {
      internet:
        "Wi-Fi free ,Wi-Fi in public areas ,Public Internet workstation",
      FoodAndDrink:
        "Restaurant ,Bar ,Table service ,Buffet dinner ,Room service 24-hour ,Breakfast extra charge ,Breakfast buffet",
      ParkingTransport:
        "Parking free ,Self parking ,Valet parking ,Private car service ,Local shuttle",
      Services:
        "Front desk 24-hour ,Baggage storage ,Concierge ,Currency exchange ,Full-service laundry ,Lift ,Social hour ,Wake up calls ,Housekeeping daily ,Turndown service",
      Pools: "Outdoor pool ,Lifeguard ,No hot tub",
      Children: "Child-friendly ,Activities for kids",
      BusinessEvents: "Business centre ,Meeting rooms",
      quality: {
        hotel1: "certified hotel",
        hotel2: "4-Star hotel",
      },
    },
    image: "/assets/HotelCardImages/Hyatt_hotel_pune.jpg",
    review: [
      {
        id: 1,
        comment: "This hotel is awesome.",
        rating: 4.7,
      },
      {
        id: 2,
        comment: "This hotel is good.",
        rating: 4.6,
      },
      {
        id: 3,
        comment: "Service of this hotel is very good.",
        rating: 4.2,
      },
      {
        id: 4,
        comment: "Awesome service in affordable price.",
        rating: 4.8,
      },
    ],
  },

  {
    id: "c5",
    name: "La Estoria Hotel",
    city: "Goa",
    state: "Goa",
    price: 5000,
    rating: "4.4",
    address: "Bammon Vaddo, Candolim, Goa 403515",
    phone: " 0832 665 0000",
    specification: {
      internet: "Wi-Fi free ,Wi-Fi in public areas",
      FoodAndDrink:
        "Restaurant ,Bar ,Table service ,Buffet dinner ,Room service 24-hour ,Breakfast extra charge ,Breakfast buffet",
      ParkingTransport:
        "Parking free ,Self parking ,Valet parking ,Airport shuttle extra charge ,Private car service ,Car rental onsite",
      Services:
        "Front desk 24-hour ,Baggage storage ,Concierge ,Grocery shop ,Currency exchange ,Full-service laundry ,Lift ,Wake up calls,Gift shop ,Housekeeping daily ,Turndown service",
      Pools: "Pool ,Outdoor pool ,Adult-only pool ,Lifeguard ,No hot tub",
      Children: "Child-friendly ,Kids club",
      BusinessEvents: "Meeting rooms",
      quality: {
        hotel1: "certified hotel",
        hotel2: "5-Star hotel",
      },
    },
    image: "/assets/HotelCardImages/La_Estoria_hotel_goa.jpg",
    review: [
      {
        id: 1,
        comment: "This hotel is awesome.",
        rating: 4.7,
      },
      {
        id: 2,
        comment: "This hotel is good.",
        rating: 4.6,
      },
      {
        id: 3,
        comment: "Service of this hotel is very good.",
        rating: 4.2,
      },
      {
        id: 4,
        comment: "Awesome service in affordable price.",
        rating: 4.8,
      },
    ],
  },

  {
    id: "c6",
    name: " Marriott hotel",
    city: "Indore",
    state: "Madhya Pradesh",
    price: 3000,
    rating: "4.4",
    address:
      "H-2 Scheme No 54, Meghdoot Garden, Vijay Nagar, Indore, Madhya Pradesh 452010",
    phone: "0731 477 7777",
    specification: {
      internet:
        "Wi-Fi free ,Wi-Fi in public areas ,Public Internet workstation",
      FoodAndDrink:
        "Restaurant ,Bar ,Table service ,Buffet dinner ,Room service ,Breakfast extra charge ,Breakfast buffet",
      ParkingTransport:
        "Parking free Self parking free ,Valet parking free ,Airport shuttle extra charge ,Local shuttle",
      Services:
        "Front desk 24-hour ,Baggage storage ,Concierge ,Currency exchange ,Full-service laundry ,Lift ,Wake up calls ,Housekeeping daily ,Turndown service",
      Pools: "Outdoor pool ,No hot tub",
      Children: "Child-friendly",
      BusinessEvents: "Business centre ,Meeting rooms",
      quality: {
        hotel1: "Eco-certified hotel",
        hotel2: "5-Star hotel",
      },
    },
    image: "/assets/HotelCardImages/Marriott_hotel_indore.jpg",
    review: [
      {
        id: 1,
        comment: "This hotel is awesome.",
        rating: 4.7,
      },
      {
        id: 2,
        comment: "This hotel is good.",
        rating: 4.6,
      },
      {
        id: 3,
        comment: "Service of this hotel is very good.",
        rating: 4.2,
      },
      {
        id: 4,
        comment: "Awesome service in affordable price.",
        rating: 4.8,
      },
    ],
  },

  {
    id: "c7",
    name: "Regenta Central Hotel",
    city: "Noida",
    state: "Uttar Pradesh",
    price: 5500,
    rating: "3.8",
    address:
      "H94F+6CP, Dadri Main Rd, Natthu Colony, Baraula, Sector 49, Noida, Uttar Pradesh 201301",
    phone: "089297 79568",
    specification: {
      internet: "Wi-Fi free ,Wi-Fi in public areas",
      FoodAndDrink:
        "Restaurant ,Table service ,Buffet dinner ,Room service 24-hour ,Breakfast extra charge ,Breakfast buffet",
      ParkingTransport:
        "Parking free ,Self parking free ,Valet parking free ,Airport shuttle extra charge ,Private car service extra charge ,Car rental onsite ,Local shuttle",
      Services:
        "Front desk 24-hour ,Baggage storage ,Concierge ,Currency exchange ,Full-service laundry ,Lift ,Wake up calls ,Housekeeping daily ,Turndown service",
      Pools: "No pools ,No hot tub",
      Children: "No Child-friendly ",
      BusinessEvents: "Business centre ,Meeting rooms",
      quality: {
        hotel1: "certified hotel",
        hotel2: "4-Star hotel",
      },
    },
    image: "/assets/HotelCardImages/Regenta_central_hotel_noida.jpg",
    review: [
      {
        id: 1,
        comment: "This hotel is awesome.",
        rating: 4.7,
      },
      {
        id: 2,
        comment: "This hotel is good.",
        rating: 4.6,
      },
      {
        id: 3,
        comment: "Service of this hotel is very good.",
        rating: 4.2,
      },
      {
        id: 4,
        comment: "Awesome service in affordable price.",
        rating: 4.8,
      },
    ],
  },

  {
    id: "c8",
    name: "The Royal Plaza Hotel",
    city: "New Delhi",
    state: "Delhi",
    price: 4000,
    rating: "3.8",
    address: "19, Ashoka Rd, Janpath, Connaught Place, New Delhi, Delhi 110001",
    phone: "011 4355 5555",
    specification: {
      internet: "Wi-Fi free ,Wi-Fi in public areas",
      FoodAndDrink:
        "Restaurant ,Bar ,Table service ,Buffet dinner ,Room service 24-hour ,Breakfast extra charge ,Breakfast buffet",
      ParkingTransport: "Parking free ,Valet parking ,Transfer ,Local shuttle",
      Services:
        "Front desk 24-hour ,Baggage storage ,Currency exchange ,Full-service laundry ,Lift ,Wake up calls ,Housekeeping",
      Pools: "Pool ,No hot tub",
      Children: "Babysitting",
      BusinessEvents: "Business centre ,Meeting rooms",
      quality: {
        hotel1: "Eco-certified hotel",
        hotel2: "4-Star hotel",
      },
    },
    image: "/assets/HotelCardImages/The_Royal_plazza_newDelhi.jpg",
    review: [
      {
        id: 1,
        comment: "This hotel is awesome.",
        rating: 4.7,
      },
      {
        id: 2,
        comment: "This hotel is good.",
        rating: 4.6,
      },
      {
        id: 3,
        comment: "Service of this hotel is very good.",
        rating: 4.2,
      },
      {
        id: 4,
        comment: "Awesome service in affordable price.",
        rating: 4.8,
      },
    ],
  },

  {
    id: "c9",
    name: "Hotel Rio Meridian",
    city: "Mysore",
    state: "Karnataka",
    price: 4600,
    rating: "4.0",
    address:
      "#2203, 54, Sayyaji Rao Rd, Bamboo Bazar, Tilak Nagar, Mysuru, Karnataka 570015",
    phone: " 095131 20001",
    specification: {
      internet: "Wi-Fi free",
      FoodAndDrink:
        "Restaurant ,Bar ,Table service ,Buffet dinner ,Room service 24-hour ,Breakfast free ,Breakfast buffet",
      ParkingTransport:
        "Parking free ,Valet parking ,Transfer ,Car rental onsite ,Local shuttle",
      Services:
        "Front desk 24-hour ,Baggage storage ,Concierge ,Currency exchange ,Full-service laundry ,Social hour ,Wake up calls ,Housekeeping daily ,Turndown service",
      Pools: "Outdoor pool ,Adult-only pool ,Wading pool ,No hot tub",
      Children: "Child-friendly",
      BusinessEvents: "Business centre ,Meeting rooms",
      quality: {
        hotel1: "certified hotel",
        hotel2: "4-Star hotel",
      },
    },
    image: "/assets/HotelCardImages/Hotel_Rio_Meridian_mysore.jpg",
    review: [
      {
        id: 1,
        comment: "This hotel is awesome.",
        rating: 4.7,
      },
      {
        id: 2,
        comment: "This hotel is good.",
        rating: 4.6,
      },
      {
        id: 3,
        comment: "Service of this hotel is very good.",
        rating: 4.2,
      },
      {
        id: 4,
        comment: "Awesome service in affordable price.",
        rating: 4.8,
      },
    ],
  },

  {
    id: "c10",
    name: "Holiday Inn Hotel",
    city: "Amritsar",
    state: "Punjab",
    price: 3500,
    rating: "4.5",
    address:
      "District Shopping Complex, Ranjit Avenue, Amritsar, Punjab 143001",
    phone: "0183 508 8888",
    specification: {
      internet:
        "Wi-Fi free ,Wi-Fi in public areas ,Public Internet workstation",
      FoodAndDrink:
        "Restaurant ,Bar ,Table service ,Buffet dinner ,Room service 24-hour ,Breakfast extra charge ,Breakfast buffet",
      ParkingTransport:
        "Parking free ,Self parking free ,Valet parking free ,Airport shuttle extra charge ,Private car service extra charge ,Car rental onsite ,Local shuttle",
      Services:
        "Front desk 24-hour ,Concierge ,Currency exchange ,Full-service laundry ,Lift ,Wake up calls ,Gift shop ,Housekeeping daily",
      Pools: "Outdoor pool ,Adult-only pool ,No hot tub",
      Children: "Child-friendly",
      BusinessEvents: "Business centre ,Meeting rooms",
      quality: {
        hotel1: "Eco-certified hotel",
        hotel2: "5-Star hotel",
      },
    },
    image: "/assets/HotelCardImages/Holiday_Inn_hotel_Amritsar.jpg",
    review: [
      {
        id: 1,
        comment: "This hotel is awesome.",
        rating: 4.7,
      },
      {
        id: 2,
        comment: "This hotel is good.",
        rating: 4.6,
      },
      {
        id: 3,
        comment: "Service of this hotel is very good.",
        rating: 4.2,
      },
      {
        id: 4,
        comment: "Awesome service in affordable price.",
        rating: 4.8,
      },
    ],
  },
];

export default hotels;
