import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaPhoneAlt, FaFax, FaFacebook, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

export default function ContactPopup() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}><p className='under'>Contact</p></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <p className='text-[28px] font-medium'>Contact Us</p>
            <p className='font-semibold mt-5 mb-1 text-gold'>Lifestyle Medly</p>
            {/* <p>441 US-130</p>
            <p className='mb-5'>East Windsor, NJ 08520</p> */}
            <div className='flex justify-start items-center gap-3'><FaPhoneAlt className='h-3 w-3 text-gold' /> <p>201-844-9062</p></div>
            <div className='flex justify-start items-center gap-3'><FaFax className='h-3 w-3 text-gold' /><p>201-365-5737</p></div>
            <div className='flex justify-start items-center gap-3'><MdEmail className='h-4 w-4 text-gold'/><a href='mailto:support@lifestylemedly.com' className="hover:text-maize">support@lifestylemedly.com</a></div>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}