import React , { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import { Heading, Img, Text,  } from "../../components";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


import { Button, Upload } from 'antd';
import {Modal, Col, Row, Typography,Select} from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons'
import {
  EditOutlined  ,
  DeleteOutlined
} from '@ant-design/icons';
const columns = [
  { id: 'Image', label: 'Image', minWidth: 170 },
  { id: 'Title', label: 'Title', minWidth: 100 },
  {
    id: 'Location',
    label: 'Location',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Price',
    label: 'Price',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Type',
    label: 'Property Type',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Deal',
    label: 'Deal Type',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Action',
    label: 'Action',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(Image, Title, Location, Price,Type,Deal,Status,Action) {
  // const density = population / size;
  return { Image, Title, Location, Price ,Type,Deal,Status,Action};
}

const rows = [
  createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
 
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
 
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
   createData(<img src='https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600' width={100} height={100} style={{borderRadius:'5px'}}/>,
   '5 Bedroom Apartment ', '2118 67th Ave S, Saint Petersburg, FL','$100,000','Multi-Family', 'Sale',   <Chip label="Available" color="success" />,<><EditOutlined /> <DeleteOutlined /></>),
 
];

const props = {
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'uploading',
      url: 'http://www.baidu.com/xxx.png',
      percent: 33,
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500',
      // custom error message to show
      url: 'http://www.baidu.com/zzz.png',
    },
  ],
};

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [loading, setLoading] = useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [open, setOpen] = useState(false);
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  return (
    <>
    <Grid container spacing={2}>
    <Grid item xs={8}>
    <div className="flex flex-col items-right justify-start w-full gap-[15px]" style={{textAlign:'left'}}>
                    <Heading size="2xl" as="h1" className="tracking-[-0.92px]" style={{textAlign:'left', color:'black'}}>
                      <>
                      All Properties
                      </>
                    </Heading>
                    <Text  as="p" style={{textAlign:'left', color:'black'}}>
                    An overview of all your users, listed properties and payments
                    </Text>
                  </div>
    </Grid>
    <Grid item xs={4} className=" items-left ">
    <Button onClick={showModal}  style={{width:'170px',height:'43px', borderRadius:'10px', background:'#008080',color:'white'}} >+  Add Property</Button>
    </Grid>
   
  </Grid>
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
    <Modal
title="Add Property"
open={open}
onOk={handleOk}
confirmLoading={confirmLoading}
onCancel={handleCancel}
footer={[
  <>
  <Button
    key="submit"
    type="primary"
    style={{ backgroundColor: '#ffff', color: '#008080',borderColor:"#008080"  }}
    loading={confirmLoading}
    onClick={handleOk}
  >
    Cancel
  </Button>
    <Button
    key="submit"
    type="primary"
    style={{ backgroundColor: '#008080', color: 'white',  }}
    loading={confirmLoading}
    onClick={handleOk}
  >
    + add Property
  </Button></>
]}
>
  <br/>
<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
  <Col span={24}>
    <Typography style={{ color: '#000000', paddingTop:'10px' }}>Property Title</Typography>
    {/* <Input  style={{ color: '#000000' }} placeholder="Enter meeting Purpose " /> */}
    <TextField id="outlined-basic" style={{ marginTop:'10px',  width:'100%'}}  variant="outlined" />

  </Col>
  <Col span={24}>
    <Typography style={{ color: '#000000'}}>Property Type</Typography>
    <Select
          // size={'middle'}
          defaultValue="Select"
          // onChange={}
          style={{
            width: '100%',
             paddingTop:'10px',
             height:'50px' ,
          }}
          // options={options}
        />
  </Col>
  <Col span={24}>
    <Typography style={{ color: '#000000', paddingTop:'10px'  }}>Deal Type</Typography>
    <Select
          // size={'middle'}
          defaultValue="Select"
          // onChange={}
          style={{
            width: '100%', paddingTop:'10px', height:'50px' , 
          }}
          // options={options}
        />
  </Col>
  <Col span={24}>
    <Typography style={{ color: '#000000' }}>Price</Typography>
    <TextField id="outlined-basic" style={{ marginTop:'10px',  width:'100%'}}  variant="outlined" />

  </Col>
  <Col span={24}>
    <Typography style={{ color: '#000000' }}>Address</Typography>
    <TextField id="outlined-basic" style={{ marginTop:'10px',  width:'100%'}}  variant="outlined" />

  </Col>
  <Col span={8} style={{ marginTop: 10 }}>
    <Typography>Bedroom</Typography>
    <Select
          // size={'middle'}
          defaultValue="Select"
          // onChange={}
          style={{
            width: '100%', paddingTop:'10px', height:'50px' , 
          }}
          // options={options}
        />
  </Col>
  <Col span={8} style={{ marginTop: 10 }}>
    <Typography>BathRoom</Typography>

    <Select
          // size={'middle'}
          defaultValue="Select"
          // onChange={}
          style={{
            width: '100%', paddingTop:'10px', height:'50px' , 
          }}
          // options={options}
        />
  </Col>

  <Col span={8} style={{ marginTop: 10 }}>
    <Typography>Kitchen</Typography>

    <Select
          // size={'middle'}
          defaultValue="Select"
          // onChange={}
          style={{
            width: '100%', paddingTop:'10px', height:'50px' , 
          }}
          // options={options}
        />
  </Col>
  <Col span={6} style={{ marginTop: 10 }}>
    <Typography>Sq. Footage</Typography>

    <TextField id="outlined-basic" style={{ marginTop:'10px',  width:'100%'}}  variant="outlined" />

  </Col>
  <Col span={6} style={{ marginTop: 10 }}>
    <Typography>Parking</Typography>

    <TextField id="outlined-basic" style={{ marginTop:'10px',  width:'100%'}}  variant="outlined" />

  </Col>
  <Col span={6} style={{ marginTop: 10 }}>
    <Typography>Year Built</Typography>

    <TextField id="outlined-basic" sx={{ marginTop:'10px',  width:'100%'}}  variant="outlined" />

  </Col>
  <Col span={6} style={{ marginTop: 10 }}>
    <Typography>Lot Size</Typography>

    <TextField id="outlined-basic" style={{ marginTop:'10px',  width:'100%'}}  variant="outlined" />

  </Col>

  <Col span={24} style={{ marginTop: 10 }}>
  <Typography>Description</Typography>
  <TextField
          id="outlined-multiline-static"
 
          multiline
          rows={4}
          defaultValue="Description"
          style={{ marginTop:'10px',  width:'100%'}} 
        />
  </Col>
  <Col span={24} style={{ marginTop: 10 }}>
  <Typography>Image</Typography>

  <Upload 
          // {...props}
          >
           
            <div    className="avatar-uploader">
              <p className="ant-upload-drag-icon" style={{ marginLeft: '220px', fontSize: '50px', color: '#01A862' }}>
                <CloudUploadOutlined />
              </p>
              <p className="ant-upload-text" style={{ marginLeft: '100px', textAlign: 'center' }}>Select a file or drag and drop here</p>
              <p className="ant-upload-hint" style={{ marginLeft: '100px', textAlign: 'center' }}>JPG, PNG or PDF, file size no more than 10MB</p>

              <br />
              <Button style={{ marginLeft: '200px', color: '#01A862', borderColor: '#01A862' }}>SELECT FILE</Button>
              <br />
            <p>Files Added</p>
            <br />
            </div>
        
          </Upload>
  </Col>
</Row>
</Modal>
    </>
  );
}