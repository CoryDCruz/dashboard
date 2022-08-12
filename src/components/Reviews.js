import React from "react";
import { Card, Typography } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";


export default function Reviews() {
return(
    <Card sx={{ width: 500 }}>
        <CardHeader
          title="Reviews"/>
          <CardContent>
            <Typography>
                1000
            </Typography>
          </CardContent>
    </Card>
    

)
}