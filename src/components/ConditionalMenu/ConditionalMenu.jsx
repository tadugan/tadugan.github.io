import MenuIcon from '@mui/icons-material/Menu';
import { Button, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './ConditionalMenu.css';

function ConditionalMenu() {

    const history = useHistory();

    const [width, setWidth] = useState(window.innerWidth);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const breakPoint = 480;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    };

    const pushHistory = (destination) => {
        history.push(destination);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <div>
            {width > breakPoint ? (
                <>
                    <Button color="inherit" onClick={() => pushHistory('/about')} >About</Button>
                    <Button color="inherit" onClick={() => pushHistory('/portfolio')} >Portfolio</Button>
                    <Button color="inherit" onClick={() => pushHistory('/contact')} >Contact</Button>
                </>
            ) : (
                <>
                        <MenuIcon
                            onClick={handleClick}
                        />
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem 
                            onClick={handleClose}
                            component={Link}
                            to="/about"
                        >
                            About
                        </MenuItem>
                        <MenuItem 
                            onClick={handleClose}
                            component={Link}
                            to="/portfolio"
                        >
                            Portfolio
                        </MenuItem>
                        <MenuItem 
                            onClick={handleClose}
                            component={Link}
                            to="/contact"
                        >
                            Contact
                        </MenuItem>
                    </Menu>
                </>
            )
            }
        </div>
    );
}

export default ConditionalMenu;