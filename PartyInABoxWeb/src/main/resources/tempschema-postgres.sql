DROP TABLE IF EXISTS app_data.products;
CREATE TABLE app_data.products(product_id serial PRIMARY KEY, product_name VARCHAR(50) not null, product_description VARCHAR(100), product_price numeric not null, product_stock integer not null, product_url text not null);
