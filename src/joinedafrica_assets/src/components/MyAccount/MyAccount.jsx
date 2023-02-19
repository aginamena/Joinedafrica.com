import React from "react";
import { Box, Container, Toolbar } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CreatePost from "./CreatePosts";
import MyPostings from "./MyPostings";
import Header from "../appStructure/Header";

export default function MyAccount() {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Header />
      <Container
        sx={{
          flexGrow: 1,
          marginBottom: "100px",
          display: "flex",
          marginTop: "100px",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab
            sx={{ alignItems: "start", textAlign: "left" }}
            label="My messages"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ alignItems: "start", textAlign: "left" }}
            label="My postings"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ alignItems: "start", textAlign: "left" }}
            label="Settings"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ alignItems: "start", textAlign: "left" }}
            label="Create posts"
            {...a11yProps(3)}
          />
        </Tabs>
        <TabPanel value={value} index={0} style={{ width: "100%" }}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} style={{ width: "100%" }}>
          <MyPostings />
        </TabPanel>
        <TabPanel value={value} index={2} style={{ width: "100%" }}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} style={{ width: "100%" }}>
          <CreatePost />
        </TabPanel>
      </Container>
    </>
  );
}
