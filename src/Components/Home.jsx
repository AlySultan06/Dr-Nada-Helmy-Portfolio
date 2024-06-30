/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import Fade from '@mui/material/Fade';

import { Link as Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";


function Home() {
  return (
  <Fade in={true} appear={true} timeout={900}>
    <Box sx={{ py: "100px" }}>
      <Container maxWidth="lg">
        <Stack
          direction={{xs:"column", sm:"row",md:"row"}}
          aligitems="center"
          justifyContent={{xs:"space-between",sm:"space-between",md:"space-around"}}
        >
          {/* title */}
          <Box>
            <Typography
              variant="h1"
              color="colors.secondary"
              sx={{
                textTransform: "capitalize",
                lineHeight: "1.4",
                mb: "20px",
              }}
            >
              hi,
              <br />
              i`m <span style={{ color: "hsl( 224 , 89%, 60%)" }}>nada</span>
              <br /> Medical contetnt creator
            </Typography>

            <Button
              component={Link}
              to="/contact"
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
              Contact me!
            </Button>

            {/* icon box */}
            <Box
              sx={{ display: "flex", alignItems: "center", flexGap: "10px" }}
            >
              <MUILink href="mailto:nadahelmy79@outlook.com">
                <IconButton disableRipple={true}>
                  <MailIcon
                    sx={{
                      color: "colors.secondary",
                      fontSize: "30px",
                      "&:hover": { color: "colors.main" },
                    }}
                  />
                </IconButton>
              </MUILink>

              <MUILink
                href="https://www.linkedin.com/in/nada-helmy?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bmfo2rFCkTGa32lQ0Myo36Q%3D%3D"
                target="_blank"
              >
                <IconButton disableRipple={true}>
                  <LinkedInIcon
                    sx={{
                      color: "colors.secondary",
                      fontSize: "30px",
                      "&:hover": { color: "colors.main" },
                    }}
                  />
                </IconButton>
              </MUILink>



              <MUILink
                href="https://wa.me/+201005260346"
                target="_blank"
              >
                <IconButton disableRipple={true}>
                  <WhatsAppIcon
                    sx={{
                      color: "colors.secondary",
                      fontSize: "30px",
                      "&:hover": { color: "colors.main" },
                    }}
                  />
                </IconButton>
              </MUILink>



            </Box>
          </Box>

          <div>
            <svg
              className="home__blob"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="blob-clip">
                  <path
                    d="M50.2,-40.8C63.9,-22.8,73.2,-2,70.9,19.4C68.6,40.7,54.6,62.7,35.9,69.9C17.2,77.1,-6.4,69.6,-27.4,58.8C-48.4,47.9,-66.8,33.7,-70.3,16.6C-73.8,-0.5,-62.3,-20.5,-48.1,-38.6C-33.9,-56.8,-16.9,-73,0.6,-73.5C18.2,-74.1,36.5,-58.8,50.2,-40.8Z"
                    transform="translate(100 100)"
                  />
                </clipPath>
              </defs>
              <rect
                width="200"
                height="200"
                fill="#3E6FF4"
                clipPath="url(#blob-clip)"
              />
              <image
                className="home__blob-img"
                x="20"
                y="20"
                width="160"
                height="160"
                href="../../imgs/personal.png"
                clipPath="url(#blob-clip)"
              />
            </svg>
          </div>
        </Stack>
      </Container>
    </Box>
    </Fade>  
  );
}

export default Home;
