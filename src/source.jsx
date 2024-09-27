import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  property1,
  property2,
  property3,
  property4,
  property5,
  property6,
  property7,
  property8,
} from "./assets";
import { IoMdAnalytics } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { GrDetach } from "react-icons/gr";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaShop } from "react-icons/fa6";
import { GiIsland } from "react-icons/gi";
import { GoContainer } from "react-icons/go";
import {
  MdOutlineSupportAgent,
  MdOutlineAlternateEmail,
  MdGppGood,
  MdOutlineHomeWork,
  MdLocalMall,
  MdOutlineTerrain,
  MdOutlineDirectionsBusFilled,
  MdMore,
  MdSell,
  MdBedroomParent,
} from "react-icons/md";
import { FaHouseUser } from "react-icons/fa6";
import {
  GiFlatPlatform,
  GiHomeGarage,
  GiCommercialAirplane,
} from "react-icons/gi";
import { FaHotel } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import { TiWorld } from "react-icons/ti";

export const tabs = [
  { name: "Home", id: "hero" },
  { name: "Category", id: "property-types" },
  { name: "How It Work", id: "how-it-work" },
  { name: "Trends", id: "trending-properties" },
  { name: "Properties", id: "properties" },
  { name: "Contact Us", id: "contact-us" },
];
export const howItWork = [
  {
    title: "Buying a Home",
    icon: <HiHomeModern />,
    description: `Start by exploring our extensive property listings. Use our advanced search 
                 filters to narrow down options based on location, price, property type, and 
                 other preferences.`,
  },
  {
    title: "Selling Your Property",
    icon: <MdSell />,
    description: `Start by listing your property on our website. Provide detailed descriptions, 
                 high-quality photos, and key information to attract potential buyers. Our team 
                 can assist with professional photography and staging if needed.`,
  },
  {
    title: "Renting a Home",
    icon: <MdBedroomParent />,
    description: `Explore our comprehensive list of rental properties. Use filters to find homes 
                 that meet your criteria, such as location, budget, and amenities.`,
  },
];
export const whyChooseUs = [
  {
    title: "Affordable pricing",
    icon: <IoMdAnalytics />,
    link: "",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    title: "Quantity Houses",
    icon: <MdGppGood />,
    link: "",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    title: "Prime locations",
    icon: <TiWorld />,
    link: "",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    title: "24/7 Support",
    icon: <MdOutlineSupportAgent />,
    link: "",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];
export const properties = [
  {
    title: "Modern 4-Bedroom Family Home",
    description:
      "A spacious 4-bedroom family home located in a peaceful suburban neighborhood. Features include a large kitchen, open-plan living and dining area, and a private backyard perfect for outdoor activities.",
    image: property1,
    bedrooms: 4,
    bathrooms: 3,
    size: "2,500 sq ft",
    price: "₦120,000,000",
    type: "Detached House",
    isFor: "Sale",
  },
  {
    title: "Luxurious Downtown Apartment",
    description:
      "This upscale 2-bedroom apartment in the heart of downtown offers stunning city views, modern amenities, and a sleek, open-concept layout. Ideal for professionals looking for urban living.",
    image: property2,
    bedrooms: 2,
    bathrooms: 2,
    size: "1,200 sq ft",
    price: "₦6,000,000/yr",
    type: "Apartment",
    isFor: "Rent",
  },
  {
    title: "Cozy 3-Bedroom Country Cottage",
    description:
      "This charming 3-bedroom cottage is nestled in the countryside, offering peace and quiet with a rustic appeal. Perfect for those seeking a serene retreat with modern comforts.",
    image: property3,
    bedrooms: 3,
    bathrooms: 2,
    size: "1,800 sq ft",
    price: "₦65,000,00",
    type: "Cottage",
    isFor: "Sale",
  },
  {
    title: "Stylish Studio Apartment with Sea View",
    description:
      "A stylish studio apartment offering breathtaking sea views. This compact yet modern space is perfect for individuals or couples looking for a beachfront home.",
    image: property4,
    bedrooms: "Studio",
    bathrooms: 1,
    size: "600 sq ft",
    price: "₦3,500,000/yr",
    type: "Studio Apartment",
    isFor: "Rent",
  },
  {
    title: "Spacious 5-Bedroom Villa with Pool",
    description:
      "This stunning 5-bedroom villa features a private swimming pool, landscaped garden, and expansive living spaces. Ideal for large families or those who love to entertain.",
    image: property5,
    bedrooms: 5,
    bathrooms: 4,
    size: "4,500 sq ft",
    price: "₦250,000,000",
    type: "Villa",
    isFor: "Sale",
  },
  {
    title: "Contemporary 3-Bedroom Penthouse",
    description:
      "A modern penthouse located in the heart of the city, offering 3 spacious bedrooms, an expansive terrace with a skyline view, and state-of-the-art amenities.",
    image: property6,
    bedrooms: 3,
    bathrooms: 3,
    size: "2,200 sq ft",
    price: "₦15,000,000/yr",
    type: "Penthouse",
    isFor: "Rent",
  },
  {
    title: "Elegant 4-Bedroom Townhouse",
    description:
      "This 4-bedroom townhouse offers a blend of modern design and classic charm. Located in a vibrant neighborhood, it features spacious rooms, a private garden, and a garage.",
    image: property7,
    bedrooms: 4,
    bathrooms: 3,
    size: "2,700 sq ft",
    price: "₦85,000,000",
    type: "Townhouse",
    isFor: "Sale",
  },
  {
    title: "Modern 2-Bedroom Beachfront Condo",
    description:
      "Enjoy luxury living in this modern beachfront condo. The 2-bedroom unit offers direct beach access, modern finishes, and spectacular ocean views from every room.",
    image: property8,
    bedrooms: 2,
    bathrooms: 2,
    size: "1,500 sq ft",
    price: "₦100,000,000",
    type: "Condo",
    isFor: "Sale",
  }
];
export const reviews = [
  {
    profile: client1,
    name: "Chioma Okafor",
    position: "Marketing Manager",
    company: "Global Housing Solutions",
    content: `Megastate exceeded my expectations. Their attention to detail, professionalism, and market knowledge helped me secure the perfect home. I’ve never worked with a more efficient and friendly team.`,
  },
  {
    profile: client2,
    name: "Samuel Adedayo",
    position: "CEO",
    company: "Adedayo Ventures",
    content: `Working with Megastate was a fantastic experience. Their team guided me through the entire process of purchasing a commercial property, making it stress-free and smooth. I highly recommend their services to anyone in the market for real estate.`,
  },
  {
    profile: client3,
    name: "Blessing Eze",
    position: "Operations Director",
    company: "Pinnacle Constructions",
    content: `Megastate helped us secure a prime location for our new development project. Their expertise and network in the real estate market were invaluable, and they made the entire process seamless. Truly impressive service!`,
  },
  {
    profile: client4,
    name: "Ibrahim Musa",
    position: "Investor",
    company: "Musa Holdings Ltd",
    content: `As a real estate investor, finding the right property is key. Megastate provided me with excellent investment opportunities and valuable insights into the market. I couldn’t be happier with the returns on my latest property purchase.`,
  },
  {
    profile: client5,
    name: "Ifeoma Johnson",
    position: "Architect",
    company: "Johnson & Co. Designs",
    content: `From start to finish, Megastate provided outstanding service. Their knowledge of the local market and dedication to finding exactly what I needed made all the difference. I highly recommend them for any real estate needs."`,
  },
  {
    profile: client6,
    name: "Adewale Bakare",
    position: "Project Manager",
    company: "Urban Growth Developments",
    content: `Megastate helped us navigate a complex commercial real estate deal with ease. Their team's professionalism and commitment to our success were evident at every step. We will definitely work with them again in the future.`,
  },
];
export const contactOptions = [
  {
    title: "Email Support",
    value: "mradinuba@gmail.com",
    description: "Our team can respond in realtime",
    icon: <MdOutlineAlternateEmail />,
  },
  {
    title: "Call Us Directly",
    value: "+2348149121918",
    description: "We are available during working hours",
    icon: <IoCallOutline />,
  },
  {
    title: "Visit Our Office",
    description: "Visit our Office in real life",
    value: "Gwarinpa, Abuja, Nigeria",
    icon: <IoLocationOutline />,
  },
];
export const socialHandles = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "",
  },
  {
    name: "Facebook",
    icon: <FaFacebookSquare />,
    link: "",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter />,
    link: "",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];
