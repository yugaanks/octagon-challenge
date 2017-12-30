const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
const uuid = require('node-uuid');

let exportedMethods = {
    getAllUsers() {
        return users().then((userCollection) => {
            return userCollection
                .find({})
                .toArray();
        });
    },
    getUserById(id) {
        if (!id)
            return Promise.reject("Invalid Id provided");
        return users().then((userCollection) => {
            return userCollection
                .findOne({ _id: id })
                .then((user) => {
                    if (!user)
                        throw "User not found";
                    return user;
                });
        });
    },
    addUser(fname, lname, email, zipcode, state) {
        if (typeof fname !== 'string')
            return Promise.reject("No first name provided");
        
        return users().then((userCollection) => {
            let newUser = {
                fname: fname,
                lname: lname,
                email: email,
                _id: uuid.v4(),
                zipcode: zipcode,
                state: state
            };
            
            return userCollection
                .insertOne(newUser)
                .then((newInsertInformation) => {
                    console.log(newInsertInformation);
                    return newInsertInformation.insertedId;
                })
                .then((newId) => {
                    return this.getUserById(newId);
                });
        });
    },
    removeUser(id) {
        if (!id)
            return Promise.reject("No ID provided");
        return users().then((userCollection) => {
            return userCollection
                .removeOne({ _id: id })
                .then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        throw (`Could not delete user with id of ${id}`)
                    } else { }
                });
        });
    }
}

module.exports = exportedMethods;