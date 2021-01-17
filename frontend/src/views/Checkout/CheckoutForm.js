// @ts-nocheck
/* eslint-disable max-len */
import React from "react";
import { toast } from "react-toastify";

import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import {
  TextField,
  Modal,
  Box,
  Typography,
  Button,
  Grid,
  makeStyles,
  Card,
  CardHeader,
  Divider,
  CardContent,
  OutlinedInput,
} from "@material-ui/core";

import { states } from "../../constants/index";

toast.configure({
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
});

const useStyles = makeStyles((theme) => ({
  root: {},

  formControl: {
    minWidth: 160,
  },
  formControl2: {
    width: "100%",
  },
  cardHeader: {
    textAlign: "center",
  },
}));


/* 

  @TODO: connstruct cli argument in each form and
  pass to backend

  const [arg1, setArg1] = React.useState();
  const [arg2, setArg2] = React.useState();
  const [exe, setExe] = React.useState('matrixmult')

  const cliArg  = exe + arg1 + arg2;
*/


function CheckoutForm(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [nameOnCard, setNameOnCard] = React.useState();
  const [cardNumber, setCardNumber] = React.useState();
  const [expDate, setExpDate] = React.useState();
  const [securityCode, setSecurityCode] = React.useState();

  const [firstName, setFirstname] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [address, setAddress] = React.useState();
  const [city, setCity] = React.useState();
  const [state, setState] = React.useState();
  const [zip, setZip] = React.useState();
  const [country, setCountry] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();
  const [promoCode, setPromoCode] = React.useState();
  const [taxes, setTaxes] = React.useState();
  const [total, setTotal] = React.useState({});

  const [openModal, setOpenModal] = React.useState();

  const history = useHistory();

  React.useEffect(() => {}, []);

  return (
    <Grid
      container
      style={{
        marginTop: 10,
      }}
      spacing={1}
      alignItems="center"
      justify="center"
    >
      <Grid container item xs={12}>
        <Grid container item justify="flex-start" xs={6}>
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            onClick={() => {
              history.push("/app/passenger");
            }}
          >
            Back
          </Button>
        </Grid>
      </Grid>
      {/* FORMS */}
      <Box p={5} />
      <Grid container spacing={1} item xs={12}>
        <Grid item md={7} xs={12}>
          <Card
            style={{
              backgroundColor: "lightgrey",
              border: "2px solid black",
            }}
          >
            <CardHeader className={classes.cardHeader} title="Customer Info" />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={!firstName ? true : false}
                    helperText={
                      !firstName ? "please enter a first name" : false
                    }
                    label="First Name"
                    name="first_name"
                    fullWidth
                    type="text"
                    variant="outlined"
                    value={firstName}
                    onChange={(event) => {
                      setFirstname(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={!lastName ? true : false}
                    helperText={!lastName ? "please enter a last name" : false}
                    label="Last Name"
                    name="last_name"
                    fullWidth
                    type="text"
                    variant="outlined"
                    value={lastName}
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                  />
                </Grid>
              </Grid>
              <Box p={1} />
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={!address ? true : false}
                    helperText={!address ? "please enter a address" : false}
                    label="Address"
                    name="address"
                    fullWidth
                    type="text"
                    variant="outlined"
                    value={address}
                    onChange={(event) => {
                      setAddress(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={!city ? true : false}
                    helperText={!city ? "please enter a city" : false}
                    label="City"
                    name="city"
                    fullWidth
                    type="text"
                    variant="outlined"
                    onChange={(event) => {
                      setCity(event.target.value);
                    }}
                    value={city}
                  />
                </Grid>
              </Grid>
              <Box p={1} />
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={!zip ? true : false}
                    helperText={!zip ? "please enter a zip" : false}
                    label="Zip"
                    name="zip"
                    fullWidth
                    type="text"
                    variant="outlined"
                    value={zip}
                    onChange={(event) => {
                      setZip(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    select
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={!state ? true : false}
                    helperText={!state ? "please enter a state" : false}
                    label="State"
                    variant="outlined"
                    className={classes.formControl2}
                    SelectProps={{
                      native: true,
                    }}
                    onChange={(event) => {
                      setState(event.target.value);
                    }}
                    value={state}
                  >
                    {states.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs>
                  <TextField
                    select
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={!country ? true : false}
                    helperText={!country ? "please enter a country" : false}
                    label="Country"
                    variant="outlined"
                    className={classes.formControl2}
                    SelectProps={{
                      native: true,
                    }}
                    value={country}
                    onChange={(event) => {
                      setCountry(event.target.value);
                    }}
                  >
                    {[" ", "USA", "MX", "CD"].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              <Box p={1} />
              <Grid container spacing={1}>
                <Grid item xs>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={!email ? true : false}
                    helperText={!email ? "please enter a email" : false}
                    label="Email"
                    name="email"
                    fullWidth
                    type="text"
                    variant="outlined"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={!phone ? true : false}
                    helperText={!phone ? "please enter a phone" : false}
                    label="Phone"
                    name="phone"
                    fullWidth
                    type="text"
                    variant="outlined"
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CheckoutForm;
