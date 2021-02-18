import {TruckBig} from "../lib/class/TruckBig";

module.exports = function (app, router, trucks) {

    /**
     * List all trucks
     */
    app.get('/trucks', function (req, res) {
        res.end(JSON.stringify(trucks));
    });

    /**
     * Create new truck.
     */
    router.post('/trucks', function (req, res) {
        console.log(req.body);
        if (req.body.id !== undefined && req.body.weight !== undefined) {

            let searchTruckByID = trucks.find(x => x.id === req.body.id);
            console.log('searchTruckByID', searchTruckByID)

            if (searchTruckByID === undefined) {
                let truck = new TruckBig();
                truck.setId(req.body.id);
                truck.setWeight(req.body.weight);
                trucks.push(truck);
                res.write(JSON.stringify('Truck was created.'));
            } else {
                res.write(JSON.stringify('Error: this truck ID is exists.'));
            }
            console.log('All trucks:', trucks);
        } else {
            res.write(JSON.stringify('truck ID & truck weight are required.'));
        }
        res.end();
    })

}