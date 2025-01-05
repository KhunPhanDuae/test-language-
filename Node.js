const { google } = require('googleapis');
const fs = require('fs');

// Authenticate using the credentials
const auth = new google.auth.GoogleAuth({
  keyFile: './credentials.json',  // JSON ဖိုင်ကို project folder ထဲတွင်ထည့်ပါ
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });

// Google Sheets data fetch function
async function getSheetData() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: '1-eULZQaS5S4vErekAFxeKKZBrsmHF1z6pZk4cFo2IPs/edit',  // Replace with your actual spreadsheet ID
    range: 'Sheet1!A:B',  // Adjust the range as necessary
  });
  console.log(response.data.values);
}

getSheetData();
