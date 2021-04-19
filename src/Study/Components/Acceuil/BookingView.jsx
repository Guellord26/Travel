import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Hotel from "../Hotel/Hotel"
import Flight from "../Flight/Flight"
import Cars from "../Cars/Cars"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function BookingView() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        {/* className="w3-red" */}
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Compte" style={{backgroundColor:"#00001a"}}>
          <Tab label="Hotel " {...a11yProps(0)} style={{backgroundColor:"#00001a"}}/>
          <Tab label="Flight" {...a11yProps(1)} style={{backgroundColor:"#00001a"}}/>
          <Tab label="Cars" {...a11yProps(2)} style={{backgroundColor:"#00001a"}}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>             
          <Hotel />         
      </TabPanel>
      <TabPanel value={value} index={1}>
          <Flight />
      </TabPanel>
      <TabPanel value={value} index={2}>
          <Cars />
      </TabPanel>
    </div>
  );
}
