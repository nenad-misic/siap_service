// JS service for ingredient transformations

// Usage:

//     POST localhost:1337/ingredient with body:
//       {
//         "ingredient": STRING ingredient (example: "1 tablespoon basil")
//       }

//       returns:
//       {
//         "quantity": "1",
//         "unit": "tablespoon",
//         "ingredient": "basil",
//         "minQty": "1",
//         "maxQty": "1"
//       }

//----------------------------------------------------------
//##########################################################
//----------------------------------------------------------
    
//       POST localhost:1337/ingredients with body:
//       {
//         "ingredients": Array<STRING> [ingredient,...] (example: ["1 tablespoon basil","2 tablespoons salt"])
//       }
      
//       returns:
//       [
//         {
//           "quantity": "1",
//           "unit": "tablespoon",
//           "ingredient": "basil",
//           "minQty": "1",
//           "maxQty": "1"
//         },
//         {
//           "quantity": "2",
//           "unit": "tablespoon",
//           "ingredient": "of salt",
//           "minQty": "2",
//           "maxQty": "2"
//         }
//       ]
    


var express = require('express');
var http = require('http');
var path = require('path');
const cors = require('cors');
let parser = require('recipe-ingredient-parser-v2')

var app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


var router = express.Router()

app.use('/', router);

router.post('/ingredient', async function (req, res, next) {
  let ingredient = req.body.ingredient;
  res.status(200).json(parser.parse(ingredient));
});


router.post('/ingredients', async function (req, res, next) {
  let ingredients = req.body.ingredients;
  res.status(200).json(ingredients.map(ingredient=>parser.parse(ingredient)));
});

app.get('/', (req, res, next) => {
  res.send('Server is up.');
});

var server = http.createServer(app);
server.listen(process.env.PORT || 1337);
console.log(`Listening on port ${process.env.PORT || 1337}`);