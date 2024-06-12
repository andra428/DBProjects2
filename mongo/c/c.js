/////////// ANIMALS /////////////

db.animals.find({ species: "Dog" })

db.animals.find({ species: "Parrot" }, { name: 1, years: 1, _id:0})

db.animals.find({ species: "Parrot" }, { name: 1, years: 1, _id:0}).sort({years:-1})

db.animals.find({species:"Dog", "veterinary_visits.reason": "General Check-up" }, {name:1,veterinary_visits:1,_id:0}).sort({name:1})

db.animals.find({ $and: [{ "tags": "friendly" }, { "tags": "lazy" }] }, { name: 1, tags: 1, _id: 0 })

db.animals.find({ $or: [{ "tags": "friendly" }, { "tags": "lazy" }] }, { name: 1, tags: 1, _id: 0 })


db.animals.createIndex({ "medical_record.notes": "text" })

db.animals.find(
  { $text: { $search: "Healthy" } }, 
  { name: 1, species: 1,years:1, _id:0 }
).sort({ years:1})

db.animals.find(
  { $text: { $search: "Healthy" } }, 
  { score: { $meta: "textScore" }, name: 1, species: 1, _id:0 }
).sort({ score: { $meta: "textScore" } })

db.animals.find({ veterinary_visits: { $exists: false } })

db.animals.find({ veterinary_visits: null })

db.animals.find({ veterinary_visits: { $exists: true, $size: 0 } },{name:1,veterinary_visits:1,_id:0})

db.animals.find({ species: "Parrot" },{species:1,name:1,_id:0})
  .skip(1)
  .limit(3)


//////////////// OWNERS ////////////////////

db.owners.find({ "address.city": "Iasi" }, {_id:0, name:1,address:1}).sort({name:1})

db.owners.find({ "pets.species": "Cat" }, {_id:0, name:1,pets:1}).sort({name:-1})

db.owners.find({ pets: { $exists: true, $size: 0 } })

db.owners.find({ pets: { $exists: true, $size: 1 } },{name:1, _id:0, email:1, phone:1,"pets.name":1}).sort({"pets.name":1})
db.owners.find({ email: /gmail/ },{name:1,_id:0, email:1})

db.owners.find({ email:{$not: /gmail/ }},{name:1,_id:0, email:1})

db.owners.find(
    {
        "address.street": { $regex: "str", $options: "i" }
    }, 
    { 
        name: 1, 
        address: 1, 
        _id: 0 ,
        phone:1
    }
).sort({phone:-1})

db.owners.find({ "pets.species":"Parrot" },{"pets.species":1,name:1,_id:0})
  .skip(0)
  .limit(3)

////////////// VETERINARY VISITS ////////////////////////

db.veterinary_visits.find({ animal_id: "A001" },{animal_id:1,_id:0,reason:1})

db.veterinary_visits.find({ visit_date: { $lt: ISODate("2023-07-01") } },{visit_id:1,_id:0, visit_date:1, treatment:1}).sort({visit_date:1})

db.veterinary_visits.find({ visit_date: { $gt: ISODate("2023-07-01") } },{visit_id:1,_id:0, visit_date:1, treatment:1}).sort({visit_date:-1})

db.veterinary_visits.find({ reason: /check-up/i },{_id:0,visit_id:1,animal_id:1, reason:1}).sort({visit_date:1})

db.veterinary_visits.find({ reason: /check-up/i },{_id:0,visit_id:1,animal_id:1, reason:1}).sort({visit_date:1}).limit(3).skip(1)

db.veterinary_visits.find({},{_id:0,visit_id:1,reason:1,treatment:1}).limit(4).skip(1)


