"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require('chai');
const assert = chai.assert;
const TruckBig_1 = require("../src/lib/class/TruckBig");
const StandardParcel_1 = require("../src/lib/class/StandardParcel");
let truckBig = new TruckBig_1.TruckBig();
describe('truckBig tests', function () {
    it('truckBig setId getId', function () {
        let truckId = 'ABC-12-345';
        truckBig.setId(truckId);
        assert.strictEqual(truckBig.getId(), truckId);
    });
    it('truckBig setWeight getWeight', function () {
        let truckWeight = 4567.4; //it is kg
        truckBig.setWeight(truckWeight);
        assert.strictEqual(truckBig.getWeight(), truckWeight);
    });
    it('truckBig setWeight getWeight', function () {
        let truckWeight = 4567.4; //it is kg
        truckBig.setWeight(truckWeight);
        assert.strictEqual(truckBig.getWeight(), truckWeight);
    });
    it('truckBig parcel validation failing', function () {
        let parcel1 = new StandardParcel_1.StandardParcel();
        try {
            parcel1.getValidator().validate();
            truckBig.addParcel(parcel1);
        }
        catch (e) {
            assert.strictEqual(e, 'Parcel ID is required');
        }
    });
    it('truckBig parcel validation OK', function () {
        let parcel1 = new StandardParcel_1.StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(12.45);
        try {
            parcel1.getValidator().validate();
            truckBig.addParcel(parcel1);
        }
        catch (e) {
            assert.strictEqual(e, null);
        }
    });
    it('truckBig getparcels', function () {
        let truckBigTestCountOfParcels = new TruckBig_1.TruckBig();
        let parcel1 = new StandardParcel_1.StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(12.45);
        let parcel2 = new StandardParcel_1.StandardParcel();
        parcel2.setParcelId(2);
        parcel2.setWeight(32.45);
        truckBigTestCountOfParcels.addParcel(parcel1);
        truckBigTestCountOfParcels.addParcel(parcel2);
        let parcels = truckBigTestCountOfParcels.getParcels();
        assert.strictEqual(2, Object.values(parcels).length);
    });
    it('truckBig getLoadedParcelWeight', function () {
        let truckBigTestCountOfParcels = new TruckBig_1.TruckBig();
        let parcel1 = new StandardParcel_1.StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(14.5);
        let parcel2 = new StandardParcel_1.StandardParcel();
        parcel2.setParcelId(2);
        parcel2.setWeight(22.72);
        truckBigTestCountOfParcels.addParcel(parcel1);
        truckBigTestCountOfParcels.addParcel(parcel2);
        assert.strictEqual((parcel1.getWeight() + parcel2.getWeight()), truckBigTestCountOfParcels.getLoadedParcelWeight());
    });
    it('truckBig getLoadedParcelCount', function () {
        let truckBigTestCountOfParcels = new TruckBig_1.TruckBig();
        let parcel1 = new StandardParcel_1.StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(14.5);
        let parcel2 = new StandardParcel_1.StandardParcel();
        parcel2.setParcelId(2);
        parcel2.setWeight(12.3);
        let parcel3 = new StandardParcel_1.StandardParcel();
        parcel3.setParcelId(3);
        parcel3.setWeight(4.11);
        let parcel4 = new StandardParcel_1.StandardParcel();
        parcel4.setParcelId(2);
        parcel4.setWeight(0.16);
        truckBigTestCountOfParcels.addParcel(parcel1);
        truckBigTestCountOfParcels.addParcel(parcel2);
        truckBigTestCountOfParcels.addParcel(parcel3);
        truckBigTestCountOfParcels.addParcel(parcel4);
        assert.strictEqual(4, truckBigTestCountOfParcels.getLoadedParcelCount());
    });
    it('truckBig verify === true', function () {
        let truckBigTestCountOfParcels = new TruckBig_1.TruckBig();
        let parcel1 = new StandardParcel_1.StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(14.5);
        let parcel2 = new StandardParcel_1.StandardParcel();
        parcel2.setParcelId(2);
        parcel2.setWeight(12.3);
        let parcel3 = new StandardParcel_1.StandardParcel();
        parcel3.setParcelId(3);
        parcel3.setWeight(4.11);
        truckBigTestCountOfParcels.setWeight(1234.5); //truck weight must be added
        truckBigTestCountOfParcels.addParcel(parcel1);
        truckBigTestCountOfParcels.addParcel(parcel2);
        truckBigTestCountOfParcels.addParcel(parcel3);
        assert.strictEqual(true, truckBigTestCountOfParcels.checkParcels());
    });
    it('truckBig verify === false because one of the parcel is not valid', function () {
        let truckBigTestVerifyFailed = new TruckBig_1.TruckBig();
        let parcel1 = new StandardParcel_1.StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(14.5);
        let parcel2 = new StandardParcel_1.StandardParcel();
        parcel2.setParcelId(2);
        parcel2.setWeight(12.3);
        let parcel3 = new StandardParcel_1.StandardParcel();
        parcel3.setParcelId(3);
        truckBigTestVerifyFailed.addParcel(parcel1);
        truckBigTestVerifyFailed.addParcel(parcel2);
        truckBigTestVerifyFailed.addParcel(parcel3);
        try {
            truckBigTestVerifyFailed.checkParcels();
        }
        catch (e) {
            assert.strictEqual(e, 'Parcel weight is required');
        }
    });
    it('truckBig verify === false because truck weight is not given', function () {
        let truckBigTestVerifyFailed = new TruckBig_1.TruckBig();
        let parcel1 = new StandardParcel_1.StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(14.5);
        let parcel2 = new StandardParcel_1.StandardParcel();
        parcel2.setParcelId(2);
        parcel2.setWeight(12.3);
        truckBigTestVerifyFailed.addParcel(parcel1);
        truckBigTestVerifyFailed.addParcel(parcel2);
        try {
            let valid = truckBigTestVerifyFailed.checkParcels();
            assert.strictEqual(false, valid);
        }
        catch (e) {
            assert.strictEqual(e, 'Parcel weight is required');
        }
    });
    it('truckBig verify === false because trucks parcels IDs are not unique', function () {
        let truckBigTestVerifyFailed = new TruckBig_1.TruckBig();
        let parcel1 = new StandardParcel_1.StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(14.5);
        let parcel2 = new StandardParcel_1.StandardParcel();
        parcel2.setParcelId(1);
        parcel2.setWeight(12.3);
        truckBigTestVerifyFailed.addParcel(parcel1);
        truckBigTestVerifyFailed.addParcel(parcel2);
        truckBigTestVerifyFailed.setWeight(1234.5); //truck weight must be added
        try {
            let valid = truckBigTestVerifyFailed.checkParcels();
            assert.strictEqual(false, valid);
        }
        catch (e) {
            assert.strictEqual(e, 'Parcel weight is required');
        }
    });
    it('truckBig delete parcel', function () {
        let truckBigTest = new TruckBig_1.TruckBig();
        let parcel1 = new StandardParcel_1.StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(14.5);
        let parcel2 = new StandardParcel_1.StandardParcel();
        parcel2.setParcelId(2);
        parcel2.setWeight(12.3);
        truckBigTest.addParcel(parcel1);
        truckBigTest.addParcel(parcel2);
        truckBigTest.setWeight(1234.5); //truck weight must be added
        truckBigTest.removeParcel(2);
        assert.strictEqual(1, truckBigTest.getLoadedParcelCount());
        truckBigTest.removeParcel(1);
        assert.strictEqual(0, truckBigTest.getLoadedParcelCount());
        truckBigTest.removeParcel(2);
        assert.strictEqual(0, truckBigTest.getLoadedParcelCount());
    });
});
