const Sequelize = require('sequelize');


const Departments = Sequelize.define('departments', {
    department_id: {
      type: Sequelize.NUMERIC
    },
    address: {
      type: Sequelize.TEXT
    },
    post_code: {
      type: Sequelize.NUMERIC
    },
    contact_number: {
      type: Sequelize.NUMERIC
    }
  });
  
  export default Departments;