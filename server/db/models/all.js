const db = require('../database')
const sequelize = require('sequelize')


const americanModel = db.define('american', {
    team: {
        type: sequelize.STRING
    }
})

const nationalModel = db.define('national', {
    team: {
        type: sequelize.STRING
    }
})

module.exports = {
    db,
    americanModel,
    nationalModel
}