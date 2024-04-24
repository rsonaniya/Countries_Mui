import React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Grid,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MuiLink from "@mui/material/Link";
import NotFoundPage from "./NotFountPage";

export default function CountryDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const country = location.state ? location.state.country : null;

  return (
    <Container component={Paper} sx={{ padding: 2, marginTop: 10 }}>
      {country ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center" variant="h4">
              Showing Detail for
              <strong>
                {" "}
                {country.name.official} {country.flag}
              </strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
              <Button
                onClick={() => navigate("/Countries_Mui")}
                variant="contained"
                color="warning"
                startIcon={<ArrowBackIosIcon />}
              >
                Back to Home Page
              </Button>
              <Button
                target="_blank"
                href={`https://en.wikipedia.org/wiki/${country.name.common}`}
                endIcon={<ArrowForwardIosIcon />}
                variant="contained"
                color="success"
              >
                More Details on Wikipedia
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ overflowX: "auto" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Field</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Detail</strong>
                    </TableCell>

                    <TableCell>
                      <strong>Field</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Detail</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Official Name</TableCell>
                    <TableCell>{country.name.official}</TableCell>
                    <TableCell>Common Name</TableCell>
                    <TableCell>{country.name.common}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Capital City</TableCell>
                    <TableCell>{country.capital}</TableCell>
                    <TableCell>Currency(s)</TableCell>
                    <TableCell>{Object.keys(country.currencies).join(",")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Is It An Independent Country?</TableCell>
                    <TableCell>{country.independent ? "Yes" : "No"}</TableCell>
                    <TableCell>Std Code</TableCell>
                    <TableCell>{country.idd.root + country.idd.suffixes[0]}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Area in Km <sup>2</sup>
                    </TableCell>
                    <TableCell>{country.area}</TableCell>
                    <TableCell>Population</TableCell>
                    <TableCell>{country.population}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Time-Zones</TableCell>
                    <TableCell>{country.timezones.map((time: string) => time.slice(3, 9)).join(",")}</TableCell>
                    <TableCell>Continents</TableCell>
                    <TableCell>{country.continents.join(",")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>First Day Of Week</TableCell>
                    <TableCell>{country.startOfWeek.charAt(0).toUpperCase() + country.startOfWeek.slice(1)}</TableCell>
                    <TableCell>Language(s)</TableCell>
                    <TableCell>
                      {Object.keys(country.languages)
                        .map((language) => country.languages[language])
                        .join(",")}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>GoogleMap Location</TableCell>
                    <TableCell>
                      <MuiLink href={country.maps.googleMaps} target="_blank" rel="noopener">
                        GoogleMap
                      </MuiLink>
                    </TableCell>
                    <TableCell>Open StreetMaps</TableCell>
                    <TableCell>
                      <MuiLink href={country.maps.openStreetMaps} target="_blank" rel="noopener">
                        OpenStreetMaps
                      </MuiLink>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <NotFoundPage />
      )}
    </Container>
  );
}
