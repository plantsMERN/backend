const db = require('./db');
const config = require('../config/config');

async function getData(){

  const rows = await db.query(
    `SELECT name, category, bestSale, light, water, cover, price
    FROM plants`
  );
  
  return {
    rows
  }
}

async function create(data){
    const result = await db.query(
      `INSERT INTO plants 
      (name, category, bestSale, light, water, cover, price) 
      VALUES 
      ('${data.name}', '${data.category}', '${data.bestSale}', '${data.light}', '${data.water}', '${data.cover}', '${data.price}')`
    );
  
    let message = 'Error in creating new data';
  
    if (result.affectedRows) {
      message = 'data created successfully';
    }
  
    return {message};
}


async function remove(id){
    const result = await db.query(
      `DELETE FROM plants WHERE id=${id}`
    );
  
    let message = 'Error in deleting data';
  
    if (result.affectedRows) {
      message = 'data deleted successfully';
    }
  
    return {message};
}

module.exports = {
  getData,
  create,
  remove
}

