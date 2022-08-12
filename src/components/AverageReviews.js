import React from "react";
import { Container } from "@mui/system";
import { Card, Typography } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { IconButton } from "@mui/material";

export default function AverageReviews() {
return(
    <Card sx={{ width: 500 }}>
        <CardHeader 
          title="Average Review Ratings"/>
          <CardContent>
            <Typography>
                5 Stars
            </Typography>
          </CardContent>
    </Card>
    

)
}