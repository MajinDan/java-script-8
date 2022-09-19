//accessing nested arrays
let myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "danelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
]
let secondTree = myPlants[1].list[1];
console.log(myPlants);