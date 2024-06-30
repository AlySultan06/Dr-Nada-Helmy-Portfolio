/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Fade from "@mui/material/Fade";

function About() {
  return (
    <Fade in={true} appear={true} timeout={900}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row", md: "row" }}
          alignItems="center"
          justifyContent={{ xs: "", sm: "space-between", md: "space-evenly" }}
          sx={{ py: "100px" }}
        >
          <Box
            sx={{ maxWidth: "320px", mb: { xs: "30px", sm: "0px", md: "0px" } }}
          >
            <img
              src="../../imgs/about.jpeg"
              style={{ borderRadius: "15px" }}
            />
          </Box>

          <Box
            sx={{
              maxWidth: { xs: "auto", sm: "300px", md: "500px" },
              textAlign: { xs: "center", sm: "left", md: "left" },
            }}
          >
            <Typography
              variant="h2"
              color="colors.secondary"
              sx={{ mb: "10px" }}
            >
              I`m Nada
            </Typography>
            <Typography
              variant="body1"
              color="colors.secondary"
              sx={{ mb: "24px" }}
            >
              I am a visionary pharmacist with a passion for crafting compelling
               content. Drawing on my expertise in patient care, I
              innovate content to make complex medical information accessible.
              Through collaborative efforts and digital platforms, I aim to
              elevate healthcare communication and empower both professionals
              and the public. My mission is to inspire positive change and
              enhance understanding in healthcare through engaging and
              informative content.
            </Typography>
            <Button
              component="a"
              download
              href="../../DR-Nada CV.pdf"
              sx={{
                bgcolor: "colors.main",
                color: "white",
                textTransform: "capitalize",
                fontWeight: "800",
                fontSize: "18px",
                padding: "6px 18px",
                borderRadius: "10px",
                mb: "20px",

                "&:hover": {
                  boxShadow: "0px 10px 36px rgba(0, 0, 0, 0.15)",
                  bgcolor: "colors.main",
                },
              }}
            >
              download cV
            </Button>
          </Box>
        </Stack>
      </Container>
    </Fade>
  );
}

export default About;
