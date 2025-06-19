// app.js  – minimaler Express-Server (CommonJS)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;   // Koyeb setzt PORT automatisch

app.get('/', (_, res) => res.json({ msg: 'Hello World 🎉' }));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
