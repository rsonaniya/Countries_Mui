import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  sortValues: string[];
  window?: () => Window;
  onSearchChange: (value: string) => void;
  searchValue: string;
  onSortCountries: (sortType: string) => void;
}

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ marginBottom: "60px" }}>
      <AppBar component="nav" color="success" sx={{ height: "60px" }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { xs: "block", sm: "block", md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              Sort By
            </Typography>

            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              {props.sortValues.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#fff",
                    marginInline: { md: "5px", lg: 3, xl: 4 },

                    padding: { md: "3px", lg: 1, xl: 4 },
                  }}
                  onClick={() => props.onSortCountries(item)}
                  size="small"
                >
                  {item}
                </Button>
              ))}
            </Box>

            <TextField
              placeholder="Search A Country"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
              variant="standard"
              size="small"
              sx={{
                background: "white",
                border: "none",
                borderRadius: "10px",
                padding: "0.3rem",
                width: { sm: "100%", md: "auto" },
              }}
              value={props.searchValue}
              onChange={(e) => props.onSearchChange(e.target.value)}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 180,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              Sort By:
            </Typography>
            <Divider />
            <List>
              {props.sortValues.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary={item} onClick={() => props.onSortCountries(item)} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
}
