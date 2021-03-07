# siap_service

## JS service for ingredient transformations

<br><br>

POST 

localhost:1337/ingredient 

with body:
      {
        "ingredient": STRING ingredient (example: "1 tablespoon basil")
      }

      returns:
      {
        "quantity": "1",
        "unit": "tablespoon",
        "ingredient": "basil",
        "minQty": "1",
        "maxQty": "1"
      }


<br><br>
    
POST 

localhost:1337/ingredients 

with body:
      {
        "ingredients": Array<STRING> [ingredient,...] (example: ["1 tablespoon basil","2 tablespoons salt"])
      }
      
      returns:
      [
        {
          "quantity": "1",
          "unit": "tablespoon",
          "ingredient": "basil",
          "minQty": "1",
          "maxQty": "1"
        },
        {
          "quantity": "2",
          "unit": "tablespoon",
          "ingredient": "of salt",
          "minQty": "2",
          "maxQty": "2"
        }
      ]
    