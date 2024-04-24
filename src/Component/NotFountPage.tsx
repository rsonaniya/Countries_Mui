import { Home } from "@mui/icons-material";
import { Button, Container, Paper, Typography } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFoundPage extends Component {
  render() {
    return (
      <Container component={Paper} sx={{ padding: 2 }}>
        <Typography variant="h4" align="center">
          It seems, you are on wrong page. Go To Homepage
          <Link to={"/Countries_Mui"}>
            <Button size="large" color="success">
              <Home />
            </Button>
          </Link>
        </Typography>
      </Container>
    );
  }
}
