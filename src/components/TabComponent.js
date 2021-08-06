import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Tab, Tabs } from '@material-ui/core';
import AllScan from './AllScan';
import PurchasedScan from './PurchasedScan';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

export default function TabComponent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
        <Tab label="All Scans" />
        <Tab label="Purchased Scans" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AllScan />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PurchasedScan />
      </TabPanel>
    </Paper>
  );
}
