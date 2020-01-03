module.exports = function(sequelize, DataTypes) {
    var Lounge = sequelize.define("lounge", {
    name: DataTypes.String,
    created_by: {
        type: DataTypes.String,
        references: 'users',
        referencesKey: 'id'
    },
    playlist_id:{
        type: DataTypes.INT,
        references: "playlist",
        referencesKey:'id'
    }
      
    });
  
    Lounge.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
     Lounge.hasOne(playlist)
    };
  
    return Lounge;
  };
  