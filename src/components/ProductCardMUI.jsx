import { Card, CardContent, Typography, Button } from "@mui/material";

export default function ProductCardMUI() {
  return (
    <Card sx={{ maxWidth: 400, mt: 3 }}>
      <CardContent>
        <Typography variant="h6">
          Mental Health Chatbot (AI Project)
        </Typography>
        <Typography sx={{ mb: 2 }}>
          AIML based chatbot for emotional support using NLP.
        </Typography>
        <Typography>Tech: Python, ML, NLP</Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          View Project
        </Button>
      </CardContent>
    </Card>
  );
}
