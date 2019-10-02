import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { STOREBACK_URL } from "./constants";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        StoreBack
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#F55"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [keyCode, setKeyCode] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    setClicked(true);
    setSubmitted(false);
    const data = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password
    };
    let req = new Request(STOREBACK_URL + "/api/admin", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    });
    fetch(req)
      .then(res => res.json())
      .then(res => {
        let req = new Request(STOREBACK_URL + "/api/key/generate", {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          body: JSON.stringify({ admin_id: res.id })
        });
        fetch(req)
          .then(res => res.json())
          .then(res => {
            setSubmitted(true);
            setClicked(false);
            setApiKey(res.value);
            setKeyCode(res.key_code);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(validateForm);

  function handleClose() {
    setSubmitted(false);
  }

  function validateForm() {
    if (
      firstName !== "" &&
      lastName !== "" &&
      password !== "" &&
      email !== ""
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Get API Key
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={event => onSubmit(event)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={event => {
                  setFirstName(event.target.value);
                }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={event => {
                  setLastName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={event => {
                  setEmail(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={event => {
                  setPassword(event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!valid || (clicked && !submitted)}
          >
            {clicked && !submitted ? (
              <CircularProgress className={classes.progress} />
            ) : (
              "Get API Key"
            )}
          </Button>
        </form>
      </div>
      <Dialog
        open={submitted}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Your API Key is: {apiKey}
          </DialogTitle>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Your Key Code is: {keyCode}
          </DialogTitle>
          <DialogContentText id="alert-dialog-description">
            These will only be shown to you once, so make sure to write it down.
            Treat your API Key like a password. Include the API Key and Key Code
            in request headers you send to the API, as detailed here:
            <Link
              href="https://github.com/rguan72/StoreBack"
              target="_blank"
              rel="noopener"
            >
              {" "}
              https://github.com/rguan72/StoreBack{" "}
            </Link>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Acknowledge
          </Button>
        </DialogActions>
      </Dialog>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
