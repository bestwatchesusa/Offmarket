import React,{ useState, useContext,useEffect } from 'react';
import { Modal,message, Steps, theme,Input ,Flex } from 'antd';
import { Helmet } from "react-helmet";
import { Img, Heading, Button, TextArea, Radio, RadioGroup, Text, RatingBar, GoogleMap } from "../../components";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Header from "../../components/Header2";
import LandingPageCard from "../../components/LandingPageCard";
import { AppstoreFilled } from '@ant-design/icons';
import BgSky from "../../assets/images/Mask.png";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import Third from "./FourStep";
import Four from "./FourStep";
// import Fift from "./SixStep";
// import Confirm from "./Confirm";
import Success from "./success";
import One from '../../assets/images/img_icon_gray_700.svg'
import Two from '../../assets/images/img_rectangle_5610.png'
import Img1 from '../../assets/images/img_rectangle_5612.png'
import Img2 from '../../assets/images/img_rectangle_5611.png'
import Img3 from '../../assets/images/img_icon_gray_700_20x20.svg'
import Img4 from '../../assets/images/img_icon_gray_700_20x20.svg'
import Img5 from '../../assets/images/left-arrow.png'
import Img6 from '../../assets/images/img_image_2.png'
import Img7 from '../../assets/images/icons8-power-50.png'
import Img8 from '../../assets/images/icons8-share-64.png'
import Img9 from '../../assets/images/icons8-heart-50.png'
import Img10 from '../../assets/images/img_icon_gray_700_20x20.svg'
import Img11 from '../../assets/images/img_icon_gray_700.svg'
import Img12 from '../../assets/images/img_icon_gray_700_20x20.svg'
import {

  useParams
} from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
const steps = ['Offer Details', 'Proof of funds', 'Acceptance'];


export default function PropertyDetailsPage() {

  let { id } = useParams();
 
  const [payments, setPayment] = useState([]);

  const [payments2, setPayment2] = useState([]);
  const { getProperty } = useContext(AuthContext);
  useEffect(() => {
    const fetchRequests = async () => {
      const data = await getProperty();
      setPayment2(data);
      const servePro = data.filter(i => i.id === id );
      console.log("goal 666=====",data)
      setPayment(servePro[0]);
      console.log("goal 666===@@@==",servePro[0])
    };
   
    fetchRequests();

  
  }, [])

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    switch (step) {
      case 0:
        return <>
        <Input type='text'/>
        </>;
      case 1:
        return <SecondStep />;
      case 2:
        return <Third />;
      case 3:
        return <Four />;
      // case 4:
      //   return <Fift />;
      // case 5:
      //   return <Confirm />;
      default:
        throw new Error("Unknown step");
    // return step === 1;
  }
};

