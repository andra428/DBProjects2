////////////////// ANIMALS //////////////////////

const cursor = db.animals.find();

while (cursor.hasNext()) {
    const animal = cursor.next();
	if(animal.species=="Parrot"){
    	print(animal.name);
	}
}

const cursor2 = db.animals.find();

while (cursor2.hasNext()) {
    const animal = cursor2.next();
if(animal.veterinary_visits.length==1){
    print(animal.name);
}
}


const cursor3 = db.animals.find();

while (cursor3.hasNext()) {
    const animal = cursor3.next();
    animal.veterinary_visits.forEach(visit => {
        if (visit.reason.match(/check-up/i)) {
            print(animal.name);
        }
    });
}

const cursor3 = db.animals.find();

while (cursor3.hasNext()) {
    const animal = cursor3.next();
    animal.tags.forEach(tag => {
        if (tag.match(/lazy/i)) {
            print(animal.name);
        }
    });
}


const cursor3 = db.animals.find();

while (cursor3.hasNext()) {
    const animal = cursor3.next();
   if( animal.weight<5.0){
            print(animal.name);
        }
   
}

const cursor4 = db.animals.find({"medical_record.notes":/healthy/i});

while (cursor4.hasNext()) {
    const animal = cursor4.next();
    print(animal.name);
}
//////////////// OWNERS //////////////////

const cursor = db.owners.find();
while (cursor.hasNext()) {
    const owner = cursor.next();
    if (owner.pets.length > 0) {
        print(`${owner.name} has ${owner.pets.length} pets`);
        owner.pets.forEach(pet => {
            print(` ${pet.name} - ${pet.species}`);
        });
    }
const address = owner.address;
print(`${address.city}, ${address.street}, ${address.zip_code}`);
}

/////////////////// VETERINARY VISITS ///////////////////////

const minDate = new Date("2023-06-01");
const cursor = db.veterinary_visits.find();
while (cursor.hasNext()) {
    const visit = cursor.next();
		if(visit.visit_date<minDate){
    print(`Visit ID: ${visit.visit_id}`);
    print(`Visit Date: ${visit.visit_date}`);
    print(`Reason: ${visit.reason}`);
    }
}

