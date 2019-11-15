const express = require('express')
const app = express()
const port = 3001

app.use(express.static('postal'))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/postal/calc", function(req, res) { //this is where we compute the total
    console.log("got a get");
    console.log(req.query.type);
    var weight = req.query.weight;
    var type = req.query.type;
    var total;
    switch(type) {
        case 'stamped':
          total = 1;
          break;
       case 'metered':
          total = 2;
          break;
       case 'flats':
          total = 3;
          break;
       case 'retail':
          total = 4;
          break;
      }
        console.log(total);
      
    const params = {mail: type, weight: weight, total: total};
    response.render('rate', params);

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))