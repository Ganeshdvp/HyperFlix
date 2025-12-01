import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
            q: "What is HyperFlix?",
            a: "HyperFlix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
          },
          {
            q: "How much does HyperFlix cost?",
            a: "Watch HyperFlix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹1 to ₹10/month.",
          },
          {
            q: "Where can I watch?",
            a: "Watch anywhere, anytime. Sign in with your HyperFlix account to watch instantly on the web at hyperflix.com from your personal computer or on any internet-connected device that offers the HyperFlix app...",
          },
          {
            q: "How do I cancel?",
            a: "HyperFlix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
          },
          {
            q: "Where can I watch on HyperFlix?",
            a: "HyperFlix has an extensive library of feature films, documentaries, shows, anime, award-winning HyperFlix originals, and more. Watch as much as you want, anytime you want.",
          },
          {
            q: "Is HyperFlix good for kids?",
            a: "The HyperFlix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space...",
          },
  ]

  return (
    <div className="bg-black text-white w-full py-10 px-4 sm:px-6 lg:px-40">
      <h2 className="font-bold text-2xl sm:text-xl md:text-2xl lg:text-2xl mb-6">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col space-y-3 max-w-6xl mx-auto">
        {accordionData.map((item, index) => (
          <div key={index} className="rounded-md bg-gray-700 overflow-hidden">
            <div
              onClick={() => handleClick(index)}
              className="flex items-center justify-between cursor-pointer hover:bg-gray-600 transition-colors duration-300 p-4"
            >
              <h3 className="text-md sm:text-lg md:text-lg font-medium">
                {item.q}
              </h3>
              <IoIosArrowDown
                className={`mr-2 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                size={24}
              />
            </div>
            {openIndex === index && (
              <p className="border-t border-gray-500 px-4 py-3 text-sm sm:text-base md:text-md opacity-80">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
