import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInfoCircle } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";


class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="container mx-auto my-10 p-4 sm:p-6 bg-green-100 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 duration-300 ease-in-out font-sans">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 flex items-center justify-center relative">
              {/* <FontAwesomeIcon
                icon={faInfoCircle}
                className="mr-2 text-purple-500 text-4xl sm:text-5xl"
              /> */}
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                About Us
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-20 blur-sm"></span>
            </h1>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Food ordering app
            </h2>
          </div>
          <div className="mb-6">
            <p className="text-base sm:text-lg mb-6 text-gray-700 mx-auto max-w-2xl leading-relaxed">
              This is a modern Front-end Food Ordering Web Application, which
              has been integrated with Swiggy's Live API to provide a seamless
              dining experience. Our platform allows users to explore a wide
              range of restaurants, view detailed menu's, search for top-rated
              restaurants and add items to their cart.
            </p>
          </div>

         
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 relative">
              Connect With Me On
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 opacity-20 blur-sm"></span>
            </h3>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a
                href="https://www.instagram.com/amantiwari1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-3xl sm:text-4xl text-pink-500 hover:text-pink-600 transition-transform transform hover:scale-110"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/aman-tiwari2001/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-3xl sm:text-4xl text-blue-700 hover:text-blue-800 transition-transform transform hover:scale-110"
                />
              </a>
              <a
                href="https://x.com/amantiwari1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-3xl sm:text-4xl text-blue-500 hover:text-blue-600 transition-transform transform hover:scale-110"
                />
              </a>
              <a
                href="https://github.com/AmanTiwari23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-3xl sm:text-4xl text-gray-800 hover:text-gray-900 transition-transform transform hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
