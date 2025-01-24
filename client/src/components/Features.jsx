// import {

//   UserGroupIcon,
//   ShieldCheckIcon,
//   MapPinIcon,
//   LifebuoyIcon,
// } from "@heroicons/react/24/outline";

// import { Component } from "./Navbar";

// const features = [
//   {
//     name: "Find Travel Buddies",
//     description:
//       "Easily connect with other students traveling for the same exam. Find travel companions and reduce travel stress.",
//     icon: UserGroupIcon,
//   },
//   {
//     name: "Secure Connections",
//     description:
//       "Your safety is our priority. Secure, verified profiles ensure that you can trust the students you connect with.",
//     icon: ShieldCheckIcon,
//   },
//   {
//     name: "Easy Coordination",
//     description:
//       "Coordinate travel details like departure times, routes, and accommodations in one simple platform.",
//     icon: MapPinIcon,
//   },
//   {
//     name: "24/7 Support",
//     description:
//       "Our platform provides around-the-clock support to help you with travel arrangements and unexpected challenges.",
//     icon: LifebuoyIcon,
//   },
// ];
// //---------------------------------

// export default function Example() {
//   return (
//     <div className="bg-gradient-to-t from-[#ffffff] to-[#9089fc] opacity-90 ">
//       <Component />
//       <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <h2 className="text-base/7 font-semibold text-indigo-600">
//             Travel with Confidence
//           </h2>
//           <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
//             We will Make Your Exam Travel Stress-Free
//           </p>
//           <p className="mt-6 text-lg/8 text-gray-600">
//             Traveling to a new city for exams? Exam Buddy connects you with
//             fellow students, provides local recommendations, and ensures your
//             journey is stress-free. Connect with peers, find travel companions,
//             and travel with peace of mind knowing you're supported at every
//             step.
//           </p>
//         </div>
//         <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
//           <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 pb-20">
//             {features.map((feature) => (
//               <div key={feature.name} className="relative pl-16">
//                 <dt className="text-base/7 font-semibold text-gray-900">
//                   <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
//                     <feature.icon
//                       aria-hidden="true"
//                       className="size-6 text-white"
//                     />
//                   </div>
//                   {feature.name}
//                 </dt>
//                 <dd className="mt-2 text-base/7 text-gray-600">
//                   {feature.description}
//                 </dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </div>
//   );
// }


// /*
// export default function FeaturesSection() {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <h2 className="text-base/7 font-semibold text-indigo-600">
//             Travel with Confidence
//           </h2>
//           <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
//             Features to Make Your Exam Travel Stress-Free
//           </p>
//           <p className="mt-6 text-lg/8 text-gray-600">
//             Connect with peers, find travel companions, and travel with peace of
//             mind knowing you're supported at every step.
//           </p>
//         </div>
//         <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
//           <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
//             {features.map((feature) => (
//               <div key={feature.name} className="relative pl-16">
//                 <dt className="text-base/7 font-semibold text-gray-900">
//                   <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
//                     <feature.icon
//                       aria-hidden="true"
//                       className="size-6 text-white"
//                     />
//                   </div>
//                   {feature.name}
//                 </dt>
//                 <dd className="mt-2 text-base/7 text-gray-600">
//                   {feature.description}
//                 </dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </div>
//   );
// }
// */

import {
  UserGroupIcon,
  ShieldCheckIcon,
  MapPinIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

import { Component } from "./Navbar";

const features = [
  {
    name: "Find Travel Buddies",
    description:
      "Easily connect with other students traveling for the same exam. Find travel companions and reduce travel stress.",
    icon: UserGroupIcon,
  },
  {
    name: "Local Recommendations",
    description:
      "Find the best restaurants, study cafes, and tips for the city. Get recommendations from students who know the area.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Navigate Your Journey",
    description:
      "Get directions to exam centers, transportation, and accommodations. Coordinate travel details like departure times, routes, and accommodations in one simple platform.",
    icon: MapPinIcon,
  },
  {
    name: "24/7 Support",
    description:
      "Join study groups and share resources. Our platform provides around-the-clock support to help you with travel arrangements and unexpected challenges.",
    icon: LifebuoyIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-gradient-to-t from-[#ffffff] to-[#9089fc] opacity-90 dark:bg-gradient-to-t dark:from-[#1e293b] dark:to-[#4b5563] dark:opacity-90">
      <Component />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
            Travel with Confidence
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-balance">
            We will Make Your Exam Travel Stress-Free
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            Traveling to a new city for exams? Exam Buddy connects you with
            fellow students, provides local recommendations, and ensures your
            journey is stress-free. Connect with peers, find travel companions,
            and travel with peace of mind knowing you're supported at every
            step.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 pb-20">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white dark:text-gray-900"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
