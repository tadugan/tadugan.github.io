import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function ConditionalTitle() {

    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 480;

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <div>
            {width > breakPoint ? (
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Tim Dugan - Software Engineer
                    </Typography>
                ) : (
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Tim Dugan
                    </Typography>
                )
            }
        </div>
    );
}

export default ConditionalTitle;