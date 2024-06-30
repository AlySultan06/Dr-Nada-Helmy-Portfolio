/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Modal from "@mui/material/Modal";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";

import { EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Projects() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectProject] = useState({ header: "a" });

  const handleOpenModal = (project) => {
    setOpenModal(true);
    setSelectProject(project);
  };

  const projects = [
    {
      header: "Selective Pressure",
      description:
        "This project explains how the use of broad-spectrum antibiotics contributes to antibiotic resistance by killing susceptible bacteria and allowing resistant strains to thrive. It emphasizes the importance of narrowing antibiotic choices by identifying the specific causative organism.",
      image: "../../imgs/selectivepressure.png",
      craousel: false,
    },
    {
      header: "Rabies Prevention",
      description:
        "This project highlights the importance of timely rabies vaccination after an animal bite. It recommends immediate wound cleansing and a vaccine schedule on days 0, 3, 7, and 14, along with immunoglobulin on day 0. Early intervention is crucial, as symptoms indicate it's too late for treatment.",
      image: "../../imgs/rabies.png",
      craousel: false,
    },
    {
      header: "Opportunistic Infection",
      description:
        "This project opportunistic infections like candidiasis and tuberculosis, highlighting their effects on those with weakened immune systems. It also offers six tips to boost immunity: eat well, be active, get enough sleep, maintain a healthy weight, quit smoking, and avoid alcohol",
      image: "../../imgs/pdf1/infection1.png",
      craousel: true,
      slides: [
        "../../imgs/pdf1/infection1.png",
        "../../imgs/pdf1/infection2.png",
        "../../imgs/pdf1/infection3.png",
      ],
    },

    {
      header: "Healthy Habits",
      description:
        "This project explains how diabetes prevention strategies can help reduce the risk of developing diabetes. It focuses on diet, exercise, and medication, as well as the importance of regular check-ups.",
      image: "../../imgs/flyer.jpg",
      isDescription: false,
      craousel: false,
      
    },
    {
      header: "Pancreas",
      description:
        "This project explores the pancreas's role in diabetes, focusing on its regulation of blood sugar through insulin production. It highlights how deficiencies and resistance affect glucose levels, emphasizing the pancreas's crucial function in metabolic balance.",
      image: "../../imgs/pdf2/pancreas1.png",
      isDescription: true,
      craousel: true,
      slides: [
        "../../imgs/pdf2/pancreas1.png",
        "../../imgs/pdf2/pancreas2.png",
        "../../imgs/pdf2/pancreas3.png",
        "../../imgs/pdf2/pancreas4.png",
        "../../imgs/pdf2/pancreas5.png",
        "../../imgs/pdf2/pancreas6.png",
        "../../imgs/pdf2/pancreas7.png",
      ],
    },
    {
      header: "Mask Importance",
      description:
        "This project aims to educate healthcare professionals and the public about the critical role of wearing masks during medical procedures and in everyday situations. It highlights the prevention of infections, such as bacterial meningitis, linked to inadequate mask use during spinal or epidural anesthesia.",
      image: "../../imgs/pdf3/doctor1.jpg",
      isDescription: true,
      craousel: true,
      slides: [
        "../../imgs/pdf3/doctor1.jpg",
        "../../imgs/pdf3/doctor2.jpg",
        "../../imgs/pdf3/doctor3.jpg",
        "../../imgs/pdf3/doctor4.jpg",
      ]
    },
   {
      header: "Laporoscopic Surgery",
      description:
        "This project examines the role of laparoscopic surgery in treating diabetes, highlighting its benefits in managing the disease. It focuses on how minimally invasive techniques can improve patient outcomes and metabolic control.",
      image: "../../imgs/laparoscopic.jpg",
      craousel: false,
    },
  ];

  return (
    <Fade in={true} appear={true} timeout={900}>
      <Container maxWidth="xl" sx={{ py: "100px" }}>
        <Grid container justifyContent="center" spacing={5}>
          {projects.map((project) => {
            return (
              <Grid
                item
                md={5}
                sm={6}
                xs={11}
                key={project.header}
                sx={{ display: "flex", justifyContent: "center", mb: "50px" }}
              >
                <Card
                  sx={{
                    maxWidth: "350px",
                    cursor: "pointer",
                    borderRadius: "10px",
                  }}
                  className="cardScale"
                  onClick={() => handleOpenModal(project)}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt="project image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      {project.header}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ display: project.isDescription ? "block" : "none" }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
          <ModalComp
            openModal={openModal}
            setOpenModal={setOpenModal}
            selectedProject={selectedProject}
          />
        </Grid>
      </Container>
    </Fade>
  );
}

function ModalComp(props) {
  return (
    <Modal
      open={props.openModal}
      onClose={() => props.setOpenModal(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {!props.selectedProject.craousel ? (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            maxWidth:{xs:"",sm:"",md:"600px"},
            minWidth:{xs:"90%",sm:"400px",md:""},
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
           border:"none",
           outline:"none",
           
          }}
        >
          <img src={props.selectedProject.image} className = {props.selectedProject.header == "Healthy Habits" ? "swiperimg" : ""} />
        </Box>
      ) : (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={200}
          pagination={{ clickable: true }}
        >
          {props.selectedProject.slides.map((slide) => (
            <SwiperSlide
              key={slide}
             
            >
              <img src={slide} className= "swiperimg"/>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Modal>
  );
}

export default Projects;
