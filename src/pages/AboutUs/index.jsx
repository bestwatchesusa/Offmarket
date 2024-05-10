import React,{ useState, useContext,useEffect } from 'react';
import { Modal } from 'antd';
import { AuthContext } from '../../context/AuthContext';


import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BgSky from "../../assets/images/Mask.png";
import LandingPageCard from "../../components/LandingPageCard";
export default function AboutUsPage() {
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
    <>
      <Helmet>
        <title>Paul's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-white-A700">
       
      <div className="flex flex-col items-center justify-start w-full gap-[60px]" style={{  background:  `url(images/pexels-harrisonhaines-3082638.jpg)` ,backgroundSize: 'cover',
 backgroundRepeat: 'no-repeat', height: '100vh',
  width: '100%',}}>
          <Header className="flex justify-center items-center w-full md:h-auto  " />
          <Text size="md" as="p" style={{textAlign:'center', color:'#ffff'}}>
                    About Us
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
        
        <div className="flex flex-col items-center justify-start w-full gap-[100px]">
          
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[38px] md:px-5 max-w-[1200px]">
            <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                    A note from our founders.
                  </Heading>
                  <Text as="p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour,
                  </Text>
                </div>
              <div className="flex flex-col items-center justify-start w-full gap-6">
                {/* <div className="flex flex-row sm:flex-col justify-start w-full gap-6 sm:gap-5">
                  <Img
                    src="images/img_rectangle_5592.png"
                    alt="image"
                    className="w-[66%] md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_5593.png"
                    alt="image_one"
                    className="w-[32%] md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                </div> */}
                {/* <div className="flex flex-row sm:flex-col justify-start w-full gap-6 sm:gap-5"> */}
                  {/* <Img
                    src="images/img_rectangle_5595.png"
                    alt="image_two"
                    className="w-[32%] md:h-auto sm:w-full object-cover rounded-[10px]"
                  /> */}
                  <Img
                    src="images/img_rectangle_5593.png"
                    alt="image_three"
                    className="w-[100%] md:h-auto sm:w-full object-cover rounded-[10px] h-[450px]"
                  />
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col w-full gap-[100px] p-[50px] md:gap-10 md:p-5 bg-gray-50">
            <div className="flex flex-col items-start justify-start w-[17%] md:w-full ml-[70px] gap-[18px] md:ml-5">
              {/* <Button color="white_A700" size="3xl" shape="circle" className="w-[60px]">
                <Img src="images/img_frame.svg" />
              </Button> */}
              <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                <Heading size="5xl" as="h2" className="tracking-[-0.92px]">
                  $15.4M
                </Heading>
                <Heading size="lg" as="h3" className="!text-blue_gray-600 tracking-[-0.40px]">
                  <>
                    Owned from
                    <br />
                    Properties transactions
                  </>
                </Heading>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] md:w-full gap-[18px]">
              {/* <Button color="white_A700" size="3xl" shape="circle" className="w-[60px]">
                <Img src="images/img_frame_orange_a700.svg" />
              </Button> */}
              <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                <Heading size="5xl" as="h4" className="tracking-[-0.92px]">
                  25K+
                </Heading>
                <Heading size="lg" as="h5" className="!text-blue_gray-600 tracking-[-0.40px]">
                  Properties for Buy & sell Successfully
                </Heading>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] md:w-full gap-[18px]">
              {/* <Button color="white_A700" size="3xl" shape="circle" className="w-[60px]">
                <Img src="images/img_icon.svg" />
              </Button> */}
              <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                <Heading size="5xl" as="h6" className="tracking-[-0.92px]">
                  500
                </Heading>
                <Heading size="lg" as="h5" className="!text-blue_gray-600 tracking-[-0.40px]">
                  <>
                    Daily completed <br />
                    transactions
                  </>
                </Heading>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[17%] md:w-full mb-[26px] mr-[70px] gap-[18px] md:mr-5">
              {/* <Button color="white_A700" size="3xl" shape="circle" className="w-[60px]">
                <Img src="images/img_icon_orange_a700.svg" />
              </Button> */}
              <div className="flex flex-col items-start justify-start w-full gap-4">
                <Heading size="5xl" as="h1" className="tracking-[-0.92px]">
                  600+
                </Heading>
                <Heading size="lg" as="h5" className="!text-blue_gray-600 tracking-[-0.40px]">
                  Reagular Clients
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start w-full pl-[120px] pr-14 md:px-5">
            <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 max-w-[1147px]">
              <div className="flex flex-col items-center justify-start w-[47%] md:w-full gap-14">
                <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                <Text as="p"> Why choose us</Text>
               
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                    A note from our founders.
                  </Heading>
                  <Text as="p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour,
                  </Text>
                </div>
                <div className="flex flex-col w-full gap-[30px]">
                  <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[26px] sm:gap-5">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Heading
                        size="lg"
                        as="h2"
                        className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center font-extrabold border-gray-900 rounded-[17px]"
                        >
                        {/* border-2 border-solid  */}
                        <span style={{color:"#008080",fontWeight:'bold',fontSize:'20px'}}>
                        01
                        </span>
                        
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[89%] sm:w-full gap-4">
                      <Heading size="xl" as="h4" className="tracking-[-0.44px]" >
                        Integrity
                      </Heading>
                      <Text as="p">
                      We keep our promises. We walk the talk. We are honest trust worthy and ethical in our actions.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[26px] sm:gap-5">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Heading
                        size="lg"
                        as="h5"
                        className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold  rounded-[17px]"
                        style={{color:"#008080",fontWeight:'bold',fontSize:'20px'}} >
                        02
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[89%] sm:w-full gap-4">
                      <Heading size="xl" as="h6" className="tracking-[-0.44px]">
                        Competence
                      </Heading>
                      <Text as="p">
                      We keep our promises. We walk the talk. We are honest trust worthy and ethical in our actions.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[26px] sm:gap-5">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Heading
                        size="lg"
                        as="h5"
                        className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold  rounded-[17px]"
                        
                        style={{color:"#008080",fontWeight:'bold',fontSize:'20px'}}>
                        03
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[89%] sm:w-full pt-[3px] gap-[13px]">
                      <Heading size="xl" as="h5" className="tracking-[-0.44px]">
                      Quality Client/Customer Service
                      </Heading>
                      <Text as="p">
                      We keep our promises. We walk the talk. We are honest trust worthy and ethical in our actions.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[26px] sm:gap-5">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Heading
                        size="lg"
                        as="h5"
                        className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold  rounded-[17px]"
                        style={{color:"#008080",fontWeight:'bold',fontSize:'20px'}}>
                        04
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[89%] sm:w-full pt-[3px] gap-[13px]">
                      <Heading  size="xl" as="h6" className="tracking-[-0.44px]" style={{textAlign:'right'}}>
                      Team work
                      </Heading>
                      <Text as="p">
                      We keep our promises. We walk the talk. We are honest trust worthy and ethical in our actions.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[26px] sm:gap-5">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Heading
                        size="lg"
                        as="h5"
                        className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold  rounded-[17px]"
                        style={{color:"#008080",fontWeight:'bold',fontSize:'20px'}}>
                        05
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[89%] sm:w-full pt-[3px] gap-[13px]">
                      <Heading size="xl" as="h5" className="tracking-[-0.44px]">
                      Prompt Delivery
                      </Heading>
                      <Text as="p">
                      We keep our promises. We walk the talk. We are honest trust worthy and ethical in our actions.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[26px] sm:gap-5">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Heading
                        size="lg"
                        as="h5"
                        className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold  rounded-[17px]"
                        style={{color:"#008080",fontWeight:'bold',fontSize:'20px'}}>
                        06
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[89%] sm:w-full pt-[3px] gap-[13px]">
                      <Heading size="xl" as="h5" className="tracking-[-0.44px]">
                      Versatility
                      </Heading>
                      <Text as="p">
                      We keep our promises. We walk the talk. We are honest trust worthy and ethical in our actions.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_rectangle_20_589x531.png"
                alt="image_four"
                className="w-[47%] md:w-full md:h-[589px] object-cover rounded-[10px]"
              />
            </div>
          </div>


         

          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[39px] md:px-5 max-w-[1200px]">
              <div className="flex flex-row sm:flex-col justify-between items-start w-full pt-[3px] sm:gap-10">
                <Heading size="3xl" as="h2" className="tracking-[-0.56px]">
                Discover Our Featured Listings
                </Heading>
                
                <div className="flex flex-row justify-start items-center mt-[3px] gap-2 sm:mt-0">
                  <Heading size="md" as="h3" className="mt-0.5 !text-orange-A700">
                    Explore All
                  </Heading>
                  <Img src="images/img_icon_24px_v.svg" alt="iconarrow_one" className="h-[24px] w-[24px]" />
                </div>
              </div>
              <div className="flex flex-row md:flex-col w-full gap-6">
              {
                payments.map((datas, i) => {
                  console.log(datas.Price,"Goal")
                  return (
<div className="flex flex-col items-center justify-start w-[32%] md:w-full">
                    <Link to={'/propertydetails'} key={i}>
                    <Img
                      src='images/img_image_3.png'
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
                    </Link></div>
                  )
                })
              }
                {/* <LandingPageCard className="flex flex-col items-center justify-start w-[32%] md:w-full" />
                <LandingPageCard
                  imageOne="images/img_image_1.png"
                  className="flex flex-col items-center justify-start w-[32%] md:w-full"
                />
                <LandingPageCard
                  imageOne="images/img_image_2.png"
                  className="flex flex-col items-center justify-start w-[32%] md:w-full"
                /> */}
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
              <Button shape="round" style={{backgroundColor:'#008080'}}className="mb-[23px] sm:px-5 font-semibold min-w-[138px] sm:min-w-full">
                CONTACT US
              </Button>
            </div>

   
          </div>
        </div>

     



        </div>
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      </div>
    </>
  );
}
