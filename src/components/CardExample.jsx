import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardExample = ({object}) => {
  return (
    <Card sx={{ minWidth: 200, margin: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {object.name}
        </Typography>
        <Typography variant="h5" component="div">
        {object.phone}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {object.email}
        </Typography>
        <Typography variant="body2"> {object.postalZip}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Detalles</Button>
      </CardActions>
    </Card>
  );
};

export default CardExample;
