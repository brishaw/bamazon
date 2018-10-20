USE bamazon;

-- Create new rows
-- INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
-- VALUES (1, "Barracuda Backup Server 1090 w/ 10 GBE Fiber NIC", "Electronics", 242988.00,  10);

-- INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
-- VALUES (2, "Koenigsegg CCXR Trevita", "Automotive", 4800000.00,  10);

-- INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
-- VALUES (3, "Wu-Tang Clan - Once Upon a Time in Shaolin LP", "Music and Video", 2000000.00,  1);

-- INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
-- VALUES (4, "Fender “Reach Out To Asia” Stratocaster", "Music Instruments", 2000000.00,  1);

-- INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
-- VALUES (5, "Dizzy Gillespie’s Martin Committee Trumpet", "Music Instruments", 55000.00,  1);

-- INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
-- VALUES (6, "House of Testoni", "Mens Shoes", 30000.00,  10);

-- INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
-- VALUES (7, "Louis Vuitton", "Mens Shoes", 10000.00,  15);

-- INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
-- VALUES (8, "Stefano Bemer", "Mens Shoes", 2000.00,  15);

-- INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
-- VALUES (9, "Nike Air Zoom Kobe 1", "Mens Shoes", 29999.00,  5);

-- INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
-- VALUES (10, "Louis Vuitton", "Mens Shoes", 5152.00,  10);

-- INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
-- VALUES (11, "Hanes Boxer Briefs", "Clothing", 20.00,  100);

-- INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
-- VALUES (12, "Amiri Blue & Black Leather Patch MX-1 ", "Clothing", 1050.00,  100);

-- INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
-- VALUES (13, "Eaton Safari Print Shirt", "Clothing", 285.00,  100);

-- INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
-- VALUES (14, "Falke Finest Vicuña Socks", "Clothing", 567.00,  100);

-- INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
-- VALUES (15, "Dolce & Gabbana Leather Jacket With Hood And Logo Band", "Clothing", 2795.00,  100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Barracuda Backup Server 1090 w/ 10 GBE Fiber NIC", 1, 242988.00,  10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Koenigsegg CCXR Trevita", 2, 4800000.00,  10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Wu-Tang Clan - Once Upon a Time in Shaolin LP", 3, 2000000.00,  1);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Fender “Reach Out To Asia” Stratocaster", 4, 2000000.00,  1);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Dizzy Gillespie’s Martin Committee Trumpet", 4, 55000.00,  1);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "House of Testoni", 5, 30000.00,  10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Louis Vuitton", 5, 10000.00,  15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Stefano Bemer", 5, 2000.00,  15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Nike Air Zoom Kobe 1", 5, 29999.00,  5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Louis Vuitton", 5, 5152.00,  10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (11, "Hanes Boxer Briefs", 6, 20.00,  100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (12, "Amiri Blue & Black Leather Patch MX-1 ", 6, 1050.00,  100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (13, "Eaton Safari Print Shirt", 6, 285.00,  100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (14, "Falke Finest Vicuña Socks", 6, 567.00,  100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (15, "Dolce & Gabbana Leather Jacket With Hood And Logo Band", 6, 2795.00,  100);

SELECT * FROM products;

INSERT INTO departments (department_id, department_name, over_head_costs)
VALUES(1, "Electronics", 1000);

INSERT INTO departments (department_id, department_name, over_head_costs)
VALUES(2, "Automotive", 2000);

INSERT INTO departments (department_id, department_name, over_head_costs)
VALUES(3, "Music and Video", 400);

INSERT INTO departments (department_id, department_name, over_head_costs)
VALUES(4, "Music Instruments", 300);

INSERT INTO departments (department_id, department_name, over_head_costs)
VALUES(5, "Mens Shoes", 10000);

INSERT INTO departments (department_id, department_name, over_head_costs)
VALUES(6, "Clothing", 10);

SELECT * FROM departments;