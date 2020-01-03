module.exports = function(sequelize, DataTypes) {
    var Session = sequelize.define("lounge", {
        user_id: {
            type: DataTypes.INT,
            references: 'users',
            referencesKey: 'id'
        },
        lounge_id: {
            type: DataTypes.INT,
            references: 'lounge',
            referencesKey: 'id'
        },
      
    });
  
    Session.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Session.hasMany(User);
      Session.hasMany(Lounge);

    };
  
    return Session;
  };
  