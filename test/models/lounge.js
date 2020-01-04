const chai = require('chai');
const expect = chai.expect;

const db = require("../../models");

const testLounges = {
    lounge1: {

    },
    lounge2: {

    }
}

describe('Lounge', function() {

    it('should create a Lounge with ...', () => {
        const lounge = testLounges.lounge1;
        db.Lounge.create(lounge).then(function (dbLounge) {
            // test that lounge was created as expected
            for(let prop of dbLounge) {
                expect(prop).to.equal(lounge[prop]);
            }
            done();  // ends test
        });
    });

    it('should create a Lounge with ...', () => {
        const lounge = testLounges.lounge2;
        db.Lounge.create(lounge).then(function (dbLounge) {
            // test that lounge was created as expected
            for(let prop of dbLounge) {
                expect(prop).to.equal(lounge[prop]);
            }
            done();  // ends test
        });
    });    


    // it('should list ALL Lounges', () => { 
    //     // code here for get all lounges
    //     db.Lounge.findAll({}).then(function (dbLounges) {
            
    //     });
    // });

    // get a single lounge


    // update a lounge (set inactive)

    // delete all lounges created by tests
  });