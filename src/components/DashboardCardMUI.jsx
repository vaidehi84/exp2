import { Grid, Card, CardContent, Typography } from "@mui/material";

export default function DashboardCardMUI() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Department</Typography>
            <Typography>AIML - CSE</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Current Semester</Typography>
            <Typography>6th Semester</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Career Goal</Typography>
            <Typography>Software Engineer 💻</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
