// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;   // ← wichtig!

app.get('/', (_, res) => res.json({ msg: 'Hello World 🎉' }));

app.listen(PORT, () => console.log('listening on', PORT));
