const Sequelize = require('sequelize');


const Cases = Sequelize.define('cases', {
    policemen_id: {
      type: Sequelize.NUMERIC
    },
    offender_personal_id: {
      type: Sequelize.NUMERIC
    },
    case_id: {
      type: Sequelize.UUID
    },
    name: {
      type: Sequelize.TEXT
    },
    law_article: {
      type: Sequelize.TEXT
    },
    commit_date: {
      type: Sequelize.DATE
    },
    is_active: {
      type: Sequelize.BOOLEAN
    },
    finish_date: {
      type: Sequelize.DATE
    }
  });
  
  export default Cases;