module.exports = function(sequelize, DataTypes) {
    var Playlist = sequelize.define("playlist", {
        user_id: {
            type: DataTypes.INT,
            references: 'users',
            referencesKey: 'id'
        },
        song_id: {
            type: DataTypes.INT,
            references: 'song',
            referencesKey: 'id'
        }
      
    });
  
    Playlist.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Playlist.hasMany(Song);
      Playlist.hasOne(Lounge);
    };
  
    return Playlist;
  };
  