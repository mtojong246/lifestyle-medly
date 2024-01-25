import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Montserrat } from 'next/font/google';
import { RxChevronDown, RxChevronUp } from "react-icons/rx";

const monst = Montserrat({ subsets: ['latin'] })

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='hidden md:block'>
      <button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <p className='flex justify-center items-center gap-1 under'>For Patients {!open ? <RxChevronDown className='h-4 w-4' /> : <RxChevronUp className='h-4 w-4'/>}</p>
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem style={monst.style} onClick={handleClose}><a className='hover:text-gold' href='https://docs.google.com/document/d/1APPpRZmCjbkBhawDEz_k7ApOngIG85n7/edit?usp=sharing&ouid=110993120075762838849&rtpof=true&sd=true' target="_blank" rel="noreferrer">Patient Consent</a></MenuItem>
        <MenuItem style={monst.style} onClick={handleClose}><a className='hover:text-gold' href='https://docs.google.com/document/d/1RemK2_8eyEV8RlUMN5f7O7cIcHwRMS0T/edit?usp=sharing&ouid=110993120075762838849&rtpof=true&sd=true' target="_blank" rel="noreferrer">Patient Registration</a></MenuItem>
        <MenuItem style={monst.style} onClick={handleClose}><a className='hover:text-gold' href='https://chluy.myaestheticrecord.com/online-booking/hash/Ml8yMDgzNl9jbGluaWNz' target="_blank" rel="noreferrer">Schedule Appointment</a></MenuItem>
      </Menu>
    </div>
  );
}
