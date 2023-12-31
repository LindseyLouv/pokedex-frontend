import { Typography, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <Container
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.primary.contrastText,
        display: { xs: "bloc", md: "flex" },
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        padding: "1rem",
        margin: "auto",
      }}
    >
      <Typography>Lindsey Louv</Typography>
      <Typography>September 2023</Typography>
      <Link
        href="https://github.com/LindseyLouv"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <GitHubIcon />
      </Link>
    </Container>
  );
}

export default Footer;
