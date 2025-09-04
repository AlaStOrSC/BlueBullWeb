const https = require('https');

const url = 'https://bluebull.jobs.personio.de/xml';

console.log('Testing Personio API...');
console.log('URL:', url);

const req = https.get(url, (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', JSON.stringify(res.headers, null, 2));
  
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
    console.log('Received chunk, total length:', data.length);
  });
  
  res.on('end', () => {
    console.log('Final response length:', data.length);
    if (data.length > 0) {
      console.log('First 500 characters:');
      console.log(data.substring(0, 500));
      console.log('...');
      if (data.length > 1000) {
        console.log('Last 500 characters:');
        console.log(data.substring(data.length - 500));
      }
    } else {
      console.log('No data received');
    }
  });
  
}).on('error', (err) => {
  console.error('Request Error:', err.message);
  console.error('Error code:', err.code);
});

req.setTimeout(10000, () => {
  console.log('Request timed out');
  req.destroy();
});

console.log('Request sent, waiting for response...');
