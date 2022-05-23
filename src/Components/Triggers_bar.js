import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Typography from '@mui/material/Typography';

export default function Triggers_bar() {
    return (

<Box>
<ButtonGroup variant="text" aria-label="text button group" >
 
 <Button><Link href="https://daily.noon.com/uae-en/all-products/" underline="none" >
  <Typography style={{ fontWeight: 600 }}>ALL CATEGORIES <KeyboardArrowDownIcon /></Typography></Link></Button>
<Button><Link href="https://daily.noon.com/uae-en/electronics/" underline="none">
  <Typography style={{ fontWeight: 600 }}>Electronics</Typography></Link></Button>
<Button><Link href="https://daily.noon.com/uae-en/fashion-men/" underline="none">
  <Typography style={{ fontWeight: 600 }}>Men</Typography></Link></Button>
<Button><Link href="https://daily.noon.com/uae-en/fashion-women/"underline="none" >
  <Typography style={{ fontWeight: 600 }}>Women</Typography></Link></Button>
<Button><Link href="https://daily.noon.com/uae-en/home-kitchen/" underline="none" >
  <Typography style={{ fontWeight: 600 }}>Home</Typography></Link></Button>
<Button><Link href="https://daily.noon.com/uae-en/beauty/"underline="none" >
  <Typography style={{ fontWeight: 600 }}>Beauty &amp; Fragrance</Typography></Link></Button>
<Button><Link href="https://daily.noon.com/uae-en/toys/"  underline="none" >
 <Typography style={{ fontWeight: 600 }}>Baby &amp; Toys</Typography></Link></Button>
<Button><Link href="https://daily.noon.com/uae-en/grocery" underline="none">
<Typography style={{ fontWeight: 600 }}> Grocery</Typography></Link></Button>
<Button><Link href="/uae-en/sports-outdoors/" underline="none" >
  <Typography style={{ fontWeight: 600 }}>Sports</Typography></Link></Button>
<Button><Link href="/uae-en/ae-bestsellers/" underline="none"  >
  <Typography style={{ fontWeight: 600 }}>Bestsellers</Typography></Link></Button>
<Button><Link href="https://sell.withnoon.com/" underline="none">
  <Typography style={{ fontWeight: 600 }}>Sell on noon</Typography></Link></Button>

 </ButtonGroup>
 </Box>
    );
}