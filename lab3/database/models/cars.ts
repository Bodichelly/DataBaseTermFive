const Sequelize = require('sequelize');


const Cars = Sequelize.define('cars', {
    car_id: {
      type: Sequelize.NUMERIC
    },
    licence_plate: {
      type: Sequelize.TEXT
    },
    vin_code: {
      type: Sequelize.TEXT
    },
    department_id: {
      type: Sequelize.NUMERIC
    }
  });
  
  export default Cars;