var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "y+95D=E37uLNmr5}s",
  database: "bamazon"

});

connection.connect(function(err){

  if(err) throw err;

  //console.log("connect as id: " + connection.threadId + "\n");

  storeFront();

});

function storeFront() {

  console.clear();

  connection.query("SELECT * FROM products", function(err, response){

    if(err) throw err;

    console.log("The following items are available for sale");
    console.log("------------------------------------------\n")
    console.log("  ID | PRODUCT | PRICE\n");

    for (var i = 0; i < response.length; i++) {
      var id = (response[i].item_id);
      var name = (response[i].product_name);
      var price = (response[i].price);
      //console.log();
      console.log("  " + id + "  " + name + "   $" +  price.toLocaleString() + ".00");
      console.log("--------------------------------------------------------------------------");

    }
  
    console.log("\n");

    inquirer.prompt([

      {
        name: "id",
        type: "input",
        message: "Please enter the ID of the item you wish to purchase:",
        // validate: function validateId(name) {
        //   console.log("name: " + name);
        //   console.log("id: " + id);
        //   console.log("list length: " + response.length);
        //   return name !== '';
        // }

      },
      {
        name: "qty",
        type: "input",
        message: "How many would you like to buy?"
        
      }

    ])

      .then(function (itemChosen) {
        
        //console.log("itemID: " + response[itemChosen.id - 1].item_id);
        console.log("You selected to purchase " + itemChosen.qty + " of product " + response[itemChosen.id-1].product_name) + "\n";

        console.log("There are currently "  + response[itemChosen.id-1].stock_quantity + " available.");

        if (response[itemChosen.id - 1].stock_quantity == 0) {
          console.log("I'm sorry, this product is currently sold out");
          tryAgain();
        } else if (itemChosen.qty > response[itemChosen.id - 1].stock_quantity) {

          console.log("I'm sorry there is not enough in our inventory to fulfill your order, please try your order again with a smaller amount.");
          tryAgain();
        } else {

          
          var finalTotal = itemChosen.qty * response[itemChosen.id - 1].price;

          console.log("Your order has been processed.");

          console.log("\n** YOUR TOTAL**");

          console.log("\n" + response[itemChosen.id - 1].product_name + " X " + itemChosen.qty + " = " + "$" + finalTotal.toLocaleString() + ".00\n");
          
          var updateSql = "UPDATE products SET stock_quantity = " + (response[itemChosen.id - 1].stock_quantity - itemChosen.qty) + " WHERE item_id = " + response[itemChosen.id - 1].item_id;   

          connection.query(updateSql, function(err, data){

            if(err) throw err;
            console.log("The database has been updated...");
            console.log("There are now currently " + (response[itemChosen.id - 1].stock_quantity - itemChosen.qty) + " of " + response[itemChosen.id - 1].product_name + " left in stock.")
            //tryAgain();

          })
          
          var updateAmt = finalTotal;
console.log("update amount: " + updateAmt)
          var upProdSales = "UPDATE products SET product_sales = " + (response[itemChosen.id - 1].product_sales + updateAmt) + " WHERE item_id = " + response[itemChosen.id - 1].item_id; 

          connection.query(upProdSales, function(err,data){

            if(err) throw err;

            console.log("Product Sales has been updated...");

            tryAgain();
          })
        }

      })
  }); // end connection.query

} // end storeFront()

function tryAgain() {
  inquirer.prompt([

  {
    type: "confirm",
    name: "startOver",
    message: "Do you want to place another order?",
    default: true
  }
])
  .then(function (choice) {
    if(choice.startOver) {
      storeFront();
    } else {
      connection.end();
    }
  })
} // tryAgain()

