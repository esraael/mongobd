const mongodb=require('mongodb')
const mongoclient=mongodb.MongoClient;
const connection_url='mongodb://127.0.0.1:27017'
const dbname="proj__1"
mongoclient.connect(connection_url , (error , res)=>{
    if(error){
        return console.log("error has occured")
    }
    console.log("all perf")
    const db=res.db(dbname)
    // --------------------------------
    db.collection('users').insertOne({
        name:"esraa",
        age:"22",
    },(error , data)=>{
        if(error){
            return console.log("its error")
        }
        console.log(data.insertedId)
    })
    // -----------------------------
    db.collection('users').insertOne({
        name:"medhat",
        age:"25",
    },(error , data)=>{
        if(error){
            return console.log("its error")
        }
        console.log(data.insertedId)
    })
    // ------------------------------
    db.collection('users').insertMany(
    [
    {
        name:"aya",
        age:"23",
    },
    {
        name:"ahmed",
        age:"24",
    },
    {
        name:"mohamed",
        age:"25",
    },
    {
        name:"ali",
        age:"25",
    },
    {
        name:"rahma",
        age:"25",
    },
    {
        name:"zozo",
        age:"27",
    },
    {
        name:"soso",
        age:"27",
    },
    {
        name:"roro",
        age:"27",
    },
    {
        name:"toto",
        age:"27",
    },
    {
        name:"lolo",
        age:"27",
    }
    ],(error , data)=>{
        if(error){
            return console.log("its error")
        }
        console.log(data.insertedCount)
    })
    // ------------------------------------
    db.collection('users').find({age:27}).toArray((error , users)=>{
        if(error){
            console.log("error has be occured")
        }
        console.log(users)
    })
    // -------------------------------------
    db.collection('users').find({age:27}).count((error , users)=>{
        if(error){
            console.log("error has be occured")
        }
        console.log(users)
    })
    // ------------------------------------------
    db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
        if(error){
            console.log("error has be occured")
        }
        console.log(users)
    })
    // -------------------------------------------
    db.collection('users').updateOne({_id:mongodb.ObjectId("65fdcf9e4a8f57e92a983d64")},{
        $set:{name:"asama"},
        $inc:{age:4}
    }).then((data1)=>{
        console.log(data1.modifiedCount)
    }).catch((error)=>{
        console.log(error)
    })
    // -----------------------------------------
    db.collection('users').updateOne({_id:mongodb.ObjectId("65fdd024ec3da32538280ec8")},{
        $set:{name:"hend"},
        $inc:{age:4}
    }).then((data1)=>{
        console.log(data1.modifiedCount)
    }).catch((error)=>{
        console.log(error)
    })
    // -------------------------------------------
    db.collection('users').updateOne({_id:mongodb.ObjectId("65fdd024ec3da32538280ec9")},{
        $set:{name:"omar"},
        $inc:{age:4}
    }).then((data1)=>{
        console.log(data1.modifiedCount)
    }).catch((error)=>{
        console.log(error)
    })
    // -------------------------------------------
    db.collection('users').updateOne({_id:mongodb.ObjectId("65fdd024ec3da32538280eca")},{
        $set:{name:"smsm"},
        $inc:{age:4}
    }).then((data1)=>{
        console.log(data1.modifiedCount)
    }).catch((error)=>{
        console.log(error)
    })
    // ----------------------------------------------
    db.collection('users').updateMany({},{
        $inc:{age:4},
    }).then((data1)=>{
        console.log(data1.modifiedCount)
    }).catch((error)=>{
        console.log(error)
    })
    // ------------------------------------------------
    db.collection('users').deleteMany({age:41})
    .then((data1)=>{
        console.log(data1.deletedCount)
    }).catch((error)=>{
        console.log(error)
    }) 
})




















