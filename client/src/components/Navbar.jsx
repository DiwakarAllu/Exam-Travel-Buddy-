// import { Navbar } from "flowbite-react";
// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { Dialog, DialogPanel } from "@headlessui/react";

// export function Component() {
//   const [loginOpen, setLoginOpen] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const location = useLocation(); 

//   const handleLoginClick = () => {
//     setLoginOpen(true);
//     setMobileMenuOpen(false);
//   };

//   const handleCloseLogin = () => {
//     setLoginOpen(false);
//     setIsSignUp(false);
//   };

//   const toggleForm = () => {
//     setIsSignUp((prevState) => !prevState);
//   };

//   return (
//     <div>
//       {loginOpen && (
//         <Dialog open={loginOpen} onClose={handleCloseLogin}>
//           <DialogPanel className="fixed inset-0 flex items-center justify-center z-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-gradient-to-tr from-[#f7f6f6] to-[#9089fc] opacity-100 sm:right-[calc(50%+36rem)] sm:w-[72.1875rem]">
//             <div className="w-full max-w-md space-y-4">
//               <h2 className="text-xl font-semibold">
//                 {isSignUp ? "Sign Up" : "Login"}
//               </h2>
//               <form>
//                 <div>
//                   <label
//                     htmlFor="username"
//                     className="block text-sm font-medium"
//                   >
//                     Username
//                   </label>
//                   <input
//                     id="username"
//                     name="username"
//                     type="text"
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium"
//                   >
//                     Password
//                   </label>
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//                   />
//                 </div>
//                 {isSignUp && (
//                   <div>
//                     <label
//                       htmlFor="confirm-password"
//                       className="block text-sm font-medium"
//                     >
//                       Confirm Password
//                     </label>
//                     <input
//                       id="confirm-password"
//                       name="confirm-password"
//                       type="password"
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
//                     />
//                   </div>
//                 )}
//                 <div className="mt-4">
//                   <button
//                     type="submit"
//                     className="w-full py-2 bg-indigo-600 text-white rounded-md"
//                   >
//                     {isSignUp ? "Sign Up" : "Log In"}
//                   </button>
//                 </div>
//                 <div className="mt-2 text-center">
//                   <button
//                     type="button"
//                     onClick={toggleForm}
//                     className="text-indigo-600 hover:text-indigo-700"
//                   >
//                     {isSignUp
//                       ? "Already have an account? Log in"
//                       : "Don't have an account? Sign up"}
//                   </button>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={handleCloseLogin}
//                   className="mt-2 w-full text-center text-gray-500 hover:text-gray-700"
//                 >
//                   Close
//                 </button>
//               </form>
//             </div>
//           </DialogPanel>
//         </Dialog>
//       )}

//       <Navbar fluid rounded className="bg-slate-400 shadow-lg h-15">
//         <Navbar.Brand as={Link} to="/">
//           <img
//             src="https://media-hosting.imagekit.io//45273a5055ec4f7e/logo-1.png?Expires=1832225461&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Q9YcL7e19TLdmnCrg8XimHFfHKO45LGxxUUSLuVcwsjPkMYpFXm-67hBh5r0jjUCwKHVRwGA1N7Q7Q3GwrHEajt0D-5KC0hRIUClW1JmyZHaRH~bviMtF4JzTtf51t2kQxh2irsokVWMJTf8EQoCccm3jjdsA34pPIOdW5I7Nwdyb4wDaP3fAoJOhTjMevK0Qy0-iAMMQuq1a-ZSHZp-6wm4DTLkvstyg-khL8hAhk9c7gEzRgE0QklYBGX8BgMcv7~gAPDSaHXR0HfXMt~bxmnfJ5IRJrDJbiC7gZ8xB9dVg-qV9N2zadjxKjIzzlT4EeE3d1bOwdSomljYjVss4w__"
//             className="mr-3 h-6 sm:h-9 rounded-[50%]"
//             alt="Logo"
//           />
//           <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
//             Exam Travel Buddy
//           </span>
//         </Navbar.Brand>

//         <Navbar.Toggle />

//         <Navbar.Collapse>
//           <Navbar.Link
//             as={Link}
//             to="/"
//             className={location.pathname === "/" ? "text-indigo-600" : ""}
//           >
//             Home
//           </Navbar.Link>
//           <Navbar.Link
//             as={Link}
//             to="/features"
//             className={
//               location.pathname === "/features" ? "text-indigo-600" : ""
//             }
//           >
//             Features
//           </Navbar.Link>
//           <Navbar.Link
//             href="/contact"
//             className={
//               location.pathname === "/contact" ? "text-indigo-600" : ""
//             }
//           >
//             Contact
//           </Navbar.Link>
//           <Navbar.Link>
//             <button
//               onClick={handleLoginClick}
//               className="text-sm/6 font-semibold text-gray-900"
//             >
//               Log in <span aria-hidden="true">&rarr;</span>
//             </button>
//           </Navbar.Link>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// }

