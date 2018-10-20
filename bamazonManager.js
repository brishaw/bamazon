var mysql = require("mysql");
var inquirer = require("inquirer");

console.clear();

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

connection.connect(function (err) {

  if (err) throw err;

  //console.log("connect as id: " + connection.threadId + "\n");

});

function vps() {
console.clear();
  connection.query("SELECT * FROM products", function (err, response) {

    if (err) throw err;
console.log("\n");
    for (var i = 0; i < response.length; i++) {
      var id = (response[i].item_id);
      var name = (response[i].product_name);
      var price = (response[i].price);
      var qty = (response[i].stock_quantity);
      
      console.log("  " + id + "       $" + price.toLocaleString() + ".00       " + qty + "       " + name);
      console.log("-------------------------------------------------------------------------------------------");

    }
    console.log("\n");
    mainMenu();
  })
  
}

function vli() {

  connection.query("SELECT * FROM products WHERE stock_quantity < 5", function (err, response) {

    if (err) throw err;

    for (var i = 0; i < response.length; i++) {
      var id = (response[i].item_id);
      var name = (response[i].product_name);
      var price = (response[i].price);
      var qty = (response[i].stock_quantity);

      console.log("  " + id + "       $" + price.toLocaleString() + ".00       " + qty + "       " + name);
      console.log("-------------------------------------------------------------------------------------------");

    }
    console.log("\n");
    mainMenu();
  })
}

function ati() {

  connection.query("SELECT * FROM products", function (err, response) {

    if (err) throw err;
  

  inquirer.prompt([
    {
      name: "addInv",
      type: "input",
      message: "Enter product ID"
    },
    {
      name: "addQty",
      type: "input",
      message: "Enter number of products to add"
    }
  ])
  .then(function (atiId) {

    //console.log("You entered: " + atiId.addInv);
    
    var addQuery = "UPDATE products SET stock_quantity = " + (response[atiId.addInv - 1].stock_quantity + parseInt(atiId.addQty)) + " WHERE item_id = " + response[atiId.addInv - 1].item_id;   

    //console.log("ResponseQty: " + response[2].stock_quantity);
    //console.log("addQty " + atiId.addQty);


    connection.query(addQuery, function(err,data){

      if(err) throw err;

      console.log("You have modified the database and product quantity.");

      //console.log("There are now currently " + response)
      console.log("\n");
      mainMenu();
    })





  })
  })// end connection.query
}

function anp() {

  connection.query("SELECT * FROM products", 
  
  function (err, response) {

    if (err) throw err;

    inquirer.prompt([

      {
        type: "input",
        name: "itemId",  
        message: "Enter new product ID"
      },

      {
        type: "input",
        name: "productName",
        message: "Enter new product name",
      },

      {
        type: "input",
        name: "deptName",
        message: "Enter the existing or new department name"
      },

      {
        type: "input",
        name: "itemPrice",
        message: "Enter price for new product",
      },

      {
        type: "input",
        name: "stockQuantity",
        message: "Enter the quantity of the new product",
      }
    ])

      .then(function (anpProd) {

        // "INSERT INTO products SET ?", {
        //   item_id : anpProd.itemId,
        //   product_name: anpProd.productName, 
        //   department_name: anpProd.deptName, 
        //   price: anpProd.itemPrice, 
        //   stock_quantity: anpProd.stockQuantity};
        

        // console.log("ResponseQty: " + response[2].stock_quantity);
        // console.log("addQty " + atiId.addQty);


        connection.query("INSERT INTO products SET ?", {
          item_id: anpProd.itemId,
          product_name: anpProd.productName,
          department_name: anpProd.deptName,
          price: anpProd.itemPrice,
          stock_quantity: anpProd.stockQuantity
        }, function (err, data) {

          if (err) throw err;

          console.log("You have modified the database and added the new product.");

          //console.log("There are now currently " + response)
          console.log("\n");
          mainMenu();
        })





      })
  })// end connection.query
}

function emv() {

  inquirer.prompt([

    {
      type: "confirm",
      name: "exit",
      message: "Are you sure you want to exit the Manager View?",
      default: true
    }
  ])
    .then(function(leave){

      if(leave.exit) {
        connection.end();
      } else {
        console.log("\n");
        mainMenu();
      }
    })
  
}

function mainMenu() {
var choices = ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit Manager View"];

//console.log("choices: " + choices);

  inquirer.prompt([
    {
      type: "list",
      name: "mgrList",
      message: "Seclect an option:",
      choices: choices
    }

  ])
.then(function (mgrChoice) {

  if (mgrChoice.mgrList === "View Products for Sale") {
    vps();
  } else if (mgrChoice.mgrList === "View Low Inventory") {
    vli();
  } else if (mgrChoice.mgrList === "Add to Inventory") {
    ati();
  } else if (mgrChoice.mgrList === "Add New Product") {
    anp();
  } else if (mgrChoice.mgrList === "Exit Manager View") {
    emv();
  } else {
    console.log("That option does not exist");
  }
  
})
} // end mainMenu();

mainMenu();
