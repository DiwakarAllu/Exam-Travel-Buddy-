"use client";
import { useState } from "react";
import { Component } from "./Navbar";
import { DarkThemeToggle, Flowbite } from "flowbite-react";


const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="absolute inset-x-0 top-0 z-50">
        {/* <nav
          aria-label="Global"
          className="flex items-left justify-between p-3 lg:px-3 bg-slate-400 shadow-lg"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Exam Travel Buddy</span>
              <img
                alt=""
                src="https://media-hosting.imagekit.io//45273a5055ec4f7e/logo-1.png?Expires=1832225461&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Q9YcL7e19TLdmnCrg8XimHFfHKO45LGxxUUSLuVcwsjPkMYpFXm-67hBh5r0jjUCwKHVRwGA1N7Q7Q3GwrHEajt0D-5KC0hRIUClW1JmyZHaRH~bviMtF4JzTtf51t2kQxh2irsokVWMJTf8EQoCccm3jjdsA34pPIOdW5I7Nwdyb4wDaP3fAoJOhTjMevK0Qy0-iAMMQuq1a-ZSHZp-6wm4DTLkvstyg-khL8hAhk9c7gEzRgE0QklYBGX8BgMcv7~gAPDSaHXR0HfXMt~bxmnfJ5IRJrDJbiC7gZ8xB9dVg-qV9N2zadjxKjIzzlT4EeE3d1bOwdSomljYjVss4w__"
                className="h-10 w-auto rounded-[50%]"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={handleLoginClick}
              className="text-sm/6 font-semibold text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </nav> */}

        <Component />
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 dark:text-gray-400 ring-1 ring-gray-900/10 hover:ring-gray-900/20 ">
              A Peer Support Platform for Students Traveling for Exams.{" "}
              <a
                href="/about"
                className="font-semibold text-indigo-600 dark:text-indigo-400"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
              Welcome to Exam Travel Buddy
            </h1>
            <p className="mt-6 text-lg font-mono text-gray-500 dark:text-gray-300 sm:text-xl">
              Connect with fellow students, navigate new cities, and excel in
              your exams with peer support
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="/about"
                className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] "
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />

        </div> */}
        
      </div>
    </div>
  );
}
