import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";


function navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "orange" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Profile
            </Typography>
            <Link to="/">
              <Button style={{ color: "white" }}>
                <div>
                  <HomeIcon />
                </div>
              </Button>
            </Link>
            <a target="_blank" href="https://github.com/vishwasrr">
              <Button style={{ color: "white" }}>
                <div>
                  <GitHubIcon />
                </div>
              </Button>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vishwasr01/"
            >
              <Button style={{ color: "white" }}>
                <div>
                  <LinkedInIcon />
                </div>
              </Button>
            </a>
            <Link to="projects">
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "10px",
                }}
              >
                Projects
              </Button>
            </Link>
            <div>&nbsp;</div>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1MebEnKmtdyKgk3zEM2hYF7E2rM0_xIYw/view?usp=sharing"
            >
              <Button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "10px",
                }}
              >
                <div>Resume</div>
              </Button>
            </a>


          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default navbar
