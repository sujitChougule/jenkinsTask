import React from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";

function Signup() {
  return (
    <Grid container justifyContent="center" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3, width: 400 }}>
        <form>
          <TextField
            name="name"
            required
            label="Enter Name"
            variant="filled"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            name="email"
            required
            label="Enter Email"
            variant="filled"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            name="password"
            required
            label="Enter Password"
            variant="filled"
            type="password"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button>Submit</Button>
        </form>
      </Paper>
    </Grid>
  );
}
export default Signup;
