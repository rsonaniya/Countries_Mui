import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import InfoIcon from "@mui/icons-material/Info";

interface CountryCardProps {
  country: {
    name: {
      official: string;
      common: string;
    };
    flags: {
      png: string;
    };
    capital: string[];
    population: number;
    area: number;
    continents: string[];
    maps: {
      googleMaps: string;
    };
  };
}

export default function CountryCard({ country }: CountryCardProps) {
  const navigate = useNavigate();

  const handleAboutButtonClick = (country: CountryCardProps["country"]) => {
    navigate(`country/${country.name.common}`, { state: { country } });
  };

  return (
    <Card
      sx={{
        width: 370,
        height: 450,
        paddingBottom: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        style={{ height: 200, width: "100%", borderBottom: "1px solid" }}
        src={country.flags.png}
        title={country.name.official}
        alt={country.name.official}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          <strong>{country.name.common}</strong>
        </Typography>
        <Typography variant="h6" align="center">
          Capital: <strong>{country.capital}</strong>
        </Typography>
        <Typography align="center">
          Population:<strong>{country.population}</strong>
        </Typography>
        <Typography align="center">
          Area:
          <strong>
            {country.area} KM <sup>2</sup>
          </strong>
        </Typography>
        <Typography align="center">
          Continent:<strong>{country.continents.join(",")}</strong>
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          size="small"
          variant="contained"
          color="success"
          href={country.maps.googleMaps}
          target="_blank"
          endIcon={<PlaceIcon />}
        >
          Location
        </Button>
        <Button
          size="small"
          variant="contained"
          color="success"
          onClick={() => handleAboutButtonClick(country)}
          endIcon={<InfoIcon />}
        >
          About
        </Button>
      </Box>
    </Card>
  );
}
