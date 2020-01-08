module.exports = function (sequelize, DataTypes) {
    var Song = sequelize.define("song", {
        songName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },

            source: {
                type: DataTypes.CHAR,
                allowNull: false
            },

            source_link: {
                type: DataTypes.CHAR,
                allowNull: false
            },

            upvote: {
                type: DataTypes.INT,
            },

            downvote: {
                type: DataTypes.INT,
            },

            user_id: {
                type: DataTypes.INT,
                references: 'users',
                referencesKey: 'id'
            },
        
        },

    });

    Song.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Song.belongsTo(user);
        Song.hasOne(playlist);

    };

    return Song;
};
