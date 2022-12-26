import React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import LaunchIcon from "@mui/icons-material/Launch";
import MenuIcon from "@mui/icons-material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpenModal(open);
  };

  const sidebarItems = [
    {
      text: "Home Page",
      icon: <HomeIcon />,
      href: "/home",
    },
    {
      text: "Create request",
      icon: <AddIcon />,
      href: "/create_request",
    },
    {
      text: "View request",
      icon: <LaunchIcon />,
      href: "/view_request",
    },
    {
      text: "Cancel request",
      icon: <DeleteIcon />,
      href: "/cancel_request",
    },
  ];

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <Drawer anchor="right" open={isOpenModal} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 250,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {sidebarItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.href}
                  style={{
                    textDecoration: "none",
                    color: "rgba(0, 0, 0, 0.87)",
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Sidebar;
