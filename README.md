## Bamazon

## What is this repo or project?
Bamazon is a Node.js and MySQL Amazon-like storefront that will take in orders from customers and deplete stock from the store's inventory.

## Link to Bamazon Movie Walkthrough

## How does it work?
1. A MySQL Database was created called `bamazon`. This database consists of a table called `products` that has been pre-populated with mock items.
2. A Node application called `bamazonCustomer.js` was created and when run it will first display all of the items available for sale, including the ids, names, and prices of products for sale.
3. The app will prompt the user with to questions:
  a) Enter the ID of the product they would liike to buy.
  b) How many units of the product they would like to buy.
4. Once the order has been placed, the appolication will check if the inventory can cover the request. If there is not enough available inventory, the order is prevented from going through.
5. When the inventory is available, the order is processed which will include updating the database to reflect the remaining quantity as well as showing the customer what is the total cost of their purchase.

## Who will use this repo or project?
**Anyone** who enjoys online shopping for extremely expensive items.

## What is the goal of this project?
To learn how to use a MySQL database with Node.js as well as the NPM pacakages, Inquirer and MySQL.
