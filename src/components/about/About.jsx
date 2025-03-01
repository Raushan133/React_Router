import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://www.spec-india.com/wp-content/uploads/2024/08/Main-1-1024x563.jpg"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              React development is driven by a passionate community of
              developers who continuously enhance its capabilities. Created by
              Meta (formerly Facebook), React is a powerful JavaScript library
              used for building dynamic and efficient user interfaces. Its
              component-based architecture allows developers to create reusable
              and maintainable code, while the Virtual DOM ensures high
              performance by updating only the necessary parts of the UI. With
              features like Hooks and state management, React simplifies complex
              functionalities, making development smoother. Additionally, its
              vast ecosystem, including tools like Redux and Next.js, provides
              flexibility for building scalable applications. The strong support
              from the developer community, along with its widespread adoption
              in the industry, makes React a top choice for modern web
              development. 🚀🔥
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
