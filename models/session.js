module.exports = function(sequelize, DataTypes) {
    var Session = sequelize.define("lounge", {
        user_id: DataTypes.integer,
        lounge_id: DataTypes.integer
      
    });
  
    Session.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Session.belongsTo(lounge.users, {
        foreignKey: {
            user_id,
          allowNull: false
        }
      });
    };
  
    return Lounge;
  };
  