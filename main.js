const app = require('./server')
const { db } = require('./server/db/database')
const PORT = 3000

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`baseball time is now ${PORT}`))
})