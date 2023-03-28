import {
  faBehance,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = ({
  className = `bg-[url('/images/footer-bg.png')]`,
  linkClassName = "after:bg-[#00FFFF] text-[#dbe3e3]",
  socialItemClassName = "text-[#dbe3e3] border-[#1fe482] hover:text-[#1fe482]",
  coppyRightClassName = "text-[#fff]",
}) => {
  return (
    <footer className={`p-[70px] relative bg-cover ${className}`}>
      <div className="container mx-auto px-[15px]">
        <div className="row text-center">
          <div className="col-md-8 col-md-offset-2 col-xs-12">
            <div className="sub_title">
              <a href="#">
                <span
                  className={`relative font-[400] uppercase text-[14px] mx-[10px] after:absolute after:content-[''] after:top-[10px] after:bottom-0 after:right-[-12px] after:w-[4px] after:h-[4px] after:rounded-full ${linkClassName}`}
                >
                  Home
                </span>
              </a>
              <a href="#">
                <span
                  className={`relative font-[400] uppercase text-[14px] mx-[10px] after:absolute after:content-[''] after:top-[10px] after:bottom-0 after:right-[-12px] after:w-[4px] after:h-[4px] after:rounded-full ${linkClassName}`}
                >
                  About Us
                </span>
              </a>
              <a href="#">
                <span
                  className={`relative font-[400] uppercase text-[14px] mx-[10px] after:absolute after:content-[''] after:top-[10px] after:bottom-0 after:right-[-12px] after:w-[4px] after:h-[4px] after:rounded-full ${linkClassName}`}
                >
                  Technology
                </span>
              </a>
              <a href="#">
                <span
                  className={`relative font-[400] uppercase text-[14px] mx-[10px] after:absolute after:content-[''] after:top-[10px] after:bottom-0 after:right-[-12px] after:w-[4px] after:h-[4px] after:rounded-full ${linkClassName}`}
                >
                  Products
                </span>
              </a>
              <a href="#">
                <span
                  className={`relative font-[400] uppercase text-[14px] mx-[10px] after:absolute after:content-[''] after:top-[10px] after:bottom-0 after:right-[-12px] after:w-[4px] after:h-[4px] after:rounded-full ${linkClassName}`}
                >
                  Services
                </span>
              </a>
            </div>
            <ul className="my-[35px] list-none">
              <li className="inline-block mx-[5px] ">
                <a
                  href="#00"
                  className={`relative block w-[45px] h-[45px] text-[22px] leading-[45px] rounded-full border-[1px] border-solid no-underline duration-[0.3s] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#fff] before:rounded-full before:scale-0 before:duration-[0.3s] before:z-[-1] hover:before:scale-100 z-0 ${socialItemClassName}`}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className="inline-block mx-[5px] ">
                <a
                  href="#00"
                  className={`relative block w-[45px] h-[45px] text-[22px] leading-[45px] rounded-full border-[1px] border-solid no-underline duration-[0.3s] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#fff] before:rounded-full before:scale-0 before:duration-[0.3s] before:z-[-1] hover:before:scale-100 z-0 ${socialItemClassName}`}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="inline-block mx-[5px] ">
                <a
                  href="#00"
                  className={`relative block w-[45px] h-[45px] text-[22px] leading-[45px] rounded-full border-[1px] border-solid no-underline duration-[0.3s] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#fff] before:rounded-full before:scale-0 before:duration-[0.3s] before:z-[-1] hover:before:scale-100 z-0 ${socialItemClassName}`}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li className="inline-block mx-[5px] ">
                <a
                  href="#00"
                  className={`relative block w-[45px] h-[45px] text-[22px] leading-[45px] rounded-full border-[1px] border-solid no-underline duration-[0.3s] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#fff] before:rounded-full before:scale-0 before:duration-[0.3s] before:z-[-1] hover:before:scale-100 z-0 ${socialItemClassName}`}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="inline-block mx-[5px] ">
                <a
                  href="#00"
                  className={`relative block w-[45px] h-[45px] text-[22px] leading-[45px] rounded-full border-[1px] border-solid no-underline duration-[0.3s] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#fff] before:rounded-full before:scale-0 before:duration-[0.3s] before:z-[-1] hover:before:scale-100 z-0 ${socialItemClassName}`}
                >
                  <FontAwesomeIcon icon={faBehance} />
                </a>
              </li>
            </ul>
            <p className={`${coppyRightClassName}`}>
              CopyRight © 2023 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
