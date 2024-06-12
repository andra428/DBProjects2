db.owners.aggregate([
  {
    $lookup: {
      from: "animals",
      localField: "pets.animal_id",
      foreignField: "animal_id",
      as: "pets_info"
    }
  },
  {
    $project: {
      _id: 0,
      owner_id: 1,
      name: 1,
      pets: {
        $map: {
          input: "$pets_info",
          as: "pet",
          in: {
            animal_id: "$$pet.animal_id",
            name: "$$pet.name",
            years: "$$pet.years",
            
          }
        }
      }
    }
  },
  {
    $unwind: "$pets"
  },
  {
    $sort: { "pets.years": 1 }
  }
]);


db.animals.aggregate([
  {
    $lookup: {
      from: "owners",
      localField: "animal_id",
      foreignField: "pets.animal_id",
      as: "owner_info"
    }
  },
  {
    $project: {
      _id: 0,
      animal_id: 1,
      name: 1,
      owner_info: {
        $map: {
          input: "$owner_info",
          as: "owner",
          in: {
            owner_id: "$$owner.owner_id",
            name: "$$owner.name"
          }
        }
      }
    }
  },
  {
    $unwind: "$owner_info"
  },
  {
    $sort: { years: 1 }
  }
]);
