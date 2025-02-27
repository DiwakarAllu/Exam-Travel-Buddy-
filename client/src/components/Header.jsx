import React from "react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {

      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const [loginOpen, setLoginOpen] = useState(false);
      const [isSignUp, setIsSignUp] = useState(false);

      const navigation = [
        { name: "Home", href: "/" },
        { name: "Features", href: "/features" },
        { name: "Contact", href: "/contact" },
      ];

      const handleLoginClick = () => {
        setLoginOpen(true);
        setMobileMenuOpen(false);
      };

      const handleCloseLogin = () => {
        setLoginOpen(false);
        setIsSignUp(false);
      };

      const toggleForm = () => {
        setIsSignUp((prevState) => !prevState);
      };
  {
    /* Login/Signup Form Modal */
  }
  {
    loginOpen && (
      <Dialog open={loginOpen} onClose={handleCloseLogin}>
        <DialogPanel className="fixed inset-0 flex items-center justify-center z-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-gradient-to-tr from-[#f7f6f6] to-[#9089fc] opacity-100 sm:right-[calc(50%+36rem)] sm:w-[72.1875rem]">
          <div className="w-full max-w-md space-y-4">
            <h2 className="text-xl font-semibold">
              {isSignUp ? "Sign Up" : "Login"}
            </h2>
            <form>
              <div>
                <label htmlFor="username" className="block text-sm font-medium">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              {isSignUp && (
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm font-medium"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              )}
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full py-2 bg-indigo-600 text-white rounded-md"
                >
                  {isSignUp ? "Sign Up" : "Log In"}
                </button>
              </div>
              <div className="mt-2 text-center">
                <button
                  type="button"
                  onClick={toggleForm}
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  {isSignUp
                    ? "Already have an account? Log in"
                    : "Don't have an account? Sign up"}
                </button>
              </div>
              <button
                type="button"
                onClick={handleCloseLogin}
                className="mt-2 w-full text-center text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </form>
          </div>
        </DialogPanel>
      </Dialog>
    );
  }
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Exam Travel Buddy</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
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
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Exam Travel Buddy</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <button
                  onClick={handleLoginClick}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
