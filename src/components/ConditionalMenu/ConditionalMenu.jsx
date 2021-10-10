import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './ConditionalMenu.css';

function ConditionalMenu() {

    const history = useHistory();

    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 480;

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
                <p>SMALL</p>
            )
            }
        </div>
    );
}

export default ConditionalMenu;