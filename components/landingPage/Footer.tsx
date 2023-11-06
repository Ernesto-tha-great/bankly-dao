import { FaTwitter, FaFacebookF, FaMediumM, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-bl from-black  via-blue-950/100 via-5%  to to-black text-white  sm:pt-10 pt-10 mt-auto">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        {/* Footer Links */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Quick Links
          </div>
          <a
            href="/about"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            About Us
          </a>
          <a
            href="/pools"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Investment Pools
          </a>
          <a
            href="/marketplace"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Marketplace
          </a>
          <a
            href="/governance"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Governance
          </a>
        </div>

        {/* Social Links */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Follow Us
          </div>
          <div className="flex items-center justify-start mb-6">
            <a
              href="https://twitter.com/pironfinance"
              className="inline-block text-gray-300 hover:text-gray-100 mr-6"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/pironfinance"
              className="inline-block text-gray-300 hover:text-gray-100 mr-6"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://medium.com/@pironfinance"
              className="inline-block text-gray-300 hover:text-gray-100 mr-6"
              target="_blank"
              rel="noreferrer"
            >
              <FaMediumM />
            </a>
            <a
              href="https://github.com/pironfinance"
              className="inline-block text-gray-300 hover:text-gray-100"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
          <div className="mt-2">
            © {new Date().getFullYear()} Piron Finance. All rights reserved.
          </div>
          {/* Legal Links */}
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a
              href="/privacy"
              className="w-6 mx-3 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="w-24 mx-3 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
