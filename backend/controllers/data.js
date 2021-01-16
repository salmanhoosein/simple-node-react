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
      execute c++ executable
      pass in number 99,33 and dataset name as arguments
    */
    exec(
      `${path.join(__dirname, "..", "c++", "hello")} 99 33 dataset=test.csv
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
