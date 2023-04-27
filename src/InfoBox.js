import { Card, CardContent, Typography } from '@mui/material'
import React from 'react';
import "./InfoBox.css";

function InfoBox({title, cases, total, ...props}) {
    return (
        <Card onClick={props.onClick} className='infobox'>
            <CardContent>
                <Typography  className ='infobox_title'color="textSecondary">{title}</Typography>
                <h2 className='infobox_cases'>{cases}</h2>
                <Typography className='infobox_total' color="textSecondary">{total} Total</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox;