import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import profile_image from "../assets/profile_image.svg";


function profile() {
  const data = [
    {
      skill: "Core Python",
    },
    {
      skill: "Web development using Django and MERN stack",
    },
    {
      skill: "Automation testing using Selenium",
    }
  ];
  return (
    <div>


      <div class="my_wrapper">
        <Card>
          <CardMedia
            component="img"
            height="300"
            image="https://i.pinimg.com/236x/b7/02/52/b70252344f68cd6035cf0225fcc32d6f---day-blog-tips.jpg"
            alt="Image"
          />
          <CardContent style={{ backgroundColor: "green" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#ADD8E6"
            >
              <p><strong>Contact:</strong></p>
            </Typography>
            <Typography
              variant="body2"
              color="#ADD8E6"
              style={{ fontSize: "20px" }}
            >
              <p> <strong>Email:</strong> vishwasrvibh@gmail.com</p>
            </Typography>
            <Typography
              variant="body2"
              color="#ADD8E6"
              style={{ fontSize: "20px" }}
            >
              <p> <strong>Mobile Number:</strong> 9844504799</p>
            </Typography>
            <Typography
              variant="body2"
              color="#ADD8E6"
              style={{ fontSize: "20px" }}
            >
            </Typography>

          </CardContent>
        </Card>
      </div>
      <div class="profile_style">
        <h1>Hi, I'm Vishwas. R</h1>
        <p style={{ fontSize: "20px" }}>
          I am a fresher with excellent coding and web developing skills, proficient in popular coding languages, looking for opportunities to learn, serve and grow.
        </p>
      </div>
      <h1
        style={{
          width: "60%",
          marginLeft: "38%",
          color: "#ADD8E6",
        }}
      >
        Key skills:
      </h1>

      {data.map((e, i) => {
        return (
          <div class="new_style">
            <p style={{ fontSize: "23px" }}>{e.skill}</p>
          </div>
        );
      })}
    </div>
  );
}

export default profile
