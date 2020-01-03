module.exports = function(sequelize, DataTypes) {
    var Playlist = sequelize.define("playlist", {
    user_id: DataTypes.integer,
    song_id: DataTypes.integer
      
    });
  
    Playlist.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Playlist.belongsTo(lounge.playlist, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Playlist;
  };
  