import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import food_app from "../assets/Food_app.png";
import stack_overflow_clone from "../assets/stack_overflow_clone.png";
import student_mentor from "../assets/Student_mentor.png";
import profileHomePage from "../assets/profileHomePage.png";


function Project() {
  const data = [
    {
      name: "Stack Overflow Clone",
      image: stack_overflow_clone,
      url: "https://modest-curran-106514.netlify.app/",
      desc: "An App built using MERN Stack which allows user to signup, login, post questions and other users to answer the questions",
    },
    {
      name: "Student Mentor App",
      image: student_mentor,
      url: "https://willowy-tapioca-c7a3d4.netlify.app/",
      desc: "Student Mentor App built using MERN Stack. It allows user to add a student or mentor. the users can also change mentos assigned to students",
    },
    {
      name: "Food App",
      image: food_app,
      url: "https://elegant-neumann-79ac10.netlify.app/",
      desc: "Food delivery app built using react and node js. A public food api used for fetching food list and user can add the food to cart and order it",
    },
    {
      name: "Profile app",
      image: profileHomePage,
      url: "",
      desc: "An app displaying the summary of my profile",
    },
  ];
  return (
    <>
      <h1
        style={{
          width: "60%",
          marginLeft: "5%",
          color: "#ADD8E6",
        }}
      >
        Projects:
      </h1>

      {data.map((e, i) => {
        return (
          <div class="wrapper">
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={e.image}
                alt="green iguana"
              />
              <CardContent style={{ backgroundColor: "#002244" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#ADD8E6"
                >
                  {e.name}
                </Typography>
                <Typography variant="body2" color="#ADD8E6">
                  {e.desc}
                </Typography>
                <Typography
                  style={{ backgroundColor: "white", textAlign: "center" }}
                >
                  <a
                    target="_blank"
                    href={e.url}
                  >
                    <Button style={{ color: "#002244" }} size="small">
                      Visit Website
                    </Button>
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default Project;
