import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';


const Search = styled('div')(({ theme }) => ({

  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 6.55),
  '&:hover': { backgroundColor: alpha(theme.palette.common.white, 6.55)},
  marginLeft: 10,
  marginRight: 80,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '100%',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1,0),
    paddingLeft: `calc(-1em + ${theme.spacing(3)})`,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100ch',
    },
  },
}));

export default function NavBar() {
  return (
    <Box >
      <AppBar sx={{ p: 0,  backgroundColor:'#ffea00'}} position="static" >
       
<Toolbar >     
  <Grid
  container sm={1} lg={1} md={1} xs={1} xl={2.5} > 
  <img src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" alt="noon" class="sc-afe2674f-1 iYVDXL"></img>
  </Grid>
  <Grid item p={1}>
  <img src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg" alt="country-ae" class="sc-543c9996-6 krPUtK"></img>
  </Grid>
  
       <Typography size="small" color="black">
          Deliver To     
          Dubai  
          </Typography><Typography color="black"><KeyboardArrowDownIcon /></Typography> 
          <Search><StyledInputBase placeholder="What are you looking for…?" /></Search>
          
        <Typography  
          width= '20%' 
          size="10" 
          color="black"> Arabia |
                        Sign in |
                         Cart 
                                </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
