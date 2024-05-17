import React, { useState,useEffect ,useContext} from 'react';

import { Helmet } from "react-helmet";
import { Img, Heading, TextArea, Radio, RadioGroup, Text, RatingBar, GoogleMap } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header4";
import LandingPageCard from "../../components/LandingPageCard";
import { AppstoreFilled } from '@ant-design/icons';
import BgSky from "../../assets/images/Mask.png";
import Grid from '@mui/material/Grid';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload ,Col,Typography, Row } from 'antd';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import { Breadcrumb } from 'antd';
import { AuthContext } from '../../context/AuthContext';
import deal from "../../assets/images/user.png";
export default function PropertyDetailsPage() {
  const { getUser} = useContext(AuthContext);
  const [user, setData] = useState([]);

  const [first_name, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [last_name, setLastname] = useState("");
  


  useEffect(() => {
    getUser()
  .then((data) => {
    console.log('Dat',data)
    //const info = data.filter(i => i.tasks.length =0 );
    setFirstname(data.first_name)
    setLastname(data.last_name)
    setEmail(data.email)
    setPhone(data.phone_number)
    
  
  })
  .catch((error) => console.log('Error fetching all services:', error))
}, []);
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
            <Text size="md" as="p" style={{textAlign:'center', color:'black'}}>
                    User Profile
                  </Text>
                  <Breadcrumb
    items={[
    
      {
        title: <a href="">Home</a>,
      },
     
      {
        title: ' User Profile',
      },
    ]}
  />
      
<br/>
          <div className="flex flex-row justify-center w-full -mt-10">
            <div className="flex flex-row md:flex-col justify-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
            
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
                {/* <Img src="images/img_icon_gray_700.svg" alt="3_bed_room_one" className="h-[20px] w-[20px]" /> */}
                <Heading as="h1"  style={{color:'black',fontWeight:"500px", fontSize:25}}>
                Account Settings
                </Heading>
             
              </div>
            </div>
          </div>
          </div>


         
        



            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row md:flex-col justify-start items-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
              
              <div className="flex flex-col items-center justify-start w-[32%] sm:w-full gap-10 p-[23px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                 
                  <div style={{height:'200px'}} className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px]">
                 <Img src={deal} style={{height:'170px',width:'170px', margin:'auto'}}/>
                  </div>
                  {/* <Upload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" directory>
    <Button icon={<UploadOutlined />}>Upload Photo</Button>
  </Upload> */}
   <div style={{height:'60px', marginTop:'-40px'}} className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px]">
   <Text as="p" style={{fontSize:14, color:'black',margin:'auto'}}>
                       {/* Image size should be under 1MB and image ration needs to be 1:1 */}
                       🏠 Welcome Back! 🎉
                      </Text>
                      
                       <Heading as="h1"   style={{color:'black',fontWeight:"500px", fontSize:25, margin:'auto'}}>
                {first_name} {last_name}
                <br/>
                </Heading>
               
                  </div>
  
                </div>
                
                
                <div className="flex flex-col items-center justify-start w-[66%] md:w-full gap-6">
                  <div className="flex flex-col items-center justify-start w-full gap-14 p-[39px] sm:p-5 border-blue_gray-100_01  bg-white-A700 rounded-[10px]">
                    <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                     
                   
                      <div  className="flex flex-col items-start justify-start w-full gap-[17px]">
                    

                        <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row md:flex-col justify-start items-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
              
              <div style={{marginTop:'-80px'}} className="flex flex-col  justify-start w-[45%] sm:w-full gap-10 p-[23px] sm:p-5  bg-white-A700 rounded-[10px]">
              <Typography >First Name </Typography>
              <TextField
            
            style={{ marginTop:'-30px',}}
            fullWidth

            name="Buyer Name"
            placeholder="First Name"
           
value={first_name}


          />
                 
                 </div>
                 <div style={{marginTop:'-80px'}} className="flex flex-col  justify-start w-[45%] sm:w-full gap-10 p-[23px] sm:p-5  bg-white-A700 rounded-[10px]">
              <Typography >Last  Name</Typography>
              <TextField
            
            style={{ marginTop:'-30px',}}
            fullWidth

            name="Buyer Name"
            placeholder="Last Name"
           value={last_name}

          />
                 
                 </div>


                 
              </div> </div>


                        <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row md:flex-col justify-start items-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
              
              <div style={{marginTop:'-40px'}} className="flex flex-col  justify-start w-[45%] sm:w-full gap-10 p-[23px] sm:p-5  bg-white-A700 rounded-[10px]">
              <Typography >Email</Typography>
              <TextField
            
            style={{ marginTop:'-30px',}}
            fullWidth

            name="Buyer Name"
            placeholder="Email Address"
           
