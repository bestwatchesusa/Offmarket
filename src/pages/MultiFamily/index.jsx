import React,{ useState, useContext,useEffect } from 'react';
import { Modal } from 'antd';


import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, GoogleMap, SelectBox, Input, Heading,Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LandingPageCard from "../../components/LandingPageCard";
import BgHome from "../../assets/images/blueribbon.png";
import BgSky from "../../assets/images/Mask.png";
import { AuthContext } from '../../context/AuthContext';

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ListingMapViewPage() {
  const [searchBarValue9, setSearchBarValue9] = React.useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [payments, setPayment] = useState([]);

  
  const { getMultifamily } = useContext(AuthContext);
  useEffect(() => {
    const fetchRequests = async () => {
      const data = await getMultifamily();
      setPayment(data);
      console.log("goal",data)
    };
   
    fetchRequests();

  
  }, [])
  return (
    <>
      <Helmet>
        <title>Paul's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]" style={{  background:  `url(images/pexels-harrisonhaines-3082638.jpg)` ,backgroundSize: 'cover',
 backgroundRepeat: 'no-repeat', height: '100vh',
  width: '100%',}}>
          <Header className="flex justify-center items-center w-full md:h-auto  " />
          <Text size="md" as="p" style={{textAlign:'center', color:'#ffff'}}>
                    Our Multi-Family Properties
                  </Text>
          <div className="flex flex-col items-center justify-start w-[50%] md:w-full gap-10 " style={{margin:'auto', marginTop:'-30px'}}>
          
                <div className="flex flex-col items-center justify-start w-full gap-[15px] ">
                
                  <Heading size="6xl" as="h1" className="tracking-[-0.92px]" style={{textAlign:'center', color:'#fff'}}>
                    <>
                    Lets Secure that <br/>
