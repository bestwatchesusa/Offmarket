import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import Buttons from "@mui/material/Button";
import { CloudUploadOutlined } from '@ant-design/icons';

// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormHelperText from "@mui/material/FormHelperText";
// import Checkbox from "@mui/material/Checkbox";
// import { AppContext } from "../Context";
// const props: UploadProps = {
//   //action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
//   onChange({ file, fileList }) {
//     if (file.status !== 'uploading') {
//       console.log(file, fileList);
//     }
//   },
  // defaultFileList: [
  //   {
  //     uid: '1',
  //     name: 'xxx.png',
  //     status: 'uploading',
  //     url: 'http://www.baidu.com/xxx.png',
  //     percent: 33,
  //   },
  //   {
  //     uid: '2',
  //     name: 'yyy.png',
  //     status: 'done',
  //     url: 'http://www.baidu.com/yyy.png',
  //   },
  //   {
  //     uid: '3',
  //     name: 'zzz.png',
  //     status: 'error',
  //     response: 'Server Error 500', // custom error message to show
  //     url: 'http://www.baidu.com/zzz.png',
  //   },
  // ],
// };


import { Button, Upload } from 'antd';
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
export default function SecondStep() {
 

  return (
    <>
    <br/>
      <Grid container spacing={2}>
        <Grid item xs={12}>
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
        </Grid>

      </Grid>
      <br />

      {/* <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Buttons onClick={handleBack} sx={{ mr: 45 }}  color="success">
          Previous
        </Buttons>
        <Buttons
          variant="contained"
          disabled={isError()}
          color="success"
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Buttons>
      </Box> */}
    </>
  );
}





