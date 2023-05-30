# deliveryShopApp

To run this application on your PC make sure  you have NODE.js and Postgres installed on your PC and follow steps below:

0. Open Terminal, or VS Code or any command line application, you use. Change to location on your PC where you want to store this APP and run commands listed below.

1. Clone this repository to selected location on your PC:
    git clone https://github.com/Kulya1986/deliveryShopApp.git

2. cd deliveryShopApp

3. cd delivery-app

4. npm install 

5. cd ..

6. cd delivery-app-api

7. npm install

8. cd ..

8. createdb delivery_shop

9. psql 'delivery_shop'< delivery_shop.sql

10. Check file server.js and make sure you set your database user credentials in db variable:

    const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        // port : 5432,
        user : 'your_database_user',
        password : 'your_database_user_password',
        database : 'delivery_shop'
  }
})

11. cd delivery-app-api 
12. npm start
13. Open one more terminal window and run cd delivery-app.
14. npm start.
15. Now you can test APP in your browser!!!