import { Box } from "@mui/material";

interface ScrollPageProps {
  children: JSX.Element;
}

export default function ScrollPage(props: ScrollPageProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        height: { xs: "80vh", sm: "80vh", md: "85vh" },
        overflowX: "scroll",
      }}
    >
      {props.children}
    </Box>
  );
}
