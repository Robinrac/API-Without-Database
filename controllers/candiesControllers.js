//array candies stores every candy object
//the commentedout hardcoded candy types were code that was used in test
const candies = [
    /* { type: "Chocolate", color: "Brown", rarity: "Common" },
    { type: "Hard", color: "Green", rarity: "Rare" }, */
];

//fetching uuidv (uuidv4)
//uuidv4 is a package that creates unique IDs, which in this case is assigned to each Candy
const { v4: uuidv4 } = require("uuid");

// get candy
// Route = GET http://localhost:4000/api/candies

const getCandies = (req, res) => {

    //if statement to see if candies array is empty or not
    //used to avoid printing out an empty list of objects
    if (!candies.length) {
        return res.status(400).json({
        status: "error",
        msg: "The candy library is currently empty",
        });
    }

    res.status(200).json({
        status: "success",
        msg: "Printing candy library",
        result: candies.length,
        data: candies,
    });
};

// get CandyID
// Route = GET http://localhost:4000/api/candies/:id

const getById = (req, res) => {

    const { id } = req.params;
    const foundCandy = candies.find((candies) => candies.id === id);

    //if statement to see if searched-for candy ID exists
    if(!foundCandy)
    return res.status(400).json ({
    status: "error",
    msg: "Candy not found, existing candies are the following:",
    data: candies,
    });

    res.status(200).json({
        status: "success",
        msg: "Candy found",
        data: foundCandy,
    });
};

// postCandy
// Route = POST http://localhost:4000/api/candies/
//behöver ge ID till candy

const postCandy = (req, res) => {

    const candy = req.body;
    candies.push({ ...candy, id: uuidv4() });

    //when post request is working message will appear
    //also displays the added candy object
    res.status(200).json({
        status: "sucess",
        msg: "Following fruit added:",
        data: candies.slice(-1),
    });
};
// putCandy
// Route = POST http://localhost:4000/api/candies/:id

const putCandy = (req, res) => {

    const candyId = req.params.id;
    const { type, color, rarity } = req.body;

    const newCandy = {
        id: candyId,
        type,
        color,
        rarity,
    };

    const candyIndex = candies.findIndex((u) => (u.id = candyId));
    candies[candyIndex] = newCandy;

    res.status(200).json({
        status: "sucess",
        msg: "Fruit updated",
    });
};

// deleteCandy
// Route = POST http://localhost:4000/api/candies/:id

const deleteCandy = (req, res) => {
    const candyId = req.params.id;

    const candyIndex = candies.findIndex((u) => u.id == candyId);
    candies.Splice(candyIndex, 1);

    res.status(200).json({
        status: "sucess",
        msg: "Fruit deleted",
    });
};

//chaining exports to give code a clearer structure
module.exports = {
    getCandies,
    getById,
    postCandy,
    putCandy,
    deleteCandy,
  };