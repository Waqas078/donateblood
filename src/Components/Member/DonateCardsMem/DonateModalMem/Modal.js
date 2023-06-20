import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Modal.css';
import { display } from '@mui/system';

function Modall(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch', display: 'flex'},
      }}
      noValidate
      autoComplete="off"
    >
     
      <div class="row">
        <div className='Display'>
      <div class="col-md-12">
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
                <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        </div>
        </div>
        </div>
    </Box>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Modall;
