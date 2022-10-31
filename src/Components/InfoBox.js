import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";
import numeral from 'numeral'

function InfoBox(props) {
    return (
        <div className="InfoBox">
            <Card>
                <CardContent>
                    <Typography>{props.title}</Typography>
                    <h2>{numeral(props.today).format("0a")}</h2>
                    <Typography>{numeral(props.total).format("0.0a")} Total</Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default InfoBox;