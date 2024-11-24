import React from "react";
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'white',
}));

const Header = () => {
    return (
        <>
            <CssBaseline />
            <StyledAppBar position="static" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" color="primary" noWrap>
                        BlogmeUp
                    </Typography>
                </Toolbar>
            </StyledAppBar>
        </>
    );
};

export default Header;