// {
//   /* <Dialog
//           open={mobileMenuOpen}
//           onClose={setMobileMenuOpen}
//           className="lg:hidden"
//         >
//           <div className="fixed inset-0 z-50" />
//           <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//             <div className="flex items-center justify-between">
//               <a href="#" className="-m-1.5 p-1.5">
//                 <span className="sr-only">Exam Travel Buddy</span>
//                 <img
//                   alt=""
//                   src="https://media-hosting.imagekit.io//45273a5055ec4f7e/logo-1.png?Expires=1832225461&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Q9YcL7e19TLdmnCrg8XimHFfHKO45LGxxUUSLuVcwsjPkMYpFXm-67hBh5r0jjUCwKHVRwGA1N7Q7Q3GwrHEajt0D-5KC0hRIUClW1JmyZHaRH~bviMtF4JzTtf51t2kQxh2irsokVWMJTf8EQoCccm3jjdsA34pPIOdW5I7Nwdyb4wDaP3fAoJOhTjMevK0Qy0-iAMMQuq1a-ZSHZp-6wm4DTLkvstyg-khL8hAhk9c7gEzRgE0QklYBGX8BgMcv7~gAPDSaHXR0HfXMt~bxmnfJ5IRJrDJbiC7gZ8xB9dVg-qV9N2zadjxKjIzzlT4EeE3d1bOwdSomljYjVss4w__"
//                   className="h-8 w-auto"
//                 />
//               </a>
//               <button
//                 type="button"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon aria-hidden="true" className="size-6" />
//               </button>
//             </div>
//             <div className="mt-6 flow-root">
//               <div className="-my-6 divide-y divide-gray-500/10">
//                 <div className="space-y-2 py-6">
//                   {navigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//                 <div className="py-6">
//                   <button
//                     onClick={handleLoginClick}
//                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                   >
//                     Log in
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </DialogPanel>
//         </Dialog> */
// }

import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { DarkThemeToggle } from "flowbite-react";

export function Component() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const handleLoginClick = () => {
    setLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setLoginOpen(false);
    setIsSignUp(false);
  };

  const toggleForm = () => {
    setIsSignUp((prevState) => !prevState);
  };

  // Check the stored theme preference on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  // Save the theme preference in localStorage
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      {loginOpen && (
        <Dialog open={loginOpen} onClose={handleCloseLogin}>
          <DialogPanel className="fixed inset-0 flex items-center justify-center z-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-gradient-to-tr from-[#f7f6f6] to-[#9089fc] opacity-100 sm:right-[calc(50%+36rem)] sm:w-[72.1875rem]">
            <div className="w-full max-w-md space-y-4">
              <h2 className="text-xl font-semibold">
                {isSignUp ? "Sign Up" : "Login"}
              </h2>
              <form>
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium"
                  >
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
      )}

      <Navbar fluid rounded className="bg-slate-400 shadow-lg h-15">
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://media-hosting.imagekit.io//45273a5055ec4f7e/logo-1.png?Expires=1832225461&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Q9YcL7e19TLdmnCrg8XimHFfHKO45LGxxUUSLuVcwsjPkMYpFXm-67hBh5r0jjUCwKHVRwGA1N7Q7Q3GwrHEajt0D-5KC0hRIUClW1JmyZHaRH~bviMtF4JzTtf51t2kQxh2irsokVWMJTf8EQoCccm3jjdsA34pPIOdW5I7Nwdyb4wDaP3fAoJOhTjMevK0Qy0-iAMMQuq1a-ZSHZp-6wm4DTLkvstyg-khL8hAhk9c7gEzRgE0QklYBGX8BgMcv7~gAPDSaHXR0HfXMt~bxmnfJ5IRJrDJbiC7gZ8xB9dVg-qV9N2zadjxKjIzzlT4EeE3d1bOwdSomljYjVss4w__"
            className="mr-3 h-6 sm:h-9 rounded-[50%]"
            alt="Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
            Exam Travel Buddy
          </span>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Navbar.Link
            as={Link}
            to="/"
            className={location.pathname === "/" ? "text-indigo-600" : ""}
          >
            Home
          </Navbar.Link>
          
          <Navbar.Link
            as={Link}
            to="/features"
            className={
              location.pathname === "/features" ? "text-indigo-600" : ""
            }
          >
            Features
          </Navbar.Link>
{/*           
          <Navbar.Link
            href="/contact"
            className={
              location.pathname === "/contact" ? "text-indigo-600" : ""
            }
          >
            Contact
          </Navbar.Link> */}
           <Navbar.Link
            as={Link}
            to="/contact"
            className={
              location.pathname === "/contact" ? "text-indigo-600" : ""
            }
          >
            Contact
          </Navbar.Link>
          
          
          <Navbar.Link>
            <button
              onClick={handleLoginClick}
              className="text-sm/6 font-semibold text-gray-900 dark:text-slate-300"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </button>
          </Navbar.Link>

          {/* Dark Mode Toggle */}
          <Navbar.Link>
            <DarkThemeToggle />
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