const handleSteps = (step) => {
  switch (step) {
    case 0:
      return <FirstStep/>;
    case 1:
      return <Four />;
    case 2:
      return <Success />;
    // case 3:
    //   return <Four />;
    // case 4:
    //   return <Fift />;
    // case 5:
    //   return <Confirm />;
    default:
      throw new Error("Unknown step");
  // return step === 1;
}
}
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };


  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  const steps2 = [
    {
      title: 'Offer Details',
      content: <>
    <Flex vertical gap={12}>
    <Input placeholder="Outlined" />
    <Input  style={{height:'40px', width:'100%', backgroundColor:'white', borderColor:'black'}}/>
    <Input placeholder="Borderless" variant="borderless" />
  </Flex>
      </>,
    },
    {
      title: 'Proof of funds',
      content: <>
      <Flex vertical gap={12}>
      <Input placeholder="Outlined" />
      <Input  style={{height:'40px', width:'100%', backgroundColor:'white', borderColor:'black'}}/>
      <Input placeholder="Borderless" variant="borderless" />
    </Flex>
        </>,
    },
    {
      title: 'Acceptance',
      content: <>
      <Flex vertical gap={12}>
<div>

<Input style={{height:'40px', width:'100%', backgroundColor:'white', borderColor:'black', }}/>
      <Input type='text' style={{ border: '3px solid #555',padding: '12px 20px'}} />
    
</div>
      
    </Flex>
        </>,
    },
  ];
  const { token2 } = theme.useToken();
  const [current2, setCurrent2] = useState(0);
  const next2 = () => {
    setCurrent2(current2 + 1);
  };
  const prev2 = () => {
    setCurrent2(current2 - 1);
  };
  const items2 = steps2.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle2 = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: "",
    borderRadius: token.Input,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };




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


  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };


  
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const showModal3 = () => {
    setIsModalOpen3(true);
  };
  const handleOk3 = () => {
    setIsModalOpen3(false);
  };
  const handleCancel3 = () => {
    setIsModalOpen3(false);
  };

  
  return (
    <>
      <Helmet>
        <title>Paul's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <div className="flex flex-col items-center justify-start w-full gap-10">
            <Header className="flex justify-center items-center w-full md:h-auto p-[19px] bg-white-A700" />
            
            <div className="flex flex-row justify-center w-full -mt-[26px] ">
            <div className="flex flex-row md:flex-col justify-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
            
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
              <Img src={Img5} alt="1_bath_one" className="h-[15px] w-[15px]" />
                <Heading as="h2" className="!text-dark-700" style={{color:'dark'}}>
                Back to Search
                </Heading>
             
              </div>
            </div>

        
          
          </div>
          </div>

    


<div >

          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row md:flex-col justify-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
            
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
                {/* <Img src="images/img_icon_gray_700.svg" alt="3_bed_room_one" className="h-[20px] w-[20px]" /> */}
                <Heading as="h1"  style={{color:'black',fontWeight:"500px", fontSize:25}}>

                {payments.Title}

                </Heading>
             
              </div>
            </div>

        
          
          </div>
          </div>
          <br/><br/>
          <div className="flex flex-row justify-center w-full -mt-10">
            <div className="flex flex-row md:flex-col justify-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
            
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
                {/* <Img src="images/img_icon_gray_700.svg" alt="3_bed_room_one" className="h-[20px] w-[20px]" /> */}
                <Heading as="h6" className="!text-gray-500" style={{color:'grey', fontSize:14}}>
                {payments.Address}
                </Heading>
             
              </div>
            </div>
          </div>
          </div>

          <br/><br/>
          <div className="flex flex-row justify-center w-full -mt-[26px] ">
            <div className="flex flex-row md:flex-col justify-start w-full gap-3 md:gap-5 md:px-5 max-w-[1200px]">
            
           

            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
               <img src={One} alt="1_bath_one" className="h-[15px] w-[15px]" /> <span> 5</span> &nbsp;
                <Img src={Img3} alt="1_bath_one" className="h-[15px] w-[15px]" /><span> 3</span>  &nbsp;
                <Img src={Img4} alt="1_bath_one" className="h-[15px] w-[15px]" /><span> 2</span>  &nbsp; |  &nbsp; Residential
              </div>
            </div>
          
          </div>
          </div>
          <br/>
            <div className="flex flex-row justify-center w-full">
              
              <div className="flex flex-row md:flex-col justify-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
               
                <div className="flex flex-row justify-start w-[66%] md:w-full">
                  <Img
                  src={Two}
                    alt="image"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] md:w-full gap-6">
                  <Img
                    src={Img2}
                    alt="image_one"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <div className="h-[263px] w-full relative">
                    <Img
                      src={Img1}
                      alt="image_two"
                      className="justify-center h-[263px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[10px]"
                    />

