import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function NavBarMUI() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Vaidehi Sharma | AIML Dashboard
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
