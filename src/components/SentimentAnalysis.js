import React from "react";
import { Card, Typography } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { IconButton } from "@mui/material";

export default function SentimentAnalysis() {
return(
    <Card sx={{ width: 500 }}>
        <CardHeader 
          title="Sentiment Analysis"/>
          <CardContent>
            <Typography>
                Meh
            </Typography>
          </CardContent>
    </Card>
    

)
}