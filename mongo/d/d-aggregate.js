/////////////////// ANIMALS //////////////////

db.animals.aggregate([
    { $project: {_id:0, name: 1, medical_record: 1, num_visits: { $size: "$veterinary_visits" } } },
        { $sort: { num_visits: -1 } },
        { $limit: 3 }
]);

db.animals.aggregate([
    { $group: { _id: "$species", average_weight: { $avg: "$weight" } } }
]);

db.animals.aggregate([
    { $group: { _id: "$species", average_age: { $avg: "$years" } } }
]);

db.animals.aggregate([
{
$project: {_id:0, name : 1,years : 1,
result : {
$cond :{
if : {$gt : ["$years" , 2]},
then : "Old",
else : "Young"
}} }}
])

db.animals.aggregate([
  { $group: { _id: "$species", count: { $sum: 1 } } }
])

/////////////// OWNERS //////////////////////

db.owners.aggregate([
  {
    $match: { "address.city": "Iasi" }
  },
  {
    $addFields: {
      num_pets: { $size: "$pets" }
    }
  },
  {
    $sort: { num_pets: 1 } 
  },
  {
    $project: { _id: 0, name: 1,"address.city": 1, num_pets: 1 }
  }
]);

db.owners.aggregate([
  { $unwind: "$pets" },
  { $project: { _id: 0, owner_name: "$name", pet_name: "$pets.name", pet_species: "$pets.species" } }
]);