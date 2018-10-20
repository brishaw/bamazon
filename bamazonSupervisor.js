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

function vpsd() {

  connection.query("SELECT departments.department_id, departments.department_name, departments.over_head_costs, sum (products.product_sales) as total_product_sales, sum (products.product_sales) - (departments.over_head_costs) as total_profit FROM products left join departments on products.department_name = departments.department_id group by products.department_name;", function(err, response) {
    
    if(err) throw err;

    console.log("RESPONSE: " + response);
    console.log("dept id: " + response[0].department_name);
    console.log("Dept ID | Dept Name    | Overhead Costs    | Product Sales    |    Total Profit");
    for (var i = 0; i < response.length; i++) {
      
      var dept_id = response[i].department_id;
      var dept_name = response[i].department_name;
      var ohc = response[i].over_head_costs;
      var productSales = response[i].total_product_sales;
      var totalProfit = response[i].total_profit;

      // if (productSales == null) {
      //   productSales = 0;
      // }
      console.log(dept_id + "         " + dept_name + "         " + ohc + "       " + productSales + "       " + totalProfit);
    }
    console.log("\n");
    mainMenu();
  })
} // end vpsd()

function createNd() {

  inquirer.prompt([
    {
      type: "input",
      name: "newDepartment",
      message: "Enter the name of the new department"
    },
    {
      type: "input",
      name: "newOhc",
      message: "What will be the overhead cost for this department"
    }
  ])
  .then(function (createNewDept){

    var sql = "INSERT INTO departments SET ?";

    connection.query(sql, { department_name:createNewDept.newDepartment, over_head_costs:createNewDept.newOhc}, function(err, res){
      if(err) throw err;

      console.table(res.affectedRows + " new department has been added.");
      console.log(res);
      console.log("\n");
      mainMenu();
    })
    
  })
} // end createNd()

function esv() {

  inquirer.prompt([

    {
      type: "confirm",
      name: "exit",
      message: "Are you sure you want to exit the Supervisor View?",
      default: true
    }
  ])
    .then(function (leave) {

      if (leave.exit) {
        connection.end();
      } else {
        console.log("\n");
        mainMenu();
      }
    })

}

function mainMenu() {

  inquirer.prompt([
    
    {
      type: "list",
      name: "viewProdSales",
      message: "Select an option",
      choices: ["View Sales by Department", "Create New Department", "Exit Manager View"]
    }
  ])
    .then(function (supChoice) {

      if (supChoice.viewProdSales === "View Sales by Department") {
        vpsd();
      } else if (supChoice.viewProdSales === "Create New Department") {
        createNd();
      } else if (supChoice.viewProdSales === "Exit Manager View") {
        esv();
      } else {
        console.log("That option does not exist");
      }

    })

} // end mainMenu()

mainMenu();