export const propertyTypes = [
  { label: "Warehouse", value: "Warehouse", icon: <FaWarehouse /> },
  {
    label: "Office Spaces",
    value: "Office Spaces",
    icon: <RiHomeOfficeFill />,
  },
  { label: "Shop", value: "Shop", icon: <FaShop /> },
  { label: "Lands", value: "Lands", icon: <GiIsland /> },
  { label: "Self Contain", value: "Self Contain", icon: <GoContainer /> },
  {
    label: "Co-Working Space",
    value: "Co-Working Space",
    icon: <MdOutlineHomeWork />,
  },
  { label: "Shop in a mall", value: "Shop in a mall", icon: <MdLocalMall /> },
  {
    label: "Semi Detached Bungalow",
    value: "Semi Detached Bungalow",
    icon: <GrDetach />,
  },
  {
    label: "Semi Detached Duplex",
    value: "Semi Detached Duplex",
    icon: <FaHouseUser />,
  },
  { label: "Detached Duplex", value: "Detached Duplex", icon: <GrDetach /> },
  { label: "Mini Flats", value: "Mini Flats", icon: <GiFlatPlatform /> },
  {
    label: "Terraced Duplex",
    value: "Terraced Duplex",
    icon: <MdOutlineTerrain />,
  },
  { label: "Houses", value: "Houses", icon: <GiHomeGarage /> },
  {
    label: "Commercial Properties",
    value: "Commercial Properties",
    icon: <GiCommercialAirplane />,
  },
  {
    label: "Flat and apartment",
    value: "Flat and apartment",
    icon: <GiFlatPlatform />,
  },
  {
    label: "Tarraced Bungalow",
    value: "Tarraced Bungalow",
    icon: <FaHouseUser />,
  },
  {
    label: "Detached Bungalow",
    value: "Detached Bungalow",
    icon: <GrDetach />,
  },
  { label: "Hotel", value: "Hotel", icon: <FaHotel /> },
  {
    label: "Filling Station",
    value: "Filling Station",
    icon: <MdOutlineDirectionsBusFilled />,
  },
  { label: "Others", value: "Others", icon: <MdMore /> },
];
export const faq = [
  {
    title: "How do I start the process of buying a property?",
    description: `
       The first step is to get pre-approved for a mortgage if you plan to finance the purchase. This helps you determine your budget. Afterward, you can contact us to help you find properties that match your needs, schedule viewings, and guide you through the entire buying process.
    `,
  },
  {
    title: "What factors should I consider when choosing a property?",
    description: `
       Key factors include location, property condition, neighborhood amenities, proximity to schools or work, and future resale value. Our team can help you assess these elements and make an informed decision based on your needs and long-term goals.
    `,
  },
  {
    title: "What is the process for selling my home?",
    description: `
      Selling your home involves setting a competitive price, preparing the property for listing, and marketing it to potential buyers. We provide a comprehensive service, including market analysis, professional photos, and listings on major platforms to ensure maximum exposure. We also assist in negotiations and finalizing the sale.
    `,
  },
  {
    title: "How do I know if a property is a good investment?",
    description: `
    A good investment property typically offers high rental yields, strong market appreciation potential, and is located in a desirable area. We offer expert advice and market research to help you evaluate the potential returns on your investment and minimize risks.
    `,
  },
  {
    title: "What costs are involved in buying a property?",
    description: `
      In addition to the purchase price, other costs include legal fees, taxes, inspection fees, mortgage application fees, and possibly homeowner association dues. We provide a breakdown of all potential costs so you can budget accordingly and avoid surprises.
    `,
  },
];
export const footer = [
  {
    title: "Explore",
    routes: [
      { name: "Home", id: "hero" },
      { name: "About Us", id: "about" },
      { name: "Services", id: "services" },
    ],
  },
  {
    title: "Properties",
    routes: [
      { name: "Properties", id: "properties" },
      { name: "Agents", id: "agents" },
      { name: "Contact Us", id: "contact" },
    ],
  },
  {
    title: "Quick Links",
    routes: [
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ],
  },
];
