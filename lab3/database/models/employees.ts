const Sequelize = require('sequelize');


const Employees = Sequelize.define('employees', {
    employee_id: {
        type: Sequelize.NUMERIC
      },
      name: {
        type: Sequelize.TEXT
      },
      birth_day: {
        type: Sequelize.DATE
      },
      contact_number: {
        type: Sequelize.NUMERIC
      },
      home_address: {
        type: Sequelize.TEXT
      },
      post: {
        type: Sequelize.TEXT
      },
      department_id: {
        type: Sequelize.NUMERIC
      },
      finished_cases: {
        type: Sequelize.NUMERIC
      }
  });
  
  export default Employees;