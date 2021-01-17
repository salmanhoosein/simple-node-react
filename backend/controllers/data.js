const BooksDb = require("../database/data");
const { exec } = require("child_process");
const path = require("path");

const data = ["test.csv", "one.csv"];
exports.getData = async (req, res, next) => {
  try {
    res.json({
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
};

/* http://www.localhost:8080/data/test-data */
exports.postTestData = async (req, res, next) => {
  const dataSet = req.body.dataSet;
  try {
    let response = null;

    /* 

      @TODO: construct cli argument in each form frontend and
      pass to backend

      const [arg1, setArg1] = React.useState();
      const [arg2, setArg2] = React.useState();
      const [exe, setExe] = React.useState('matrixmult')

      const cliArg  = exe + arg1 + arg2;
      "num_rows=1;num_columns=1;name=TEST"
    */
    /*  
      execute c++ executable
      run binary file ./testsys pass in choice=11 as argument
    */
    exec(
      `${path.join(__dirname, "..", "c++", "testsys")} "choice=11"
      `,
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        response = stdout;
        console.log(`stdout: ${stdout}`);
        console.log(`response: ${response}`);
        //send response from c++ back to frontend
        res.json({ response: response });
      }
    );
  } catch (err) {
    console.log(err);
  }
};