amazing property 
                    </>
                  </Heading>
                  <Text size="md" as="p" style={{textAlign:'center', color:'#ffff'}}>
                    We Provide a complete service for the sales of off up properties <br /> for your own comfort.
                  </Text>
                </div>
                </div>
        </div>


          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[60px] md:px-5 max-w-[1200px]">
              {/* <GoogleMap showMarker={false} className="h-[428px] w-full" /> */}
              <div className="flex flex-col items-center justify-start w-full">
                <div className="justify-center w-full gap-6 grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                {
                payments.map((datas, i) => {
                  console.log(datas.Price,"Goal")
                  return (

                    <Link to={`/propertydetails/${datas.id}`} key={i}>
                    <Img
                      src='images/img_image_5.png'
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
                                 
                                    className="gap-1.5 -top-[130px] left-[5px] m-auto text-gray-900 font-bold min-w-[122px] absolute"
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
                                  size="sm"
                                  variant="outline"
                                  shape="round"
                                  leftIcon={<Img src="images/img_icon_gray_700.svg" alt="icon / 16px / close" />}
                                  className="gap-2 font-semibold min-w-[90px] w-[12px]"
                                  style={{width:5, fontSize:10}}
                                >
                                  {datas.Bedrooms }-Bedrooms 
                                </Button>
                                <Button
                                  color="blue_gray_100"
                                  size="sm"
                                  variant="outline"
                                  shape="round"
                                  leftIcon={<Img src="images/img_icon_gray_700_20x20.svg" alt="icon / 16px / close" />}
                                  className="gap-2 font-semibold min-w-[100px] w-[12px]"
                                  style={{width:5, fontSize:10}}
                                >
                                  {datas.Bathrooms }-Bathrooms
                                </Button>
                              
                                <Button
                                  color="blue_gray_100"
                                  size="sm"
                                  variant="outline"
                                  shape="round"
                                  leftIcon={<Img src="images/img_icon_gray_700.svg" alt="icon / 16px / close" />}
                                  className="gap-2 font-semibold min-w-[70px] w-[12px]"
                                  style={{width:5, fontSize:10}}
                                >
                                  {datas.Bedrooms }-Sqr. 
                                </Button>
                                <Button
                                  color="blue_gray_100"
                                  size="sm"
                                  variant="outline"
                                  shape="round"
                                  leftIcon={<Img src="images/img_icon_gray_700_20x20.svg" alt="icon / 16px / close" />}
                                  className="gap-2 font-semibold min-w-[65px] w-[12px]"
                                  style={{width:5, fontSize:10}}
                                >
                                  {datas.Bathrooms }-Suite
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
               
                  {/* <LandingPageCard className="flex flex-col items-center justify-start w-full" />
                  <LandingPageCard
                    imageOne="images/img_image_1.png"
                    className="flex flex-col items-center justify-start w-full"
                  />
                  <LandingPageCard
                    imageOne="images/img_image_1.png"
                    className="flex flex-col items-center justify-start w-full"
                  />
                  <LandingPageCard
                    imageOne="images/img_image_3.png"
                    className="flex flex-col items-center justify-start w-full"
                  />
                  <LandingPageCard
                    imageOne="images/img_image_4.png"
                    className="flex flex-col items-center justify-start w-full"
                  />
                  <LandingPageCard
                    imageOne="images/img_image_4.png"
                    className="flex flex-col items-center justify-start w-full"
                  />
                  <LandingPageCard
                    imageOne="images/img_image_5.png"
                    className="flex flex-col items-center justify-start w-full"
                  />
                  <LandingPageCard
                    imageOne="images/img_image_2.png"
                    className="flex flex-col items-center justify-start w-full"
                  />
                  <LandingPageCard
                    imageOne="images/img_image_2.png"
                    className="flex flex-col items-center justify-start w-full"
                  /> */}
                </div>
              </div>
              <div className="flex flex-row sm:flex-col justify-between w-full sm:gap-10">
                <div className="flex flex-row justify-start gap-[5px]">
                  <Button color="gray_700" variant="outline" shape="round" className="font-semibold min-w-[48px]">
                    
                    <span style={{color:'#0008'}}>01</span>/<span>10</span>
                  </Button>
                 
                </div>
                <div className="flex flex-row justify-left gap-[5px]">
                  
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    shape="round"
                    className="font-semibold min-w-[48px]"
                  >
                     {'<'}
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    shape="round"
                    className="font-semibold min-w-[48px]"
                  >
                    {'>'}
                  </Button>
                </div>
                {/* <Button
                  color="blue_gray_100_02"
                  variant="outline"
                  shape="round"
                  rightIcon={<Img src="images/img_icon_16px_arrow_right.svg" alt="icon / 16px / arrow - right" />}
                  className="gap-1 font-semibold min-w-[134px]"
                >
                  Next Page
                </Button>
                <Button
                  color="blue_gray_100_02"
                  variant="outline"
                  shape="round"
                  rightIcon={<Img src="images/img_icon_16px_arrow_right.svg" alt="icon / 16px / arrow - right" />}
                  className=" font-semibold min-w-[134px]"
                >
                  Next Page
                </Button> */}
              </div>
            </div>
          </div>

          
          <div className="flex flex-col items-center justify-center w-full px-14 py-[70px] md:p-5 ">
          <div className="flex flex-col items-center justify-start w-full gap-[150px] max-w-[1200px]">
           
           

<div className="flex flex-col items-start justify-center w-[49%] md:h-auto gap-[49px] p-[50px] md:p-5  rounded-[20px]" style={{  background:  `url(${BgSky})` , backgroundSize: 'cover',
 backgroundRepeat: 'no-repeat', height: '70vh',
  width: '100%'
 }}>
              <div className="flex flex-col items-center justify-start mt-[23px] gap-[15px]">
                <Heading size="4xl" as="h6" className="tracking-[-0.72px]"style={{color:'black', marginRight:'90px'}}>
                Let us help you find <br/> your dream home
                </Heading>
                <Text as="p" className="!text-gray-900" style={{color:'#008080', marginRight:'10px'}}>
                We provide a complete service for the sale of homes <br/>and real estate
                </Text>
              </div>
              <Button shape="round" style={{backgroundColor:'#008080'}} className="mb-[23px] sm:px-5 font-semibold min-w-[138px] sm:min-w-full">
                CONTACT US
              </Button>
            </div>

   
          </div>
        </div>

        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      </div>

      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    
    </>
  );
}
