import React, { useState } from 'react';
import { Modal } from 'antd';

import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, GoogleMap, SelectBox, Input, Heading,Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LandingPageCard from "../../components/LandingPageCard";
import BgHome from "../../assets/images/blueribbon.png";
import BgSky from "../../assets/images/Mask.png";

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
                    Our Deals
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
                  <LandingPageCard className="flex flex-col items-center justify-start w-full" />
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
                  />
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
