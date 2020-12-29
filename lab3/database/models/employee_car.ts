const Sequelize = require('sequelize');


const Employee_car = Sequelize.define('employee_car', {
    car_id: {
      type: Sequelize.NUMERIC
    },
    employee_id: {
      type: Sequelize.NUMERIC
    },
    id: {
      type: Sequelize.UUID
    }
  });
  
  export default Employee_car;