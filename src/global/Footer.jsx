import { FooterObj } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center space-y-10 md:space-y-0">
        {/* Subscription Section */}
        <div className="flex flex-col gap-4 w-full md:w-[45%]">
          <h1 className="font-bold text-lg leading-10 tracking-wider">
            Exclusive
          </h1>
          <p className="leading-10 tracking-wider">Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="relative w-full max-w-sm">
            <input
              className="bg-transparent border-2 w-full p-3 font-thin text-sm rounded-md text-gray-300 focus:outline-none"
              placeholder="Enter your email"
            />
            <img
              src="../../send.png"
              className="w-9 h-9 absolute top-1/2 right-4 transform -translate-y-1/2 hover:cursor-pointer p-2"
              alt="send-icon"
              aria-label="send-icon"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 w-full text-center md:text-left">
          {Object.entries(FooterObj).map(([key, values]) => (
            <div key={key} className="w-full">
              <h3 className="font-medium text-lg mb-4">{key}</h3>
              <ul className="space-y-4">
                {values.map((item, index) => (
                  <li
                    key={index}
                    className={`text-gray-300 hover:text-white transition ${
                      item.includes("@") ? "underline" : ""
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
