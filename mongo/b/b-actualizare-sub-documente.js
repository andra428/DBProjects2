////////// ANIMALS ///////////

db.animals.updateOne(
    { animal_id: "A001" },
  { $set: { "veterinary_visits.$[element].treatment": "Another shot" } },
{ arrayFilters: [{ "element.reason": "Vaccination" }] }
);

db.animals.updateMany(
  {"species":"Dog"},
  { $set: { "veterinary_visits.$[element].treatment": "Basic health  check" } },
{ arrayFilters: [{ "element.reason": "General Check-up" }] }
);

db.animals.updateOne(
    { animal_id: "A001", "tags": "energetic" }, 
    { $set: { "tags.$": "lazy" } }
 );

db.animals.updateMany(
    { "species":"Dog","tags": "energetic" }, 
    { $set: { "tags.$": "lazy" } }
 );


db.animals.updateMany(
    { "species": "Cat" },
  { $set: { "veterinary_visits.$[element].treatment": "Another shot" } },
{ arrayFilters: [{ "element.reason": "Vaccination" }] }
);

////////////////// OWNERS ////////////////////

db.owners.updateOne(
    { owner_id: "O001", "pets.animal_id": "A001" }, 
    { $set: { "pets.$.name": "Max" } }
);


var owner = db.owners.findOne({ owner_id: "O001", "pets.animal_id": "A001" });

if (owner) {
  var pets = owner.pets;
  for (var i = 0; i < pets.length; i++) {
    if (pets[i].animal_id === "A001") {
      pets[i].name = "Max";
      break;
    }
  }
  db.owners.updateOne({ owner_id: "O001" }, { $set: { pets: pets } });

  db.animals.updateOne({ animal_id: "A001" }, { $set: { name: "Max" } });
} else {
  print("Proprietarul sau animalul nu a fost gasit");
}


var owner = db.owners.findOne({ owner_id: "O001", "pets.animal_id": "A001" });

if (owner) {
  var pets = owner.pets;
  for (var i = 0; i < pets.length; i++) {
    if (pets[i].animal_id === "A001") {
      pets[i].species = "Cat";
      break;
    }
  }
  db.owners.updateOne({ owner_id: "O001" }, { $set: { pets: pets } });

  db.animals.updateOne({ animal_id: "A001" }, { $set: { species: "Cat" } });
} else {
  print("Proprietarul sau animalul nu a fost gasit");
}
