module.exports = function(sequelize, DataTypes) {
    var Lounge = sequelize.define("lounge", {
    name: DataTypes.String
      
    });
  
    Lounge.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Lounge.belongsTo(lounge.users, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Lounge;
  };
  