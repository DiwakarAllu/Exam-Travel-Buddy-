import React from "react";
import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
import logoImage from "client/src/assets/logo-1.png";
import studentImage from "client/src/assets/bg.png";
import { Component } from "./Navbar";

function About() {
  return (
    <Flowbite>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
        <Component />
        {/* <div className="flex justify-end mb-6">
          <DarkThemeToggle />
        </div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <img
              src={logoImage}
              alt="Exam Travel Buddy Logo"
              className="mx-auto w-32 h-32 rounded-full shadow-lg mb-6"
            />
            <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">
              Welcome to Exam Travel Buddy
            </h1>
            <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto">
              A platform designed to help students navigate unfamiliar cities
              while traveling for exams. We're here to reduce stress, connect
              students, and make your journey easier!
            </p>
          </div>

          {/* Main About Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Section - Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                Why Exam Travel Buddy?
              </h2>
              <p className="text-lg">
                Every year, students face the challenge of traveling to new
                cities for their exams. Whether it's navigating through unknown
                locations, dealing with travel-related stress, or finding the
                right places to study and eat, traveling alone can be tough.
                <span className="font-bold"> Exam Travel Buddy</span> was
                created to make this experience easier and more manageable by
                connecting students, sharing helpful local recommendations, and
                offering peer support when it's needed most.
              </p>

              {/* <h3 className="text-2xl font-semibold">What We Offer</h3>
              <ul className="list-disc pl-6 text-lg space-y-2">
                <li>
                  <strong>Find Exam Buddies:</strong> Easily connect with fellow
                  students traveling to the same exam city.
                </li>
                <li>
                  <strong>Route Assistance:</strong> Get the best routes,
                  accommodation suggestions, and transport tips.
                </li>
                <li>
                  <strong>Study Groups:</strong> Join or create study groups to
                  collaborate and prep for exams together.
                </li>
                <li>
                  <strong>Local Recommendations:</strong> Discover the best food
                  spots, study cafes, and hidden gems near your exam location.
                </li>
              </ul> */}

              <h3 className="text-2xl font-semibold">Our Vision</h3>
              <p className="text-lg">
                Our vision is simple: to build a supportive community where
                students feel empowered to travel for exams with confidence.
                Whether you need help finding your exam venue, want to join a
                last-minute study session, or simply want someone to talk to,
                <span className="font-bold"> Exam Travel Buddy</span> connects
                you with peers and gives you the resources you need to succeed.
              </p>
            </div>

            {/* Right Section - Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://www.usnews.com/dims4/USNEWS/2743f9c/2147483647/thumbnail/970x647/quality/85/?url=http:%2F%2Fmedia.beam.usnews.com%2F33%2F84%2Ff0f1b63b459bae4645e77424741e%2F140922-travel-stock.jpg"
                alt="Students traveling and studying together"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center my-12">
            <h2 className="text-3xl font-semibold mb-4">
              Join Our Community Today!
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Don’t travel alone! Connect with other students who are also
              preparing for exams and make your journey more enjoyable. Sign up
              now to get started.
            </p>
            <a
              href="/signup"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </Flowbite>
  );
}

export default About;
