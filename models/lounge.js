module.exports = function(sequelize, DataTypes) {
    var Lounge = sequelize.define("lounge", {
    name: DataTypes.String,
    user_id: {
        type: DataTypes.String,
        references: 'users',
        referencesKey: 'id'
    },
    // playlist_id:{
    //     type: DataTypes.INT,
    //     references: "playlist",
    //     referencesKey:'id'
    // }
      
    });
  
    Lounge.associate = function(models) {
    
     Lounge.hasOne(playlist),
     Lounge.belongsTo(user_id),
     Lounge.belongsToMany(User, { through: Session });
    };
  
    return Lounge;
  };
  