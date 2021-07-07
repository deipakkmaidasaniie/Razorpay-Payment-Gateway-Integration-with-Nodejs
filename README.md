## _Razorpay Payment Gateway Integration with Nodejs_

---

## _Flow of the process_

[![N|Solid](https://miro.medium.com/max/1222/1*K5KVP37xOkBMelPsOwIVvw.png)](https://nodesource.com/products/nsolid)

---

## STEP1: RazorPay Account Setup

-   Go to https://dashboard.razorpay.com/signup and enter your email address & necessary information.
-   By default, it creates a test environment for you to play around with all the options. You can activate your account by filling in the KYC form in the “My Account -> Profile ->Account Activation” section.
-   Now go to “Settings -> API keys” to generate API keys for node connection. Download the keys & store them somewhere safe.

## STEP2: NodeJs setup

-   Install the Razorpay package using npm.

```sh
npm i razorpay
```

-   Now create the app.js file and Instantiate the razorpay instance with key_id and secret_key we downloaded as API KEYS from razorpay dashboard

## STEP3: Create plans and subscriptions

-   If you want payments to receive automatically from customers after the end of specific duration without customers needing to enter payment details again and again , create plans and subscriptions in your razorpay dashboard.
-   Enter plan and subscription details.
-   After this, subscription key for that subscription will be generated which needs to be noted and will need to be entered for the "subscription_id" field while creating order.

## STEP4: Implemantation of code with Nodejs

1. Create the order and send the orderId back for checkout. Create an API for the create order payment and send back data as response which contains orderId along with other additional information.
2. Pass the order Id to generate checkout object
3. If everything is correct, the user will be redirected to the Razorpay checkout page.
4. You can capture the payment automatically or using the capture method.
