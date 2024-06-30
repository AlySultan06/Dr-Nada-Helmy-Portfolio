/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [validation, setValidation] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const [loading, setLoading] = useState("normal");

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|yahoo)$/;

    if (formData.name.trim() === "") {
      setErrors((prevState) => ({
        ...prevState,
        name: "Name is required",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        name: "",
      }));
    }

    if (!emailRegex.test(formData.email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Enter a valid email",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        email: "",
      }));
    }

    if (formData.email.trim() === "") {
      setErrors((prevState) => ({
        ...prevState,
        email: "Email is required",
      }));
    }

    if (formData.message.trim() === "") {
      setErrors((prevState) => ({
        ...prevState,
        message: "Message is required",
      }));
    } else if (formData.message.trim().length < 10) {
      setErrors((prevState) => ({
        ...prevState,
        message: "Message should be at least 10 characters",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        message: "",
      }));
    }

    setValidation({
      name: formData.name.trim() !== "",
      email: emailRegex.test(formData.email) && formData.email.trim() !== "",
      message:
        formData.message.trim() !== "" && formData.message.trim().length >= 10,
    });

    //is form valid

    if (!validation.name || !validation.email || !validation.message) {
      setIsFormValid(false);
    } else if (validation.name && validation.email && validation.message) {
      setIsFormValid(true);
    }
  }, [formData, validation.name, validation.email, validation.message]);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    emailjs.init("emhZupOE1kxGRCE2R");

    const serviceId = "service_ueoc02s";

    const templateId = "template_1g81hdo";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams)
      .then((r) => {
        setLoading(false);
        console.log(r);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (!touched[name]) {
      setTouched({ ...touched, [name]: true });
    }
  }

  return (
    <Fade in={true} appear={true} timeout={900}>
      <Container
        maxWidth="lg"
        sx={{ py: "70px", display: "flex", justifyContent: "center" }}
        className={loading === "normal" ? "" : "loading"}
      >
        <ContactForm
          formData={formData}
          touched={touched}
          validation={validation}
          errors={errors}
          isFormValid={isFormValid}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setTouched={setTouched}
          loading={loading}
          isLoading={setLoading}
        />
      </Container>
    </Fade>
  );
}

function ContactForm(props) {
  if (props.loading === "normal") {
    return (
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          width: "80%",
          alignItems: "center",
        }}
        onSubmit={props.handleSubmit}
      >
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={props.formData.name}
          error={props.touched.name && !props.validation.name}
          helperText={
            props.touched.name && !props.validation.name && props.errors.name
          }
          variant="outlined"
          type="name"
          InputProps={{
            style: {
              borderRadius: "15px",
            },
          }}
          onChange={props.handleChange}
          onBlur={() => props.setTouched({ ...props.touched, name: true })}
        />
        <TextField
          fullWidth
          type="email"
          name="email"
          error={props.touched.email && !props.validation.email}
          helperText={
            props.touched.email && !props.validation.email && props.errors.email
          }
          value={props.formData.email}
          label="Email"
          InputProps={{
            style: {
              borderRadius: "15px",
            },
          }}
          onChange={props.handleChange}
          onBlur={() => props.setTouched({ ...props.touched, email: true })}
        />
        <TextField
          fullWidth
          multiline
          error={props.touched.message && !props.validation.message}
          helperText={
            props.touched.message &&
            !props.validation.message &&
            props.errors.message
          }
          value={props.formData.message}
          label="Message"
          name="message"
          rows={10}
          InputProps={{
            style: {
              borderRadius: "15px",
            },
          }}
          onChange={props.handleChange}
          onBlur={() => props.setTouched({ ...props.touched, message: true })}
        />

        <Button
          type="submit"
          disabled={!props.isFormValid}
          sx={{
            bgcolor: "colors.main",
            color: "white",
            textTransform: "capitalize",
            fontWeight: "800",
            fontSize: "18px",
            padding: "6px 18px",
            borderRadius: "10px",
            mb: "20px",
            width: "100%",
            "&:hover": {
              boxShadow: "0px 10px 36px rgba(0, 0, 0, 0.15)",
              bgcolor: "colors.main",
            },
            "&.Mui-disabled": {
              opacity: 0.5,
              color: "white",
            },
          }}
        >
          Send Message
        </Button>
      </form>
    );
  }

  if (props.loading === true) {
    return <div className="loader"></div>;
  }

  if (props.loading === false) {
    return (
      <Fade in={true} appear={true} timeout={900}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <DoneAllIcon sx={{ color: "colors.main", fontSize: "110px" }} />
          <Typography
            variant="h3"
            color="colors.secondary"
            sx={{ textAlign: "center", mb: "20px" }}
          >
            Message Recieved successfully
          </Typography>
          <Typography
            variant="body1"
            color="colors.secondary"
            sx={{ textAlign: "center" }}
          >
            I will contact you in the shortest time possible
          </Typography>
        </Box>
      </Fade>
    );
  }
}

export default Contact;
