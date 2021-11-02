import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Hero, Element, ImageContainer, Container, Item } from "./about.element";
import { HeroName } from '../contact/contact.element';
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .0.3',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const About = ({ content }) => {


    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Container>

            <Hero>
                {content.map((item, index) => (

                    <ImageContainer src={item} />
                ))}
            </Hero>
            <Item>
                <HeroName to="/">
                    <h3 >Derick Zihalirwa</h3>
                    <p>Architect</p>
                </HeroName>
                <Element>

                    <h2>Question People Ask</h2>

                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>What is usually needed for a project? </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Whether the project is a new home or a residential addition or significant remodel, you will need governing agency approval and permits. This is to ensure that the new structures will be safe to use.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography>Who will be on our project?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Whether the project is a new home or a residential addition or significant remodel, you will need governing agency approval and permits. This is to ensure that the new structures will be safe to use.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <Typography>Can we offer own design?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>

                                Whether the project is a new home or a residential addition or significant remodel, you will need governing agency approval and permits. This is to ensure that the new structures will be safe to use.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Element>
            </Item>

        </Container>
    );
}
export default About;
