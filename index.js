const express = require('express')
const app = express();
const port = 8000;
var fs = require('fs')

app.use(express.static('./public/'));
app.get('/', (req, res) => {
  fs.readFile('./index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});