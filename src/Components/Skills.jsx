/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";

import Fade from '@mui/material/Fade';
import { useState } from 'react'
import { useEffect } from 'react'






function Skills() {

const [skillsPercent,setSkillsPercent] =useState([0,0,0,0,0,0,0,0])





    const skills = [
        {name: "Medical Knowledge", percent: skillsPercent[0]},
        {name: "Communication", percent:skillsPercent[1]},
        {name: "Presentation", percent: skillsPercent[2]},
        {name: "SEO and Digital Marketing", percent: skillsPercent[3]},
        {name: "Critical Thinking", percent: skillsPercent[4]},
        {name: "Creative Content Development", percent: skillsPercent[5]},
        {name: "Research", percent: skillsPercent[6]},
        {name: "Computer Skills: (Microsoft Office package, Minitab Software, Internet Applications, SPSS)", percent: skillsPercent[7]}
    ];
    

    useEffect(
      () => setSkillsPercent([94,87,93,90,97,86,91,94])
      ,[])

    
  

  return (
<Fade in={true} appear={true} timeout={900}>
    <Container maxWidth="xl"  sx={{display:{xs:"block",sm:"grid",md:"grid"},py:"100px",gridTemplateColumns:"45% 45%",alignItems:"center",justifyContent:"space-between",}}>
        {skills.map((sk) => {
            return (
                <Box sx={{mb:"40px"}} key={sk.name}>
            <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center", mb: "10px"}}>
              <Typography
                variant="body1"
                color="colors.secondary"
                sx={{fontWeight:"600" }}
              >
                {sk.name}
              </Typography>
              <Typography variant="body1" color="colors.secondary" sx={{fontWeight:"bold"}}>
                {`${sk.percent}%`}
              </Typography>
            </Box>
    
            <LinearProgress variant="determinate" value={sk.percent} sx={{height:"10px",borderRadius:"3px"}} />
          </Box>
            )
        })}
      
    </Container>
    </Fade> 
  );
}

export default Skills;
