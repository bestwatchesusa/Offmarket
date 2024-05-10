import React from "react";
import { CloseSVG } from "../../assets/images";
import deal from "../../assets/images/deal.png";
import { Button, Input, Img, Heading, Text } from "./..";
import { Link } from "react-router-dom";
export default function Header({ ...props }) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    
    <header  {...props}>

    
<div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1200px]">
        <div className="flex flex-row justify-start items-start gap-[11px]">
          <Img src={deal} alt="Best Off Market Deal" className="h-[60px] w-[80px]" />
          {/* <Text size="md" as="p" className="mt-[5px] !text-orange-A700 !font-markoone">
            Best Off Market Deal
          </Text> */} 
        </div>
        <div className="flex flex-row sm:flex-col justify-between items-center w-[59%] md:w-full sm:gap-10">
          <div className="flex flex-row w-[94%] sm:w-full gap-10" >
            <div className="flex flex-row justify-start items-start w-[25%] gap-1.5" >
              <Heading as="h6" style={{color:'#fff'}}><Link to={'/'}>HOME</Link></Heading>
              {/* <Img src="images/img_arrow_down.svg" alt="home_two" className="h-[16px] w-[16px] mt-0.5" /> */}
            </div>
            <div className="flex flex-row justify-start  w-[25%] gap-1.5">
              <Heading as="h6" style={{color:'#fff'}}><Link to={'/aboutus'}>ABOUT US</Link></Heading>
              {/* <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[16px] w-[16px]" /> */}
            </div>
            <div className="flex flex-row justify-start items-start w-[25%] gap-1.5">
              <Heading as="h6" style={{color:'#fff'}}><Link to={'/listing'}>DEALS</Link></Heading>
              {/* <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[16px] w-[16px]" /> */}
            </div>
            <div className="flex flex-row justify-start items-start w-[25%] gap-1.5">
              <Heading as="h6" style={{color:'#fff'}}><Link to={'/listingmapview'}>PROPERTIES</Link></Heading>
              {/* <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[16px] w-[16px]" /> */}
            </div>
            <div className="flex flex-row justify-start items-start w-[25%] gap-1.5">
              <Heading as="h6" style={{color:'#fff'}}><Link to={'/contactus'}>CONTACT US</Link></Heading>
              {/* <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[16px] w-[16px]" /> */}
            </div>
          </div>
          {/* <Heading as="h6" className="text-center">
            PROPERTIES
          </Heading>
          <Heading as="h6">CONTACT US</Heading> */}
        </div>
        <div className="flex flex-row justify-start items-center w-[19%] md:w-full gap-2.5">

        {localStorage.getItem('userdetail') ? (
                                        <>
                                                          <Img src="images/user.png" alt="arrowdown_one" className="h-[40px] w-[40px]" />
                                                          <a onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}  alt="arrowdown_one" className="h-[25px] w-[85px]" > <Heading as="h6" style={{color:'#fff'}}>Hi Freeman</Heading>
                                                          </a> 
              <svg
                      className={
                        flyerTwo === true
                          ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                          : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>   

                    
                    
                                        </>
                                    ) : (
                                   <>
                                   <Link to={'signup'}  className="sm:px-5 font-semibold min-w-[94px]" style={{ color:'black'}}>
            SIGN UP
          </Link>
       
          <Button size="lg" shape="round" className="sm:px-5 font-semibold min-w-[94px]" style={{ backgroundColor:'#008080',color:'#ffff'}}>
           <Link to={'/login'}>LOG IN</Link>
          </Button>
                                   </>
                                    )}
  
        {/* <a  className="sm:px-5 font-semibold min-w-[94px]" style={{ color:'black'}}>
            SIGN UP
          </a>
       
          <Button size="lg" shape="round" className="sm:px-5 font-semibold min-w-[94px]" style={{ backgroundColor:'#008080',color:'#ffff'}}>
            LOG IN
          </Button> */}

        
          {/* <Img src="images/user.png" alt="arrowdown_one" className="h-[40px] w-[40px]" />
              <Heading as="h6">Paul Freeman</Heading>
              <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[16px] w-[16px]" /> */}
             <div
                    onMouseLeave={() => setFlyerTwo(false)}
                    className={
                      flyerTwo
                        ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    }
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/support */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Help Center
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Get all of your questions answered in our forums or
                              contact support.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/bookmark-alt */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Guides
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Learn how to maximize our platform to get the most
                              out of it.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/calendar */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Events
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              See what meet-ups and other events we might be
                              planning near you.
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          {/* Heroicon name: outline/shield-check */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Security
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Understand how we take your privacy seriously.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                        <div>
                          <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                            Recent Posts
                          </h3>
                          <ul className="mt-4 space-y-4">
                            <li className="text-base truncate">
                              <a
                                href="#"
                                className="font-medium text-gray-900 hover:text-gray-700"
                              >
                                Boost your conversion rate
                              </a>
                            </li>
                            <li className="text-base truncate">
                              <a
                                href="#"
                                className="font-medium text-gray-900 hover:text-gray-700"
                              >
                                How to use search engine optimization to drive
                                traffic to your site
                              </a>
                            </li>
                            <li className="text-base truncate">
                              <a
                                href="#"
                                className="font-medium text-gray-900 hover:text-gray-700"
                              >
                                Improve your customer experience
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-5 text-sm">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {" "}
                            View all posts <span aria-hidden="true">→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
      </div>
    </header>
  );
}
