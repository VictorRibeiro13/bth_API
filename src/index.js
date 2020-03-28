const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

// Ao fazer o deploy:

// app.use(cors({
//     origin: "https://..."
// }))

app.use(express.json());
app.use(routes);

app.listen(3333);
