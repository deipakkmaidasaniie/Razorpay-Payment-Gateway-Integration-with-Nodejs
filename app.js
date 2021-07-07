// secret: Vz3fe672WN6Paammyr3ESp94
// key_id:rzp_test_BQzgT2WFcTPft1 

let express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const Razorpay = require("razorpay");

dotenv.config();
let app = express();
const instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.SECRET_KEY,
});
//Middlewares
app.use(cors());
app.use(express.json());
app.use(
 express.urlencoded({
    extended: false,
  })
);
app.set("view engine", "ejs");

//Routes
app.get("/payments", (req, res) => {
  res.render("payment", { key: process.env.KEY_ID,subs:process.env.SUBS_ID });
});
app.post("/api/payment/order", (req, res) => {
  params = req.body;
  instance.orders
    .create(params)
    .then((data) => {
        console.log(data);
      res.send({ sub: data, status: "success" });
    })
    .catch((error) => {
      res.send({ sub: error, status: "failed" });
    });
});

app.post("/api/payment/verify", (req, res) => {
  body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;

  var expectedSignature = crypto
    .createHmac("sha256", process.env.KEY_SECRET)
    .update(body.toString())
    .digest("hex");
  console.log("sig" + req.body.razorpay_signature);
  console.log("sig" + expectedSignature);
  var response = { status: "failure" };
  if (expectedSignature === req.body.razorpay_signature)
    response = { status: "success" };
  res.send(response);
});
app.listen("8000", () => {
  console.log("server started");
});