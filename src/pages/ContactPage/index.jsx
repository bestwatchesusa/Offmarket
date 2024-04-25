import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, TextArea, Input, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BgSky from "../../assets/images/Mask.png";
export default function ContactPagePage() {
  return (
    <>
      <Helmet>
        <title>Paul's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto  bg-white-A700">
        
      <div className="flex flex-col items-center justify-start w-full gap-[60px]" style={{  background:  `url(images/pexels-harrisonhaines-3082638.jpg)` ,backgroundSize: 'cover',
 backgroundRepeat: 'no-repeat', height: '100vh',
  width: '100%',}}>
          <Header className="flex justify-center items-center w-full md:h-auto  " />
          <Text size="md" as="p" style={{textAlign:'center', color:'#ffff'}}>
                    Contact Us
                  </Text>
          <div className="flex flex-col items-center justify-start w-[50%] md:w-full gap-10 " style={{margin:'auto', marginTop:'-30px'}}>
          
                <div className="flex flex-col items-center justify-start w-full gap-[15px] ">
                
                  <Heading size="6xl" as="h1" className="tracking-[-0.92px]" style={{textAlign:'center', color:'#fff'}}>
                    <>
                    got an Inquiry?
                    </>
                  </Heading>
                  <Text size="md" as="p" style={{textAlign:'center', color:'#ffff'}}>
                    We Provide a complete service for the sales of off up properties <br /> for your own comfort.
                  </Text>
                </div>
                </div>
        </div>
        
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          {/* <Header1 className="flex justify-center items-center w-full md:h-auto p-[19px] bg-white-A700" />
           */}
          
          <div className="flex flex-row justify-center w-full">
            <div  className="flex flex-col items-center justify-start w-full gap-11 md:px-5 max-w-[1200px]">
           
              <div  className="flex flex-row md:flex-col justify-start items-center w-full gap-[50px] p-[23px] md:gap-5 sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                
                <div style={{background:'#008080'}} className="flex flex-col items-center justify-start w-[46%] md:w-full h-[100%] gap-10" >
                  <div className="flex flex-col items-center justify-start w-[96%] md:w-full gap-4" style={{marginTop:'50px'}}>
                    <div className="flex flex-col items-start justify-start w-full gap-[3px]" >
                      <Heading size="lg" as="h3" className="tracking-[-0.40px]" style={{color:'white', fontSize:'30px'}}>
                      Let's talk with Us
                      </Heading>
                      <Heading size="md" as="h4" className=" !font-semibold !leading-[180%]" style={{color:'white', marginTop:'30px'}}>
                        <>
                        Have a project in mind that you think we’d be a great fit for it? We’d love to know what you’re thinking
                        </>
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-2.5" style={{marginTop:'30px'}}>
                      <div className="flex flex-row justify-start items-center w-full gap-[13px] py-0.5">
                        <Img src="images/img_icon_20px_call.svg" alt="icon24pxcall" className="h-[24px] w-[24px]" />
                        <Heading size="md" as="h5" className="!font-semibold" style={{color:'white'}}>
                          (123) 456-7890
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3 py-0.5">
                        <Img src="images/img_icon_24px_email.svg" alt="icon24pxemail" className="h-[24px] w-[24px]" />
                        <Heading size="md" as="h6" className="mt-0.5 !font-semibold" style={{color:'white'}}>
                          info@mail.com
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3 py-0.5">
                        <Img src="images/img_icon_24px_email.svg" alt="icon24pxemail" className="h-[24px] w-[24px]" />
                        <Heading size="md" as="h6" className="mt-0.5  !font-semibold" style={{color:'white'}}>
                          info@mail.com
                        </Heading>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div  />
                {/* className="h-[534px] w-px md:w-full md:h-px my-[25px] " style={{backgroundColor:'#008080'}} */}
                <div className="flex flex-col items-center justify-start w-[44%] md:w-full ml-[25px] gap-10 sm:ml-5">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px]">
                    <Heading size="2xl" as="h2" className="tracking-[-0.56px]">
                      Send a message
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full gap-3">
                      <Input
                        shape="round"
                        type="text"
                        name="message"
                        placeholder="Full Name"
                        prefix={<Img src="images/img_icon_24px_user.svg" alt="icon / 24px / user" />}
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                      />
                      <Input
                        shape="round"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        prefix={<Img src="images/img_icon_24px_email.svg" alt="icon / 24px / email" />}
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                      />
                      <Input
                        shape="round"
                        type="number"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        prefix={<Img src="images/img_icon_20px_call.svg" alt="icon / 24px / call" />}
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                      />
                      <TextArea
                        shape="round"
                        name="inputbox_one"
                        placeholder="Message"
                        className="w-full sm:pb-5 sm:pr-5 text-gray-600_02 font-semibold"
                      />
                    </div>
                  </div>
                  <Button size="2xl" style={{background:'#008080', color:'white'}} shape="round" className="w-full sm:px-5 font-semibold">
                    Send Request
                  </Button>
                </div>


              </div>
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
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      </div>
    </>
  );
}
