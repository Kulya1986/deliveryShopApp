import express from 'express';
// import bcrypt from 'bcrypt';
import cors from 'cors';
import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        // port : 5432,
        user : 'postgres',
        password : 'Kulya86',
        database : 'delivery_shop'
  }
})

const app = express();
app.use(express.json()); //middleware to parse JSON format of the frontend, from latest versions built-in the express library, no need to import bodyParser library
app.use(cors());

//Getting list fo available shops from DB
app.get('/shops',(req,res) => {
    db.select('shop_id','shop_name').from('shops')
    .then(shops=>{
        res.send(shops)
    }).catch(err => {
        res.status(400).json('cannot load list of shops');
    })
})

//Getting shop_id by prod_id from DB
app.get('/shop-in-cart/:prod_id',(req,res) => {
    const {prod_id} = req.params;
    db.select('shop_id').from('products').where('prod_id',prod_id)
        .then(shop => {
            if (shop.length){
                res.json(shop[0]);
            }
            else {
                res.status(400).json('shop id does not exist');
            }
         }).catch(err => res.status(400).json('product not found'))   
})

//Getting ALL products if shop_id=0 and products of the shop on specified shop_id
app.post('/shop-products',(req, res) =>{
    const {shop_id} = req.body;
    if (shop_id===0)
    {
        db.select('prod_id','prod_name','prod_image', 'prod_price').from('products').then(prods => {
            if (prods.length)
            {
                res.send(prods);
            }
            else{
                res.status(400).json('no products in the shop');
            }
        }).catch(err => {
            res.status(400).json('failed to load products')
        })
    }
    else
    {
        db.select('prod_id','prod_name','prod_image', 'prod_price').from('products')
        .where('shop_id','=',shop_id)
        .then(prods => {
            if (prods.length)
            {
                res.send(prods);
            }
            else{
                res.status(400).json('no products in the shop');
            }
        }).catch(err => {
                res.status(400).json('failed to load products')
        })
    }    
})

app.post('/submit-order', (req, res) => {
    const {shoppingCart, cartTotal, customerInfo} = req.body;
    
    db.transaction(trx => {
        trx('customers')
        .select('customer_id').from('customers')
        .where('customers.customer_email', '=', customerInfo.customer_email)
        .andWhere('customers.customer_phone', '=', customerInfo.customer_phone)
        .then(customerExist => {
            if(!customerExist.length)
            {
                return trx('customers')
                .returning('customer_id')
                .insert({
                    customer_name: customerInfo.customer_name,
                    customer_email: customerInfo.customer_email,
                    customer_address: customerInfo.customer_address,
                    customer_phone: customerInfo.customer_phone,
                    });
            }
            else
            {
                 return customerExist;
            }
        }).then(customerID => {
                        return trx('orders')
                            .returning('order_id')
                            .insert({
                                customer_id: customerID[0].customer_id,
                                order_total: cartTotal
                            })
                            .then(
                                orderID => {
                                    const order_positions=shoppingCart.map(element => {
                                            return(
                                                {
                                                    order_id: orderID[0].order_id,
                                                    prod_id: element.prod_id,
                                                    prod_quantity:element.prod_quantity
                                                }
                                                )
                                    })
                                    return trx('order_details')
                                        .returning('*')
                                        .insert(order_positions);
                                }).then(order => {
                                    res.status(200).json('order placed');
                                })
                    }).then(trx.commit)
                    .catch(trx.rollback)
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).json('unable to place order')}); 
})

//Getting ALL orders of customer by email and phone
app.post('/orders-history',(req, res) =>{
    const {customer_email, customer_phone} = req.body;
    db.select('orders.order_id', 'orders.order_total', 'order_details.prod_id', 'order_details.prod_quantity', 'products.prod_name', 'products.prod_image', 'products.prod_price')
      .from('customers')
      .innerJoin('orders', 'customers.customer_id', 'orders.customer_id')
      .innerJoin('order_details', 'orders.order_id', 'order_details.order_id')
      .innerJoin('products',  'order_details.prod_id', 'products.prod_id')
      .where('customers.customer_email', '=', customer_email)
      .andWhere('customers.customer_phone', '=', customer_phone)
      .then(details => {
        if (details.length)
        {
            res.send(details);
        }
        else{
            res.status(400).json('no orders placed for this customer');
        }
    }).catch(err => {
        console.log(err);
        res.status(400).json('failed to load orders')
    })
})

app.listen(3000, ()=>{
    console.log('App is running on port 3000');
})


