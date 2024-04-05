import { features } from "process";
import { BiCheck } from "react-icons/bi";

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];


const Pricing = () => {
  return (
    <div data-aos="fade-up" className="mt-2">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Pricing</h2>
      <div data-aos="zoom-in-up" className="flex flex-wrap px-12">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">{option.title}
                {option.title === 'Pro' && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400
                text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>
                )}</p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>{option.features.map((feature, index) => (
                <li key={index} className="mt-8 flex items-center">
                  <BiCheck />
                  <span className="ml-2">{feature}</span>
                </li>
              ))}</ul>

              <button className="inline-flex justify-center items-center text-center w-full
        h-12 p-4 mt-20 tracking-tight text-xl hover:bg-orange-900
        border border-orange-900 rounded-lg transition duration-200">
                Subscribe
              </button>

            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Pricing