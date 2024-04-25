import React, {
  useCallback,
  useContext
} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


export default function FirstStep() {
  return (
    <>
    <br/>
      <Grid container spacing={12} >
        <Grid item xs={12} sm={12}>
          <TextField
            // variant={variant}
            // margin={margin}
            fullWidth
            label="Name"
            name="name"
            placeholder="john carter"
           



          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
          
            style={{marginTop:'-60px'}}
            fullWidth
            label="Name"
            name="name"
            placeholder="john carter"
           



          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
          
            style={{marginTop:'-60px'}}
            fullWidth
            label="Name"
            name="name"
            placeholder="john carter"
           



          />
        </Grid>
      

      
      </Grid>

    
    </>
  );


 

}
