import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import isoLogo from "../../../assets/Banner/Isologo.png"
import "../navBar/navBar-style.css"

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const clickHandler = (reference) => {
    window.scrollTo({
      top: reference.current.offsetTop,
      behavior: "smooth",
    })
    reference.current.focus()
  }

  return (
    <Box className="MuiBox" >
      <img src={`${isoLogo}`} alt="lslogo" class="lsologo"/>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className="navBar"value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab onClick = {() => clickHandler(props.inicio)} label="Item One" {...a11yProps(0)}></Tab>
          <Tab onClick = {() => clickHandler(props.galeryRef)} label="Item Two" {...a11yProps(1)} />
          <Tab onClick = {() => clickHandler(props.newContent)} label="Item Three" {...a11yProps(2)} />
          <Tab onClick = {() => clickHandler(props.newsLetter)} label="Item Four" {...a11yProps(3)} />
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </Box>
  );
}
