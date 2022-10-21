import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DatasetIcon from '@mui/icons-material/Dataset';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" />
        <BottomNavigationAction label="Database" icon={<DatasetIcon />} component={Link} to="/database/search" />
        <BottomNavigationAction label="Account" icon={<AccountBoxIcon />} component={Link} to="/account" />
      </BottomNavigation>
    </Box>
  );
}
