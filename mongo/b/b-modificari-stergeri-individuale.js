///////////// ANIMALS ///////////////

db.animals.updateOne(
    { animal_id: "A001" }, 
    { $set: { is_vaccinated: false } }
);

db.animals.updateOne(
    { animal_id: "A001" }, 
    { $set: { weight: 18.7 } }
);

db.animals.updateOne(
    { animal_id: "A001" }, 
    { $set: { years: 7 } }
);

db.animals.updateOne(
    { animal_id: "A001" }, 
    { $set: { "medical_record.notes": "A little sick, but better now" } }
);

db.animals.deleteOne({ animal_id: "A002" })

////////////// OWNERS ///////////////

db.owners.updateOne(
    { owner_id: "O002" },
    { $set: { email: "martin.maria20@gmail.com" } } 
);

db.owners.updateOne(
    { owner_id: "O002" },
    { $set: { phone: "0754637281" } } 
);


db.owners.updateOne(
    { owner_id: "O002" }, 
    { $set: { "address.street": "Strada Ilie Macelaru", "address.city": "Cluj", "address.zip_code": "400380" } } 
);

db.owners.deleteOne({ owner_id: "O002" });

///////////// VETERINARY VISITS ////////////////////


db.veterinary_visits.updateOne(
    { visit_id: "V005" },
    { 
        $set: { 
            visit_date: new Date("2023-12-31"),
            reason: "Annual Check-up",
            treatment: "DHLPP Vaccine - Booster" 
        } 
    } 
);

db.veterinary_visits.deleteOne({ visit_id: "V005" });
