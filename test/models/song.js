const chai = require('chai');
const expect = chai.expect;

const db = require("../../models");

const testSongs = {
    song1: {
        title: thesongsong,
        source: "www.youtube.com",
        votes: 4,
        user_id: 66

    },
    song2: {
        title: themelody2,
        source: "www.deezer.com",
        votes: 8,
        user_id: 2

    }
}

describe('Song', function() {

    it('should create a Song with ...', () => {
        const song = testSongs.song1;
        db.Song.create(song).then(function (dbSong) {
            // test that lounge was created as expected
            for(let prop of dbSong) {
                expect(prop).to.equal(song[prop]);
            }
            done();  // ends test
        });
    });