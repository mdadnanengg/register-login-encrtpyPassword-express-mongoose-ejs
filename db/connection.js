import mongoose from "mongoose"

const dbConnect = (dburl, dbname) => {
    mongoose.connect(dburl + dbname)

    const db = mongoose.connection

    db.on('open', () => {
        console.log(`Database Connected!`)
    })
}

export default dbConnect