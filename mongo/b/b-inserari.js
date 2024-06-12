///// ANIMALS /////
db.animals.insertMany([
    {
        animal_id: "A001",
        name: "Miky",
        species: "Dog",
        years: 6,
        weight: 20.5,
        is_vaccinated: true,
        tags: ["friendly", "energetic"],
        medical_record: {
            notes: "Healthy"
        },
        veterinary_visits: [
            {
                reason: "Vaccination",
                treatment: "Rabies shot"
            },
            {
                reason: "General Check-up",
                treatment: "Regular health check"
            }
        ]
    },
    {
        animal_id: "A002",
        name: "Albastrel",
        species: "Cat",
        years: 2,
        weight: 3.3,
        is_vaccinated: false,
        tags: ["shy", "playful"],
        medical_record: {
            notes: "Needs dental checkup"
        },
        veterinary_visits: [
            {
                reason: "Injury",
                treatment: "Leg bandaged"
            }
        ]
    },
    {
        animal_id: "A003",
        name: "Cici",
        species: "Parrot",
        years: 3,
        weight: 5.5,
        is_vaccinated: true,
        tags: ["talkative", "colorful"],
        medical_record: {
            notes: "Healthy"
        },
        veterinary_visits: [
            {
                reason: "Initial Check-up",
                treatment: "General health check"
            }
        ]
    },

	{
        animal_id: "A004",
        name: "Rex",
        species: "Dog",
        years: 4,
        weight: 15.0,
        is_vaccinated: true,
        tags: ["loyal", "energetic"],
        medical_record: {
            notes: "Healthy, strong and active."
        },
        veterinary_visits: [
            {
                reason: "General Check-up",
                treatment: "Regular health check"
            }
        ]
    },
    {
        animal_id: "A005",
        name: "Misty",
        species: "Cat",
        years: 1,
        weight: 3.0,
        is_vaccinated: false,
        tags: ["curious", "playful"],
        medical_record: {
            notes: "Needs to be spayed."
        },
        veterinary_visits: []
    },
    {
        animal_id: "A006",
        name: "Rio",
        species: "Parrot",
        years: 2,
        weight: 0.8,
        is_vaccinated: true,
        tags: ["sweet", "chatty"],
        medical_record: {
            notes: "Healthy, enjoys various fruits and seeds."
        },
        veterinary_visits: [
            {
                reason: "Wing Clipping",
                treatment: "Trimmed wings"
            }
        ]
    }

]);

///// OWNERS /////

db.owners.insertMany([
    {
        owner_id: "O001",
        name: "Lupu Andra",
        email: "andra22lupu@gmail.com",
        phone: "0740513074",
        address: {
            street: "Aleea Profesor Vasile Petrescu",
            city: "Iasi",
            zip_code: "700560"
        },
        pets: [
            {
                animal_id: "A001",
                name: "Miky",
                species: "Dog"
            },
            {
                animal_id: "A003",
                name: "Cici",
                species: "Parrot"
            }
        ]
    },
    {
        owner_id: "O002",
        name: "Maria Martin",
        email: "maria.martin@yahoo.com",
        phone: "0744238536",
        address: {
            street: "Sos, Nicolina",
            city: "Iasi",
            zip_code: "700650"
        },
        pets: [
            {
                animal_id: "A002",
                name: "Albastrel",
                species: "Cat"
            }
        ]
    },

{
        owner_id: "O003",
        name: "Georgiana Cojocaru",
        email: "cojocaru.georgiana@gmail.com",
        phone: "0758462158",
        address: {
            street: "Str. Nicolae",
            city: "Iasi",
            zip_code: "700570"
        },
        pets: [
            {
                animal_id: "A004",
                name: "Rex",
                species: "Dog"
            },
            {
                animal_id: "A005",
                name: "Misty",
                species: "Cat"
            }
        ]
    },
    {
        owner_id: "O004",
        name: "Stefania Luca",
        email: "stefania.luca06@gmail.com",
        phone: "987-654-3210",
        address: {
            street: "Aleea Profesor Vasile Petrescu",
            city: "Iasi",
            zip_code: "700560"

        },
        pets: [
            {
                animal_id: "A006",
                name: "Rio",
                species: "Parrot"
            }
        ]
    }

]);


///// VETERINARY VISITS/////

db.veterinary_visits.insertMany([
    {
        visit_id: "V001",
        animal_id: "A001",
        owner_id: "O001",
        visit_date: new Date("2023-03-10"),
        reason: "Vaccination",
        treatment: "Rabies shot"
    },
    {
        visit_id: "V002",
        animal_id: "A002",
        owner_id: "O002",
        visit_date: new Date("2023-04-15"),
        reason: "Injury",
        treatment: "Leg bandaged"
    },
    {
        visit_id: "V003",
        animal_id: "A003",
        owner_id: "O001",
        visit_date: new Date("2023-05-20"),
        reason: "Initial Check-up",
        treatment: "General health check"
    },
    {
        visit_id: "V004",
        animal_id: "A001",
        owner_id: "O001",
        visit_date: new Date("2023-06-10"),
        reason: "General Check-up",
        treatment: "Regular health check"
    },

{
        visit_id: "V005",
        animal_id: "A004",
        owner_id: "O003",
        visit_date: new Date("2023-07-05"),
        reason: "Vaccination",
        treatment: "DHLPP Vaccine"
    },
    {
        visit_id: "V006",
        animal_id: "A005",
        owner_id: "O003",
        visit_date: new Date("2023-08-20"),
        reason: "General Check-up",
        treatment: "Physical examination"
    },
    {
        visit_id: "V007",
        animal_id: "A006",
        owner_id: "O004",
        visit_date: new Date("2023-09-15"),
        reason: "Feather Trimming",
        treatment: "Trimmed feathers"
    }

]);