<Heading as="h6" className="gap-1.5 bottom-[55%] right-[25%] m-auto text-gray-900 font-bold min-w-[122px] absolute" style={{color:'white', fontSize:20}}>
                + 18
                </Heading>
                <Heading as="h6" className="gap-1.5 bottom-[40%] right-[27%] m-auto text-gray-900 font-bold min-w-[122px] absolute" style={{color:'white', fontSize:20}}>
                Images
                </Heading>
                    {/* <Button
                      // color="white_A700"
                      size="lg"
                      shape="round"
                      leftIcon={<Img src="images/img_icon_image.svg" alt="icon - image" />}
                      className="gap-1.5 bottom-[6%] right-[4%] m-auto text-gray-900 font-bold min-w-[122px] absolute"
                    >
                      3 more
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row md:flex-col justify-start items-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
                <div className="flex flex-col items-center justify-start w-[66%] md:w-full gap-6">
                  <div className="flex flex-col items-center justify-start w-full gap-11 p-[39px] sm:p-5 border-blue_gray-100_01  bg-white-A700 rounded-[10px]">
                    <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                      <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                      <Heading size="3xl" as="h3" className="tracking-[-0.56px]">
                          Product Description
                        </Heading>

                        <Text as="p" style={{fontSize:14, color:'black'}}>
   
                      {payments.Description}
                      </Text>

                     
                   
                      </div>
                     
                    </div>
                    {/* <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                    <Heading size="3xl" as="h3" className="tracking-[-0.56px]">
                          Tips
                        </Heading>
                      <Text as="p" style={{fontSize:14, color:'black'}}>
                        A slider is great way to display a slideshow featuring images or videos, usually on your
                        homepage.Adding sliders to your site is no longer difficult. You don’t have to know coding
                        anymore. Just use a slider widget and it will automatically insert the slider on your web
                        page.So, the Elementor slider would be a great tool to work with when building a WordPress site.
                      </Text>
                    </div> */}
                 
                  </div>
                  
                  
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] sm:w-full gap-10 p-[23px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px]">
                    price
                    <Heading size="3xl" as="h3" className="tracking-[-0.56px]" style={{color:'#008080',fontWeight:'bold'}}>
                    {payments.Price}
                    </Heading>
                    {/* <div className="flex flex-col items-center justify-start w-full gap-3"> */}
                  
                      {/* <TextArea
                        shape="round"
                        name="inputbox_one"
                        placeholder="Message"
                        className="w-full sm:pb-5 sm:pr-5 text-gray-600_02 font-semibold"
                      /> */}

            <div className="flex flex-col items-center justify-start w-full gap-[19px]">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
              <AppstoreFilled style={{color:'#008080'}} />
                <Heading as="h2" style={{fontWeight:'bold'}}>
                Sq. Footage
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center gap-3" style={{fontWeight:'bold'}}>
              {payments['Sq. Footage']}
              </div>
            </div>
         
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[19px]">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
              <AppstoreFilled style={{color:'#008080'}} />
                <Heading as="h2" style={{fontWeight:'bold'}}>
                Type
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center gap-3" style={{fontWeight:'bold'}}>
              {payments.Type}
              </div>
            </div>
         
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[19px]">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
              <AppstoreFilled style={{color:'#008080'}} />
                <Heading as="h2" style={{fontWeight:'bold'}}>
                Parking
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center gap-3" style={{fontWeight:'bold'}}>
              {payments.Parking}
              </div>
            </div>
         
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[19px]">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3" >
              <AppstoreFilled style={{color:'#008080'}} />
                <Heading as="h2" style={{fontWeight:'bold'}}>
                Year Built
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center gap-3" style={{fontWeight:'bold'}}>
              {payments['Year build']}
              </div>
            </div>
         
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[19px]">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
              <AppstoreFilled style={{color:'#008080'}} />
                <Heading as="h2" style={{fontWeight:'bold'}}>
                Lot Size
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center gap-3" style={{fontWeight:'bold'}}>
              {payments['Lot size']}
              </div>
            </div>
         
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[19px]">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
              <AppstoreFilled style={{color:'#008080'}} />
                <Heading as="h2" style={{fontWeight:'bold'}}>
                Bedrooms
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center gap-3" style={{fontWeight:'bold'}}>
              {payments.Bedrooms}
              </div>
            </div>
         
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[19px]">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
              <AppstoreFilled style={{color:'#008080'}} />
                <Heading as="h2" style={{fontWeight:'bold'}}>
                Bathrooms
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center gap-3" style={{fontWeight:'bold'}}>
              {payments.Bathrooms}
              </div>
            </div>
         
                    </div>
                    {/* <div className="flex flex-col items-center justify-start w-full gap-[19px]">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
              <AppstoreFilled style={{color:'#008080'}} />
                <Heading as="h2" style={{fontWeight:'bold'}}>
                Kitchen
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center gap-3" style={{fontWeight:'bold'}}>
             
              </div>
            </div>
         
                    </div> */}
                  </div>
                  <Button onClick={showModal} size="2xl" shape="round" style={{background:'#008080'}} className="w-full sm:px-5 font-semibold">
                    Make Offer
                  </Button>
                </div>
              </div>
            </div>
          </div>

          </div> 
         

          {/* ********************************** */}
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
                payments2.map((datas, i) => {
                  console.log(datas.Price,"Goal")
                  return (
<div className="flex flex-col items-center justify-start w-[32%] md:w-full">
                    <Link to={'/propertydetails'} key={i}>
                    <Img
                      src={Img6}
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
                                    leftIcon={<Img src={Img7} alt="icon - image" style={{width:18}}/>}
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
                              {datas.Address}
                              </Heading>
                            </div>
                            <div className="flex flex-row justify-start items-center gap-3">
                              <Img src={Img8} alt="1_bath_one" className="h-[20px] w-[20px]" />
                              <Img src={Img9}alt="1_bath_one" className="h-[20px] w-[20px]" />
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
                                  leftIcon={<Img src={Img11} alt="icon / 16px / close" />}
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
                                  leftIcon={<Img src={Img10} alt="icon / 16px / close" />}
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
                                  leftIcon={<Img src={Img11}alt="icon / 16px / close" />}
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
                                  leftIcon={<Img src={Img12}alt="icon / 16px / close" />}
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

      <Modal 
       open={isModalOpen} 
      //  onOk={handleOk} 
      onCancel={handleCancel}
       footer={[
        <>
        <div style={{display:'inline-flex', marginTop:'20px'}}>

        <Button  style={{height:'30px', width:'200px', borderRadius:'10px', fontSize:'10px', background:'white',color:'black', border:'25px',padding:'5px', borderColor:'grey'}} key="back" onClick={showModal3} >
        No, I don’t want financing
        </Button>,
        <Button style={{height:'30px', width:'200px', borderRadius:'10px', fontSize:'10px', background:'#008080',color:'white'}} key="submit" type="primary" onClick={showModal2}>
        Yes, I’d like financing offer
        </Button>
        </div>
       
        </>
      ]}
      styles={{width:'30%'}}
       >
        <Heading size="1xl" as="h6" className="tracking-[-0.72px]"style={{color:'black', textAlign:'center', fontSize:'18px', fontWeight:'bold'}}>
        Do you want Financing for this deal?
                </Heading>
        <p style={{ textAlign:'center', fontSize:'14px', marginTop:'20px' }}>Get financing offers in 24-48hours</p>
     
      </Modal>

      <Modal open={isModalOpen2} 
      // onOk={handleOk2} 
      onCancel={handleCancel2}
      footer={[]}
      >
        <br/>
        <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
      </Modal>


      <Modal open={isModalOpen3} 
      // onOk={handleOk2} 
      onCancel={handleCancel3}
      footer={[]}
      >
       
        <br/> <br/>
     <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {/* {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {}; 

          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }

          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
        //   return (
        //     <Step key={label} {...stepProps}>
        //       <StepLabel {...labelProps}>{label}</StepLabel>
        //     </Step>
        //   );
        // })}*/}
        {steps.map((label) => (
                  <Step key={label} sx={{
                    '& .MuiStepLabel-root .Mui-completed': {
                      color: '#01A862', // circle color (COMPLETED)
                    },
                    '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                    {
                      color: 'grey.500', // Just text label (COMPLETED)
                    },
                    '& .MuiStepLabel-root .Mui-active': {
                      color: '#01A862', // circle color (ACTIVE)
                    },
                    '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                    {
                      color: 'common.white', // Just text label (ACTIVE)
                    },
                    '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                      fill: 'white', // circle's number (ACTIVE)
                    },
                  }}>
                    <StepLabel  >{label}</StepLabel>
                  </Step>
                ))}
      </Stepper>
      {handleSteps(activeStep)}
      {activeStep === steps.length ? (
<>
<Success/>
</>
        // <React.Fragment>
          // {/* <Typography sx={{ mt: 2, mb: 1 }}>
          //   All steps completed - you&apos;re finished
          // </Typography>
          // <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          //   <Box sx={{ flex: '1 1 auto' }} />
          //   <Button onClick={handleReset}>Reset</Button>
          // </Box> */}
          
        // </React.Fragment> 
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

            <Button onClick={handleNext} style={{backgroundColor:'#008080'}}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>


      </Modal>
    </>
  );
}
