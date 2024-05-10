import React from "react";
import { CloseSVG } from "../../assets/images";
import deal from "../../assets/images/BESTPROPERTIES.png";
import { Button, Input, Img, Heading, Text } from "..";

export default function Header({ ...props }) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    
    <header {...props}>

    
<div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1200px]">
        <div className="flex flex-row justify-start items-start gap-[11px]">
          <Img src={deal} alt="Best Off Market Deal" className="h-[60px] w-[80px]" />
          {/* <Text size="md" as="p" className="mt-[5px] !text-orange-A700 !font-markoone">
            Best Off Market Deal
          </Text> */}
        </div>
        <div className="flex flex-row sm:flex-col justify-between items-center w-[59%] md:w-full sm:gap-10">
          <div className="flex flex-row w-[94%] sm:w-full gap-10" >
           
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
                                                          <a onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))}  alt="arrowdown_one" className="h-[25px] w-[85px]" > <Heading as="h6" >Hi Freeman</Heading>
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
                                   <a  className="sm:px-5 font-semibold min-w-[94px]" style={{ color:'black'}}>
            SIGN UP
          </a>
       
          <Button size="lg" shape="round" className="sm:px-5 font-semibold min-w-[94px]" style={{ backgroundColor:'#008080'}}>
            LOG IN
          </Button>
                                   </>
                                    )}
  
        {/* <a  className="sm:px-5 font-semibold min-w-[94px]" style={{ color:'black'}}>
            SIGN UP
          </a>
       
          <Button size="lg" shape="round" className="sm:px-5 font-semibold min-w-[94px]" style={{ backgroundColor:'#008080',color:'#ffff'}}>
            LOG IN
          </Button> */}

        </div>
      </div>
    </header>
  );
}





// <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
//   <div class="flex items-center flex-shrink-0 text-white mr-6">
//     <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
//     <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
//   </div>
//   <div class="block lg:hidden">
//     <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
//       <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
//     </button>
//   </div>
//   <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
//     <div class="text-sm lg:flex-grow">
//       <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
//         Docs
//       </a>
//       <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
//         Examples
//       </a>
//       <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
//         Blog
//       </a>
//     </div>
//     <div>
//       <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
//     </div>
//   </div>
// </nav>