import React,{ useState, useContext,useEffect } from 'react';
import { Heading, Button, Img } from "./..";
import { Link } from "react-router-dom";

import { successToast, errorToast } from "../../components/Toaster";
import { AuthContext } from '../../context/AuthContext';
export default function LandingPageCard({
  imageOne = "images/img_image_260x384.png",
  p286162ndave = "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom = "3 Bed Room",
  bathcounter = "1 Bath",
  sqftcounter = "1,032 sqft",
  p1bath = "Family",
  viewDetails = "View Details",
  price = "$ 649,900",
  ...props
}) {
  const [payments, setPayment] = useState([]);

  
  const { getProperty } = useContext(AuthContext);
  useEffect(() => {
    const fetchRequests = async () => {
      const data = await getProperty();
      setPayment(data);
      console.log("goal",data)
    };
   
    fetchRequests();

  
  }, [])

  return (
    <div {...props}>
      {
                payments.map((datas, i) => {
                  console.log(datas.Price,"Goal")
                  return (

                    <Link to={'/propertydetails'} key={i}>
                    <Img
                      src={imageOne}
                      alt="image_one"
                      className="w-full md:h-auto sm:w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
                    />
                    <div className="flex flex-row justify-center w-full p-[19px] rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-gray-50_01">
                      <div className="flex flex-col items-center justify-start w-full gap-[25px] my-2.5 md:px-5 max-w-[344px]">
                        <div className="flex flex-row justify-start items-center w-full gap-3 ">
                          <div className="absolute">
                          {/* <Img src="images/img_icon_map_2.svg" alt="image_two" className="h-[24px] w-[24px] " /> */}
                          <Button
                                    color="white_A700"
                                    size="lg"
                                    shape="round"
                                 
                                    className="gap-1.5 -top-[95px] left-[5px] m-auto text-gray-900 font-bold min-w-[122px] absolute"
                                  >
                                     {/* {price} */}
                                     {datas.Price}
                                  </Button>
                                  <Button
                                    color="white_A700"
                                    size="lg"
                                    shape="round"
                                    leftIcon={<Img src="images/icons8-power-50.png" alt="icon - image" style={{width:18}}/>}
                                    className="gap-1.5 -top-[260px] left-[5px] m-auto text-gray-900 font-bold min-w-[122px] absolute"
                                  style={{background:'#008080',color:'#fff',fontSize:'12px'}}
                                  >
                                    FEATURED
                                  </Button>
                          </div>
                         
                          <Heading as="h1">
                            {/* {p286162ndave} */}
                            {datas.Title}
                          </Heading>
                      
                        </div>
                        <div className="flex flex-col items-center justify-start w-full gap-[19px]">
                          <div className="flex flex-row justify-between w-full">
                            <div className="flex flex-row justify-start items-center gap-3">
                              {/* <Img src="images/img_icon_gray_700.svg" alt="3_bed_room_one" className="h-[20px] w-[20px]" /> */}
                              <Heading as="h2" className="!text-gray-700">
                              37 Elm Drive, Nashville, TN 
                              </Heading>
                            </div>
                            <div className="flex flex-row justify-start items-center gap-3">
                              <Img src="images/icons8-share-64.png" alt="1_bath_one" className="h-[20px] w-[20px]" />
                              <Img src="images/icons8-heart-50.png" alt="1_bath_one" className="h-[20px] w-[20px]" />
                            </div>
                          </div>
                          {/* <div className="flex flex-row justify-between w-full">
                            <div className="flex flex-row justify-start items-center gap-3">
                              <Img src="images/img_icon_20x20.svg" alt="1032_sqft_one" className="h-[20px] w-[20px]" />
                              <Heading as="h4" className="!text-gray-700">
                                {sqftcounter}
                              </Heading>
                            </div>
                            <div className="flex flex-row justify-start items-center gap-3">
                              <Img src="images/img_iocn_menu.svg" alt="family_one" className="h-[20px] w-[20px]" />
                              <Heading as="h5" className="!text-gray-700">
                                {p1bath}
                              </Heading>
                            </div>
                          </div> */}
                        </div>
              
                        <div className="flex flex-row justify-between items-center w-full pr-[47px] md:pr-5">
                        <div className="flex flex-row md:flex-col justify-start w-full gap-2.5 md:gap-5">
                                <Button
                                  color="blue_gray_100"
                                  size="md"
                                  variant="outline"
                                  shape="round"
                                  leftIcon={<Img src="images/img_icon_gray_700.svg" alt="icon / 16px / close" />}
                                  className="gap-2 font-semibold min-w-[140px] w-[12px]"
                                >
                                  {datas.Bedrooms }-Bedrooms 
                                </Button>
                                <Button
                                  color="blue_gray_100"
                                  size="md"
                                  variant="outline"
                                  shape="round"
                                  leftIcon={<Img src="images/img_icon_gray_700_20x20.svg" alt="icon / 16px / close" />}
                                  className="gap-2 font-semibold min-w-[145px] "
                                  style={{width:'12px'}}
                                >
                                  {datas.Bathrooms }-Bathrooms
                                </Button>
                              
                               
                              </div>
                             
                          {/* <Button className="h-[48px] px-[31px] sm:px-5 text-white-A700 text-base font-semibold bg-gray-900 min-w-[156px] rounded-[10px]">
                            {viewDetails}
                          </Button>
                          <Heading size="2xl" as="h6" className="tracking-[-0.48px]">
                            {price}
                          </Heading> */}
                        </div>
                        
                        <div className="flex flex-row justify-between items-center w-full pr-[47px] md:pr-5">
                        <div className="flex flex-row md:flex-col justify-start w-full gap-2.5 md:gap-5">
                                <Button
                                  color="blue_gray_100"
                                  size="md"
                                  variant="outline"
                                  shape="round"
                                  leftIcon={<Img src="images/img_icon_gray_700.svg" alt="icon / 16px / close" />}
                                  className="gap-2 font-semibold min-w-[140px] w-[12px]"
                                >
                                  2-Bedrooms 
                                </Button>
                                <Button
                                  color="blue_gray_100"
                                  size="md"
                                  variant="outline"
                                  shape="round"
                                  leftIcon={<Img src="images/img_icon_gray_700_20x20.svg" alt="icon / 16px / close" />}
                                  className="gap-2 font-semibold min-w-[145px] "
                                  style={{width:'12px'}}
                                >
                                  3-Bathrooms
                                </Button>
                              
                               
                              </div>
                             
                          {/* <Button className="h-[48px] px-[31px] sm:px-5 text-white-A700 text-base font-semibold bg-gray-900 min-w-[156px] rounded-[10px]">
                            {viewDetails}
                          </Button>
                          <Heading size="2xl" as="h6" className="tracking-[-0.48px]">
                            {price}
                          </Heading> */}
                        </div>
                      </div>
                    </div>
                    </Link>
                  )
                })
              }
     
    </div>
  );
}
 