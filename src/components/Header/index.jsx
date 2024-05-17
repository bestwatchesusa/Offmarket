import React from "react";
import { CloseSVG } from "../../assets/images";
import deal from "../../assets/images/deal.png";
import { Button, Input, Img, Heading, Text } from "./..";
import { Link } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const items = [
  {
    key: '1',
    label: (
      <Link to={'/profile'} >
        User Profile
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to={'/offer'}>
        Offer Sent
      </Link>
    ),
   

  },
  {
    key: '3',
    label: (
      <Link to={'/saved'}>
       Saved Properties
      </Link>
    ),
  
  },
  {
    key: '4',
    danger: true,
    label: (
      <Link to={''}>
       Logo Out
      </Link>
    ),
  },
];


export default function Header({ ...props }) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  // const [open, setOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2); 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const handleClicks = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  return (
  
    <header  {...props} >

    
<div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1200px]">
        <div className="flex flex-row justify-start items-start gap-[11px]">
          <Link to={'/'}>
          <Img src={deal} alt="Best Off Market Deal" className="h-[60px] w-[80px]" />
          </Link>
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
            <div className="flex flex-row justify-start  w-[22%] gap-1.5">
              <Heading as="h6" style={{color:'#fff'}}><Link to={'/aboutus'}>ABOUT US</Link></Heading>
              {/* <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[16px] w-[16px]" /> */}
            </div>
            {/* <Space > */}
            <div className="flex flex-row justify-start items-start w-[22%] gap-1.5">
        
        <Heading as="h6" onClick={handleClick} style={{color:'#fff'}}>DEALS <DownOutlined style={{color:'white'}}/> </Heading>
   
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
        <Link to={'/listing'} >
        Sales Propertes
      </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link to={'/subDeals'}>
        Sub to Deal
      </Link>
        </MenuItem>
       
        <MenuItem onClick={handleClose}>
        <Link to={'/sellerFinance'}>
       Seller Finance
      </Link>
        </MenuItem>
      
      </Menu>
       
       
       
             
              {/* <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[16px] w-[16px]" /> */}
            </div>
            <div  className="flex flex-row justify-start items-start w-[28%] gap-1.5">

       <Heading onClick={handleClicks} as="h6" style={{color:'#fff'}}> PROPERTIES <DownOutlined style={{color:'white'}}/></Heading>
        
      <Menu
        anchorEl={setAnchorEl2}
        id="account-menu2"
        open={open2}
        onClose={handleClose2}
        onClick={handleClose2}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose2}>
        <Link to={'/all'} >
        All Propertes
      </Link>
        </MenuItem>
        <MenuItem onClick={handleClose2}>
        <Link to={'/offer'}>
        Multi-Family
      </Link>
        </MenuItem>
       
        <MenuItem onClick={handleClose2}>
        <Link to={'/saved'}>
       Seller Finance
      </Link>
        </MenuItem>
      
      </Menu>
       
              
              
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
                                                         <Dropdown
                  menu={{
                    items,
                  }}
                >

                  <a href="" onClick={(e) => e.preventDefault()}>
                    <Space>

                      <Img src="images/user.png" alt="arrowdown_one" className="h-[40px] w-[40px]" />
                      <a onClick={() => (setFlyerTwo(!flyerTwo), setFlyer(false))} alt="arrowdown_one" className="h-[25px] w-[85px]" > <Heading as="h6" style={{ color: '#fff' }}>Hi Freeman</Heading>
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

                    </Space>
                  </a>

                </Dropdown> 

                    
                    
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
           



                  
        </div>
    
      </div>
    </header>
    
  );
}
