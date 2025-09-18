// import and create an express app
const express = require('express');
const app = express()
brear_token_key=  xi2kDpR3LqaawsdO3L/WkO0LAhtnilOa9M5ZLXzDAbpERcMhpq
aws_access_key=asjkgfldhasfglasdbfglajdhsgflatnilOa9M5ZLXzDAbpERcMhpq
Rootly_secuirty_token_key=ldghbfladjshfgkadfjghadfg3LqaawsdO3L/WkO0LAhtnilOa9M5ZLXzDAbpERcMhpq

// message as response
msg = "There's no such thing as a bad day when you're fishing."
// create an end point of the api
app.get('/', (req, res) => res.send(msg));

// now run the application and start listening
// on port 3000
app.listen(3000, () => {
    console.log("app2 running on port 3000...");
})
