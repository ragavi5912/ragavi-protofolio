import { useState } from 'react';
import websiteImg1 from '../assets/laptop-shopping-bags-online-shopping-concept.jpg';
import websiteImg2 from '../assets/food.jpg';
import websiteImg3 from '../assets/travel.jpg';

const ProjectCard = ({ image, altText, title, description, link }) => (
  <div className="flex flex-col items-center bg-white text-primary p-5 rounded-lg shadow-lg max-w-[300px]">
    <img
      className="h-[200px] rounded-md mb-4 object-cover cursor-pointer"
      src={image}
      alt={altText}
      onClick={() => window.open(link, '_blank')} // Opens the link in a new tab
    />
    <h2 className="text-lg font-bold mb-2 text-black">{title}</h2>
    <p className="text-sm text-center text-black">{description}</p>
  </div>
);

export default function Projects() {
  return (
    <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='project'>
      <div className="w-full text-center">
        <h1 className="text-4xl border-b-4 border-secondary mb-5 inline-block font-bold text-black">Projects</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-10 px-5 mt-10">
        <ProjectCard
          image={websiteImg1}
          altText="E-commerce website"
          title="E-Commerce Platform"
          description="A modern e-commerce platform built with React.js, featuring a seamless shopping experience, secure payment gateway integration, and responsive design."
          link="https://my-projects-7hgbpd0bp-ragavis-projects-88a24d48.vercel.app/" // Replace with your live website's URL
        />
        <ProjectCard
          image={websiteImg2}
          altText="Food delivery app"
          title="Food Delivery App"
          description="A React-based food delivery application with real-time order tracking, an intuitive UI, and restaurant management features."
          link="https://your-live-food-app-url.vercel.app/" // Replace with your live food delivery app URL
        />
        <ProjectCard
          image={websiteImg3}
          altText="Travel website"
          title="Travel Booking Website"
          description="A professional travel booking platform created with React.js, offering users the ability to search and book trips, view travel packages, and access detailed itineraries."
          link="https://your-live-travel-app-url.vercel.app/" // Replace with your live travel booking app URL
        />
      </div>
    </section>
  );
}
