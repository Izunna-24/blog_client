import React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const FooterContainer = styled(Container)(({ theme }) => ({
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    },
}));

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Blog_Client
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const footers = [
    {
        title: "Company",
        description: ["Team", "History", "Contact us", "Locations"],
    },
    {
        title: "Features",
        description: [
            "Cool Stuff",
            "Random feature",
            "Team feature",
            "Developer stuff",
            "Another stuff",
        ],
    },
    {
        title: "Resources",
        description: [
            "Resource",
            "Resource name",
            "Resource description",
            "Resource type",
        ],
    },
    {
        title: "Legal",
        description: ["Privacy Policy", "Terms of Service"],
    },
];

function Footer() {
    return (
        <React.Fragment>
            <FooterContainer maxWidth="md" component="footer">
                <Grid container spacing={4} justifyContent="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="text.secondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </FooterContainer>
        </React.Fragment>
    );
}

export default Footer;