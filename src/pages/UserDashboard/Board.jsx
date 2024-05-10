import React , { useState } from 'react';
import Paper from '@mui/material/Paper';

import { Heading, Img, Text,  } from "../../components";
import Grid from '@mui/material/Grid';

import { Card,Col, Row, } from 'antd';
import { UsergroupAddOutlined ,BankOutlined} from '@ant-design/icons'
import ReactApexChart from 'react-apexcharts';

export default function StickyHeadTable() {

  const States = {

    series: [20, 40,10,5],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Pending', 'Active',"Available",'Sale'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  };
  const State =  {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['Pending Request', 'Active Request', 'Pending Payment', 'Active Payment', 'Request WithOut Task', 'Request With Task']
  
      },
      
      colors: [
        "#13d8aa",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#90ee7e",
        "#f48024",
        "#69d2e7"
      ],
    },
    
    series: [
      {
        name: "series-1",
        data: [44, 35, 155, 55, 77, 95],
       
        
      },
      
    ]
  }

  return (
    <>
  
    <Grid container spacing={2}>
    <Grid item xs={8}>
    <div className="flex flex-col items-right justify-start w-full gap-[15px]" style={{textAlign:'left'}}>
                    <Heading size="2xl" as="h1" className="tracking-[-0.92px]" style={{textAlign:'left', color:'black'}}>
                      <>
                      DASHBOARD
                      </>
                    </Heading>
                
                  </div>
    </Grid>
    <Grid item xs={4} className=" items-left ">
    {/* <Button onClick={showModal}  style={{width:'170px',height:'43px', borderRadius:'10px', background:'#008080',color:'white'}} >+  Add Property</Button>
     */}
    </Grid>
   
  </Grid>
  <br/>
  <Grid container spacing={2}>
    <Grid item xs={4}>
    <Card  bordered={false} style={{ width: 300 }}>
   <Grid container spacing={2}>
    <Grid item xs={6}>
    <div className="flex flex-col items-right justify-start w-full gap-[15px]" style={{textAlign:'left'}}>
                    <Heading size="2xl" as="h1" className="tracking-[-0.92px]" style={{textAlign:'left', color:'#008080'}}>
                      <>
                     05
                      </>
                    </Heading>
                    <Text  as="p" style={{textAlign:'left', color:'black'}}>
                    Total Users
                    </Text>
                  </div>
    </Grid>

    <Grid item xs={6}>
    <div className="flex flex-col items-right justify-start w-full gap-[15px]" style={{textAlign:'left'}}>
                    <Heading size="4xl" as="h1" className="tracking-[-0.92px]" style={{textAlign:'left', color:'black', marginTop:'15px'}}>
                      <>
                      <UsergroupAddOutlined/>
                      </>
                    </Heading>
                   
                  </div>
     
    </Grid>
    </Grid>

  </Card>
    </Grid>
    <Grid item xs={4}>
    <Card  bordered={false} style={{ width: 300 }}>
    <Grid container spacing={2}>
    <Grid item xs={6}>
    <div className="flex flex-col items-right justify-start w-full gap-[15px]" style={{textAlign:'left'}}>
                    <Heading size="2xl" as="h1" className="tracking-[-0.92px]" style={{textAlign:'left', color:'#008080'}}>
                      <>
                     50
                      </>
                    </Heading>
                    <Text  as="p" style={{textAlign:'left', color:'black'}}>
                    Total Houses
                    </Text>
                  </div>
    </Grid>

    <Grid item xs={6}>
    <div className="flex flex-col items-right justify-start w-full gap-[15px]" style={{textAlign:'left'}}>
                    <Heading size="4xl" as="h1" className="tracking-[-0.92px]" style={{textAlign:'left', color:'#008080', marginTop:'15px'}}>
                      <>
                      <BankOutlined/>
                      </>
                    </Heading>
                   
                  </div>
     
    </Grid>
    </Grid>
  </Card>
    </Grid>
    <Grid item xs={4}>
    <Card  bordered={false} style={{ width: 300 }}>
    <Grid container spacing={2}>
    <Grid item xs={6}>
    <div className="flex flex-col items-right justify-start w-full gap-[15px]" style={{textAlign:'left'}}>
                    <Heading size="2xl" as="h1" className="tracking-[-0.92px]" style={{textAlign:'left', color:'#008080'}}>
                      <>
                     05
                      </>
                    </Heading>
                    <Text  as="p" style={{textAlign:'left', color:'black'}}>
                    Total Users
                    </Text>
                  </div>
    </Grid>

    <Grid item xs={6}>
    <div className="flex flex-col items-right justify-start w-full gap-[15px]" style={{textAlign:'left'}}>
                    <Heading size="4xl" as="h1" className="tracking-[-0.92px]" style={{textAlign:'left', color:'black', marginTop:'15px'}}>
                      <>
                      <UsergroupAddOutlined/>
                      </>
                    </Heading>
                   
                  </div>
     
    </Grid>
    </Grid>
  </Card>
    </Grid>
    </Grid>


  
<br/>
<Grid container spacing={2}>
    <Grid item xs={7}>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <div className="flex flex-col items-right justify-start w-full gap-[15px]" style={{textAlign:'left'}}>
                   <br/>
                    <Heading size="2xl" as="h1" className="tracking-[-0.92px]" style={{textAlign:'left', color:'black',paddingLeft:'10px'}}>
                      <>
                     Monthly Sale Report
                      </>
                    </Heading>
                  
                  </div>
    <div id="chart">
        <ReactApexChart options={State.options} series={State.series} type="bar" width={600} height={330} />
      </div>

</Paper>
    </Grid>
    <Grid item xs={5}>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <br/> <br/> <br/>
    <div id="chart">
        <ReactApexChart options={States.options} series={States.series} type="pie" width={400} height={400} />
      </div>
      <div className="flex flex-col items-right justify-start w-full gap-[15px]" style={{textAlign:'left'}}>
                   <br/>
                    <Heading size="2xl" as="h1" className="tracking-[-0.92px]" style={{textAlign:'center', color:'black',}}>
                      <>
                     Property Report
                      </>
                    </Heading>
                    <br/>
                  </div>
</Paper>
    </Grid>
    </Grid>

  
    </>
  );
}