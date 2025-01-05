const express = require('express');
const { google } = require('googleapis');
const app = express();
const port = 3000;

// Google Sheets API setup (you need to authenticate using your service account)
const auth = new google.auth.GoogleAuth({
  keyFile: 'khunderan-22ec7-d7c5c60e0d25.json',  // path to your credentials JSON file
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });

// Endpoint to fetch data from Google Sheets
app.get('/data', async (req, res) => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1-eULZQaS5S4vErekAFxeKKZBrsmHF1z6pZk4cFo2IPs/edit',  // Replace with your Google Sheets ID
      range: 'Sheet1!A:B',  // Adjust range as needed
    });

    // Send the data as a JSON response
    res.json(response.data.values);
  } catch (error) {
    res.status(500).send('Error fetching data from Google Sheets');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
