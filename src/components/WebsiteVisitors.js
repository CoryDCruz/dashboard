import React from "react";
import { Container } from "@mui/system";
import { Card, Typography } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { IconButton } from "@mui/material";

export default function WebsiteVisitors() {
return(
    <Card sx={{ width: 500 }}>
        <CardHeader 
          title="Website Visitors Per Day"/>
          <CardContent>
            <Typography>
                150 Visitors/Day
            </Typography>
          </CardContent>
    </Card>
    

)
}