/* eslint-disable react/prop-types */
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom'

export default function ButtonAppBar() {

  return (
    <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center' sx={{ flexGrow: 1 }}>
      {/* <Avatar className='avatar' alt="Kevin" src={avatar} /> */}
      <Link component={RouterLink} to='/' underline='none' sx={{flexGrow: 1}}>
        <Typography variant="h6" p={2} component="div" color='textPrimary' fontWeight={600} sx={{ letterSpacing: 1.5 }}>
          Kevin Balmores
        </Typography>
      </Link>
      <Link component={RouterLink} to='/about' underline='none'>
        <Typography variant='h6' p={2} color='textPrimary' fontWeight={600} sx={{ letterSpacing: 1.5 }}>
          About
        </Typography>
      </Link>
    </Box>
  );
}