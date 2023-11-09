import React from "react";

const ScheduleCall = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Schedule Your Call with Dany</h2>
          <p className="text-lg text-gray-700 mb-6">
            Free 15-Minute Demo Call. By the end of this Audit call, you will have a clear understanding of the next steps you can take for your business to start generating consistent and reliable results online with Funnels & Paid Advertising.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Find a time on Dany’s calendar to schedule your call today, and we look forward to speaking to you soon!
          </p>
          <h3 className="text-2xl font-semibold mb-4">This Audit Call is Perfect For:</h3>
          <ul className="text-lg text-gray-700 list-disc pl-6 mb-6">
            <li>Businesses looking to convert their current website into a high-quality & streamlined funnel format.</li>
            <li>Businesses looking to take their offline business online.</li>
            <li>Businesses looking to understand their increased revenue potential with funnels & conversion rate optimization.</li>
            <li>Businesses looking to maximize their conversion rates & average order value.</li>
            <li>Businesses looking for a reliable agency that can make their company a priority.</li>
          </ul>
          <a
            href="#contact"
            className="border border-black rounded-xl px-4 py-2 text-zinc-800 text-md font-semibold bg-blue-400 hover:shadow-md hover:shadow-zinc-400 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCall;
