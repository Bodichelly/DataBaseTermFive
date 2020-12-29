const Sequelize = require('sequelize');


const Offenders = Sequelize.define('offenders', {
    personal_id: {
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
      }
  });
  
  export default Offenders;