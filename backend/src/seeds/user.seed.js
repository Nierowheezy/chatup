import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "emem.nwachukwu@example.com",
    fullName: "Emem Nwachukwu",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "oluwatoyin.adediran@example.com",
    fullName: "Oluwatoyin Adediran",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "sandra.kabore@example.com",
    fullName: "Sandra Kabore",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "mariama.diallo@example.com",
    fullName: "Mariama Diallo",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "olga.miller@example.com",
    fullName: "Olga Miller",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "carla.martins@example.com",
    fullName: "Carla Martins",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "anastasia.ogundele@example.com",
    fullName: "Anastasia Ogundele",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "sophie.traore@example.com",
    fullName: "Sophie Traore",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "chijioke.nwosu@example.com",
    fullName: "Chijioke Nwosu",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "marko.kovacic@example.com",
    fullName: "Marko Kovacic",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "mohammed.abdul@example.com",
    fullName: "Mohammed Abdul",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "joseph.okafor@example.com",
    fullName: "Joseph Okafor",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "boubacar.sanogo@example.com",
    fullName: "Boubacar Sanogo",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "francisco.garcia@example.com",
    fullName: "Francisco Garcia",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "sibusiso.nkosi@example.com",
    fullName: "Sibusiso Nkosi",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
