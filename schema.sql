-- Drops the bamazon if it already exists --
DROP DATABASE IF EXISTS bamazon;

-- Create a database called bamazon --
CREATE DATABASE bamazon;

-- Use bamzon db for the following statements --
USE bamazon;

CREATE TABLE products(
  -- Create a column called "item_id"  --
  item_id INTEGER(100) AUTO_INCREMENT NOT NULL,
  
  -- Create a column called " product_name" --
  product_name VARCHAR(100) NOT NULL,
  
  -- Create a column called "department_name" --
  department_name INTEGER(50),
  
  -- Create a column called "price" --
  price DECIMAL(10,2) NOT NULL,
  
   -- Create a column called "stock_quantity" --
  stock_quantity INTEGER(255),
  
  product_sales DECIMAL(10,2) DEFAULT 0,
  
  -- Set the item_id as this table's primary key
  PRIMARY KEY (item_id)
);



CREATE TABLE departments(

  department_id INTEGER(100) AUTO_INCREMENT NOT NULL,
  
  department_name VARCHAR(50) NOT NULL,
  
  over_head_costs DECIMAL(10,2) NOT NULL,
  
  product_sales DECIMAL(10,2) DEFAULT 0,
  
  PRIMARY KEY (department_id)

);