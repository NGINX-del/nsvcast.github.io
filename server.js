const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/viewers/:streamName', async (req, res) => {
  const streamName = req.params.streamName;
  try {
    const response = await fetch(`https://api.vaughnsoft.net/v1/stream/vl-${streamName}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching from Vaughn API:', err);
    res.status(500).json({ error: 'Failed to fetch viewer data' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
