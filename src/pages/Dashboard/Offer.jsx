import React,{ useState, useContext,useEffect } from 'react';
import { Modal } from 'antd';
import { AuthContext } from '../../context/AuthContext';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Breadcrumb } from 'antd';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, TextArea, Radio, RadioGroup, Text, RatingBar, GoogleMap } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header4";
import LandingPageCard from "../../components/LandingPageCard";
import { HeartFilled } from '@ant-design/icons';
import BgSky from "../../assets/images/Mask.png";
import {  Col,Typography, Row } from 'antd';
const columns = [
  { id: 'Properties', label: 'PROPERTIES', minWidth: 170 },
  { id: 'PRICE', label: 'PRICE', minWidth: 100 },
  {
    id: 'OFFERED',
    label: 'OFFERED AMOUNT',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },


 
];

function createData(Properties, PRICE, OFFERED) {
  // const density = population / size;
  return { Properties, PRICE, OFFERED};
}

const rows = [
  createData(<> <div className="flex flex-row justify-between items-center w-full pr-[47px] md:pr-5">
    <div className="flex flex-row md:flex-col justify-start w-full gap-2.5 md:gap-5">
      <img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{ borderRadius: '5px' }} />
      <div style={{ textAlign: 'left' }} className="flex flex-col items-left justify-start w-full gap-[8px]">
        <Heading as="h1">
          Bluebell Bungalow
        </Heading>
        <Heading as="h2" className="!text-gray-700">
          37 Elm Drive, Nashville, TN
        </Heading>
        <div className="flex flex-row justify-start items-center w-full gap-2" >
          <Button
            color="blue_gray_100"
            size="sm"
            variant="outline"
            shape="round"
            leftIcon={<Img src="images/img_icon_gray_700.svg" alt="icon / 16px / close" />}
            className="gap-2 font-semibold min-w-[90px] w-[12px]"
            style={{ width: 5, fontSize: 10 }}
          >
            3-Bedrooms
          </Button>
          <Button
            color="blue_gray_100"
            size="sm"
            variant="outline"
            shape="round"
            leftIcon={<Img src="images/img_icon_gray_700_20x20.svg" alt="icon / 16px / close" />}
            className="gap-2 font-semibold min-w-[100px] w-[12px]"
            style={{ width: 5, fontSize: 10 }}
          >
            3-Bathrooms
          </Button>

          <Button
            color="blue_gray_100"
            size="sm"
            variant="outline"
            shape="round"
            leftIcon={<Img src="images/img_icon_gray_700.svg" alt="icon / 16px / close" />}
            className="gap-2 font-semibold min-w-[70px] w-[12px]"
            style={{ width: 5, fontSize: 10 }}
          >
            3-Sqr.
          </Button>
          <Button
            color="blue_gray_100"
            size="sm"
            variant="outline"
            shape="round"
            leftIcon={<Img src="images/img_icon_gray_700_20x20.svg" alt="icon / 16px / close" />}
            className="gap-2 font-semibold min-w-[65px] w-[12px]"
            style={{ width: 5, fontSize: 10 }}
          >
            3-Suite
          </Button>
        </div>
      </div>


      <div>

      </div>


    </div>


  </div></>,
    '$100,000 ', '$100,000'),

    createData(<> <div className="flex flex-row justify-between items-center w-full pr-[47px] md:pr-5">
    <div className="flex flex-row md:flex-col justify-start w-full gap-2.5 md:gap-5">
      <img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{ borderRadius: '5px' }} />
      <div style={{ textAlign: 'left' }} className="flex flex-col items-left justify-start w-full gap-[8px]">
        <Heading as="h1">
          Bluebell Bungalow
        </Heading>
        <Heading as="h2" className="!text-gray-700">
          37 Elm Drive, Nashville, TN
        </Heading>
        <div className="flex flex-row justify-start items-center w-full gap-2" >
          <Button
            color="blue_gray_100"
            size="sm"
            variant="outline"
            shape="round"
            leftIcon={<Img src="images/img_icon_gray_700.svg" alt="icon / 16px / close" />}
            className="gap-2 font-semibold min-w-[90px] w-[12px]"
            style={{ width: 5, fontSize: 10 }}
          >
            3-Bedrooms
          </Button>
          <Button
            color="blue_gray_100"
            size="sm"
            variant="outline"
            shape="round"
            leftIcon={<Img src="images/img_icon_gray_700_20x20.svg" alt="icon / 16px / close" />}
            className="gap-2 font-semibold min-w-[100px] w-[12px]"
            style={{ width: 5, fontSize: 10 }}
          >
            3-Bathrooms
          </Button>

          <Button
            color="blue_gray_100"
            size="sm"
            variant="outline"
            shape="round"
            leftIcon={<Img src="images/img_icon_gray_700.svg" alt="icon / 16px / close" />}
            className="gap-2 font-semibold min-w-[70px] w-[12px]"
            style={{ width: 5, fontSize: 10 }}
          >
            3-Sqr.
          </Button>
          <Button
            color="blue_gray_100"
            size="sm"
            variant="outline"
            shape="round"
            leftIcon={<Img src="images/img_icon_gray_700_20x20.svg" alt="icon / 16px / close" />}
            className="gap-2 font-semibold min-w-[65px] w-[12px]"
            style={{ width: 5, fontSize: 10 }}
          >
            3-Suite
          </Button>
        </div>
      </div>


      <div>

      </div>


    </div>


  </div></>,
    '$100,000 ', '$100,000'),
    createData(<> <div className="flex flex-row justify-between items-center w-full pr-[47px] md:pr-5">
    <div className="flex flex-row md:flex-col justify-start w-full gap-2.5 md:gap-5">
      <img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{ borderRadius: '5px' }} />
      <div style={{ textAlign: 'left' }} className="flex flex-col items-left justify-start w-full gap-[8px]">
        <Heading as="h1">
          Bluebell Bungalow
        </Heading>
        <Heading as="h2" className="!text-gray-700">
          37 Elm Drive, Nashville, TN
        </Heading>
        <div className="flex flex-row justify-start items-center w-full gap-2" >
          <Button
            color="blue_gray_100"
            size="sm"
            variant="outline"
            shape="round"
            leftIcon={<Img src="images/img_icon_gray_700.svg" alt="icon / 16px / close" />}
            className="gap-2 font-semibold min-w-[90px] w-[12px]"
            style={{ width: 5, fontSize: 10 }}
          >
            3-Bedrooms
          </Button>
          <Button
            color="blue_gray_100"
            size="sm"
            variant="outline"
            shape="round"
            leftIcon={<Img src="images/img_icon_gray_700_20x20.svg" alt="icon / 16px / close" />}
            className="gap-2 font-semibold min-w-[100px] w-[12px]"
            style={{ width: 5, fontSize: 10 }}
          >
            3-Bathrooms
          </Button>

          <Button
            color="blue_gray_100"
            size="sm"
            variant="outline"
            shape="round"
            leftIcon={<Img src="images/img_icon_gray_700.svg" alt="icon / 16px / close" />}
            className="gap-2 font-semibold min-w-[70px] w-[12px]"
            style={{ width: 5, fontSize: 10 }}
          >
            3-Sqr.
          </Button>
          <Button
            color="blue_gray_100"
            size="sm"
            variant="outline"
            shape="round"
            leftIcon={<Img src="images/img_icon_gray_700_20x20.svg" alt="icon / 16px / close" />}
            className="gap-2 font-semibold min-w-[65px] w-[12px]"
            style={{ width: 5, fontSize: 10 }}
          >
            3-Suite
          </Button>
        </div>
      </div>


      <div>

      </div>


    </div>


  </div></>,
    '$100,000 ', '$100,000'),
];
export default function PropertyDetailsPage() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
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
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <div className="flex flex-col items-center justify-start w-full gap-10">
            <Header className="flex justify-center items-center w-full md:h-auto p-[19px] bg-white-A700" />
            <Text size="md" as="p" style={{textAlign:'center', color:'black'}}>
                    Offer Sent
                  </Text>
                  <Breadcrumb
    items={[
    
      {
        title: <a href="">Home</a>,
      },
     
      {
        title: 'Offer Sent',
      },
    ]}
  />
           
        
          

            
          </div>



          
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[39px] md:px-5 max-w-[1200px]">
             
              <div className="flex flex-row md:flex-col w-full gap-6">

              <br/><br/>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>



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
