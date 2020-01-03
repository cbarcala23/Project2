module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
      // Giving the Author model a name of type STRING
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      active: DataTypes.boolean
    });
  
    User.associate = function(models) {
      // Associating Author with Posts
      User.hasMany(song);
      User.hasMany(session);

    };
  
    return User;
  };
  