// @ts-nocheck
/* eslint-disable max-len */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import axios from "axios";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

import {
  TextField,
  Box,
  Button,
  Grid,
  makeStyles,
  Card,
  CardHeader,
  Divider,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  CardContent,
  Container,
} from "@material-ui/core";

toast.configure({
  autoClose: 2000,
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
}));

function BookForm(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [response, setResponse] = React.useState(null);
  const [testData, setTestData] = React.useState([]);
  const [testDataValue, setTestDataValue] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:8000/data/select-dataset")
      .then((res) => {
        console.log(res.data.data);
        setTestData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container maxWidth={false}>
      <Grid container spacing={1} alignItems="center" justify="center">
        <Grid item xs={response ? 6 : 10}>
          <Card
            style={{
              margin: "auto",
              marginTop: "10vh",
              padding: 10,
              backgroundColor: "lightgrey",
              border: "2px solid black",
            }}
          >
            <CardHeader
              style={{ textAlign: "center" }}
              title="MATRIX MULTIPLICATION"
            />
            <Divider />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    select
                    label="Upload Data"
                    name="upload_data"
                    id="upload_data"
                    fullWidth
                    type="text"
                    variant="outlined"
                    SelectProps={{
                      native: true,
                    }}
                    onChange={(event) => {
                      setTestData(event.target.value);
                    }}
                    error={false}
                    helperText={null}
                    value={"dummy.csv"}
                  >
                    {[" ", "HOU", "JFK", "LAX", "MIA", "ORD"].map((option) => (
                      <option key={option.value} value={option.value}>
                        {option}
                      </option>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    InputLabelProps={{
                      shrink: true,
                    }}
                    select
                    label="Test Data"
                    name="test_data"
                    id="test_data"
                    fullWidth
                    type="text"
                    variant="outlined"
                    SelectProps={{
                      native: true,
                    }}
                    onChange={(event) => {
                      if (event.target.value) {
                        setTestDataValue(event.target.value);
                      }
                    }}
                    error={false}
                    helperText={null}
                    value={testDataValue}
                  >
                    <option key={null} value={null}></option>
                    {testData.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              <Box p={2} />
              <Grid container justify="center" spacing={1}>
                <Grid item xs={6}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={() => {
                      axios
                        // .post("http://localhost:8000/data/test-data", {dataSet: testDataValue})
                        .get("http://localhost:8000/data/test-data")
                        .then((res) => {
                          console.log(res.data.response);
                          setResponse(res.data.response);
                        })
                        .catch((err) => console.log(err));
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        {response ? (
          <Grid item xs={6}>
            <Card
              style={{
                margin: "auto",
                marginTop: "10vh",
                padding: 10,
                backgroundColor: "lightgrey",
                border: "2px solid black",
              }}
            >
              <CardHeader style={{ textAlign: "center" }}
               title="Response from C++" />
              <Divider />
              <CardContent>
                <TextField
                  name="response"
                  id="_response"
                  fullWidth
                  type="text"
                  variant="filled"
                  color="primary"
                  multiline
                  value={response}
                  disabled={true}
                />
              </CardContent>
            </Card>
          </Grid>
        ) : null}
      </Grid>
    </Container>
  );
}

export default BookForm;
