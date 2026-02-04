import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";

export default function ContactFormMUI() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Box sx={{ maxWidth: 400, mt: 4 }}>
      <h3>Contact Faculty</h3>

      <TextField
        fullWidth
        label="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Message"
        multiline
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        margin="normal"
      />

      <Button variant="contained" fullWidth>
        Send
      </Button>
    </Box>
  );
}
