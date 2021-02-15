const {Sequelize, DataTypes} = require('sequelize');

module.exports.createStore = () => {
    const db = new Sequelize({
      dialect: 'sqlite',
      storage: './store.sqlite'
    });

    const authors = db.define('author', {
        name: Sequelize.STRING,
        hasWonAwards: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
      
    return { db, authors };
  };
