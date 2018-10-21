## Bamazon

## What is this repo or project?
Bamazon is a Node.js and MySQL Amazon-like storefront that will take in orders from customers and deplete stock from the store's inventory.

## Link to Bamazon Movie Walkthrough
## Part 1 - https://drive.google.com/file/d/1W0BZGszHt5j-BFV0RAYnmM7m5entpRde/view?usp=sharing

## Part 2 - https://drive.google.com/file/d/12S2CedZw8UGOuMX_yOQfgSVC80lE-V9b/view?usp=sharing

## Part 3 - https://drive.google.com/file/d/1bb4eKoxHIUU0h9NWaudzT6uErcfTWasa/view?usp=sharing

## How does it work?
## Part 1
1. A MySQL Database was created called `bamazon`. This database consists of a table called `products` that has been pre-populated with mock items.
2. A Node application called `bamazonCustomer.js` was created and when run it will first display all of the items available for sale, including the ids, names, and prices of products for sale.
3. The app will prompt the user with to questions:
  a) Enter the ID of the product they would liike to buy.
  b) How many units of the product they would like to buy.
4. Once the order has been placed, the appolication will check if the inventory can cover the request. If there is not enough available inventory, the order is prevented from going through.
5. When the inventory is available, the order is processed which will include updating the database to reflect the remaining quantity as well as showing the customer what is the total cost of their purchase.

## Part 2
1. Running bamazonManager.js will show the following list of options:
    View Products for Sale
    
    View Low Inventory
    
    Add to Inventory
    
    Add New Product
2. If the user selects `View Products for Sale`, the app will list every available item: the item IDs, names, prices, and quantities.
3. When a user selects `View Low Inventory`, the app will list all items with an inventory count lower than five.
4. When the user selects `Add to Inventory`, the app will display a prompt that will let the user "add more" of any item currently in the store.
5. When the user selects `Add New Product`, the app will allow the user to add a completely new product to the store.

## Part 3
1. A new MySQL table named `departments` was created with the following columns:
    department_id
    department_name
    over_head_costs (this column contained dummy numbers that I set up previously)
2. A new column named `product_sales` was added to the products table. When a user purchases anything from the store, the price of the product multiplied by the quantity purchased is added to the product's product_sales column.
3. The user will run a new node app called bamazonSupervisor.js which will display a menu with the following choices:
    View Product Sales by Department
    Create New Department
4. When a user selects `View Product Sales by Department`, the app will display a summarized table in their terminal/bash.
5. The `total_profit` column is calculated on-the-fly using the difference between `over_head_costs` and `product_sales`. The `total_profit` is not stored in any database, but rather generated using a custom alias.

## Who will use this repo or project?
**Anyone** who enjoys online shopping for extremely expensive items.

## What is the goal of this project?
To learn how to use a MySQL database with Node.js as well as the NPM pacakages, Inquirer and MySQL.
