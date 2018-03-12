'use strict';

//Mongo client
let mongoose = require("mongoose");


/**
 * Class to manage DML statements to the mongo db
 */
class MongoRepository {

    /**
     * Connect to the database
     */
    static connect() {
        mongoose.connect("mongodb://localhost/parking", err => {
            if (err) {
                console.log("Couldn't connect to the database");
            } else {
                console.log("Connected to the database")
            }
        });
    }

    /**
     * Method to find records with the given query
     * @param {Mongoose model} model 
     * @param {json} query 
     */
    static find(model, query) {
        return new Promise((resolve, reject) => {
            model.find(query, (err, res) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(res);
                }
            })
        });
    };

    /**
     * Method to insert one or more documents
     * @param {Mongoose model} model 
     * @param {json} documents 
     */
    static create(model, documents) {
        return new Promise((resolve, reject) => {
            model.create(documents, (err, res) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(res);
                }
            })
        })
    };

    /**
     * Update the document with the given query
     * @param {Mongoose model} model 
     * @param {json} query 
     * @param {json} document 
     */
    static updateOne(model, query, document) {
        return new Promise((resolve, reject) => {
            model.update(query, document, (err, res) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(res);
                }
            })
        });
    }

    /**
     * Update the documents with the given query
     * @param {Mongoose model} model 
     * @param {json} query 
     * @param {json} documents 
     */
    static updateMany(model, query, documents) {
        return new Promise((resolve, reject) => {
            model.updateMany(query, documents, (err, res) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(res);
                }
            })
        })
    }

    /**
     * Delete a document with the given query
     * @param {Mongoose model} model 
     * @param {json} query 
     */
    static deleteOne(model, query) {
        return new Promise((resolve, reject) => {
            model.deleteOne(query, (err, res) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(res);
                }
            })
        })
    }

    /**
     * Delete the documents with the given query
     * @param {Mongoose model} model 
     * @param {json} query 
     */
    static deleteMany(model, query) {
        return new Promise((resolve, reject) => {
            model.deleteMany(query, (err, res) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(res);
                }
            }).catch(reject);
        })
    }
}

module.exports = MongoRepository;