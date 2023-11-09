import React from "react";

const wizards = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/assets/images/ty.jpg", // Replace with the actual image file path
  },
  {
    name: "Jane Smith",
    role: "Creative Director",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/images/ty.jpg", // Replace with the actual image file path
  },
  {
    name: "Bob Johnson",
    role: "Marketing Specialist",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/assets/images/ty.jpg", // Replace with the actual image file path
  },
];

const Wizards = () => {
    return (
        <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Meet the Wizards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wizards.map((wizard, index) => (
              <div
                key={index}
                className="bg-lime-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 flex flex-col items-center m-8"
              >
                <div className="w-fit relative overflow-hidden mb-4">
                  <img
                    src={wizard.image}
                    alt={wizard.name}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {wizard.name}
                </h3>
                <p className="text-gray-600 mb-2">{wizard.role}</p>
                <p className="text-gray-600 mb-4">{wizard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Wizards;
