import React, {
    useCallback,
    useContext
  } from "react";
  import Grid from "@mui/material/Grid";
  import Box from "@mui/material/Box";
  import TextField from "@mui/material/TextField";
  import Button from "@mui/material/Button";
  import Typography from "@mui/material/Typography";
  
  export default function FirstStep() {
    return (
      <>
      <br/>
        <Grid container spacing={12} >
        
          <Grid item xs={12} sm={12}>
          <Typography sx={{ color:'black'}}>Make an Offer</Typography> 
          <br/>
            <TextField
              // variant={variant}
              // margin={margin}
              fullWidth
              label="Offer Amount"
              name="Offer Amount"
              placeholder="Offer Amount"
             



            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
            
              style={{marginTop:'-70px'}}
              fullWidth
              label="EMD Amount"
              name="EMD Amount"
              placeholder="EMD Amount"
             



            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
            
              style={{marginTop:'-100px'}}
              fullWidth
              label="Buyer Name"
              name="Buyer Name"
              placeholder="Buyer Name"
             



            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
            
              style={{marginTop:'-120px'}}
              fullWidth
              label="Buyer Company"
              name="Buyer Company"
              placeholder="Buyer Company"
             



            />
          </Grid>

        
        </Grid>

      
      </>
    );
  
  
   
  
  }
  