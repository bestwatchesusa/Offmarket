import React from "react";
import Typography from "@mui/material/Typography";
import img1 from "../../assets/images/fly.png";
export default function Success() {
  return (
    <>
     <div className='flex items-center justify-center '>
                <img

                  src={img1}
                  alt="amazing-property"
                  style={{ height: '220px', width: '250px',}}
                /></div>
      <Typography variant="h2" align="center" sx={{ py: 4 }}>
        Thank you!
      </Typography>
      <Typography component="h4" align="center" sx={{ py: 4 }}>
      Your Quote has been submitted
      </Typography>
      <Typography component="p" align="center">
      Your details has been submitted and you will be contacted within the next 24-48 business hours, and a inspection time will be communicated via email.
      </Typography>
    </>
  );
}