value={email}


          />
                 
                 </div>


                  <div style={{marginTop:'-40px'}} className="flex flex-col  justify-start w-[45%] sm:w-full gap-10 p-[23px] sm:p-5  bg-white-A700 rounded-[10px]">
              <Typography >Phone Number</Typography>
              <TextField
            
            style={{ marginTop:'-30px',}}
            fullWidth

            name="Buyer Name"
            placeholder="Phone Number"
           
           value={phone_number}

          />
                 
                 </div>


                 
              </div> </div>
         
              <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row md:flex-col justify-start items-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
              
             
              <div style={{marginTop:'-40px'}} className="flex flex-col  justify-start w-[45%] sm:w-full gap-10 p-[23px] sm:p-5  bg-white-A700 rounded-[10px]">
              <Typography >City</Typography>
              <TextField
            
            style={{ marginTop:'-30px',}}
            fullWidth

            name="Buyer Name"
            placeholder="Select City"
           



          />
                 
                 </div>
                
                 <div style={{marginTop:'-40px'}} className="flex flex-col  justify-start w-[45%] sm:w-full gap-10 p-[23px] sm:p-5  bg-white-A700 rounded-[10px]">
              <Typography >User ID</Typography>
              <TextField
            
            style={{ marginTop:'-30px',}}
            fullWidth

            name="Buyer Name"
            placeholder="User ID"
           

          />
                 
                 </div>


                 
              </div> </div>

              <div className="flex flex-col items-center justify-start w-[40%] sm:w-full gap-10 p-[23px] sm:p-5 bg-white-A700 rounded-[10px]">
                 <Button size="3xl" shape="round" style={{background:'#008080', color:'#ffff'}} className="w-full sm:px-5 font-semibold">
                    Save Changes
                  </Button> 
                 </div>
                      
                       
                      </div>
                    
                    </div>

                    <div className="flex flex-col items-left justify-start w-full gap-[17px]"style={{}}>
                    {/* <div className="flex flex-col items-start justify-start w-full gap-[17px]"> */}
                    <Heading size="3xl" as="h3" className="tracking-[-0.56px]">
                          Change Password
                        </Heading>
                    
                    {/* </div> */}
                    
                 
                    <div style={{marginTop:'-15px'}} className="flex flex-col  justify-start w-[45%] sm:w-full gap-10 p-[23px] sm:p-5  bg-white-A700 rounded-[10px]">
              <Typography >Old Password</Typography>
              <TextField
            
            style={{ marginTop:'-30px',}}
            fullWidth

            name="Buyer Name"
            placeholder="Old Password"
           

          />
                 
                 </div>


                 <div style={{marginTop:'-50px'}} className="flex flex-col  justify-start w-[45%] sm:w-full gap-10 p-[23px] sm:p-5  bg-white-A700 rounded-[10px]">
              <Typography >New Password</Typography>
              <TextField
            
            style={{ marginTop:'-30px',}}
            fullWidth

            name="Buyer Name"
            placeholder="New Password"
           

          />
                 
                 </div>

                 <div style={{marginTop:'-50px'}} className="flex flex-col  justify-start w-[45%] sm:w-full gap-10 p-[23px] sm:p-5  bg-white-A700 rounded-[10px]">
              <Typography >Confirm Password</Typography>
              <TextField
            
            style={{ marginTop:'-30px',}}
            fullWidth

            name="Buyer Name"
            placeholder="Confirm Password"
           

          />
                 
                 </div>

               

                 <div className="flex flex-col items-center justify-start w-[40%] sm:w-full gap-10 p-[2px] sm:p-5 bg-white-A700 rounded-[10px]">
                 <Button size="2xl" shape="round" style={{background:'#008080', color:'#ffff'}} className="w-full sm:px-5 font-semibold">
                    Save Changes
                  </Button> 
                 </div>
                 </div>
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

        </div>
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      </div>

  
    </>
  );
}
