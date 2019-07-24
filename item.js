const express = require("express");
const router = express.Router();
const _ = require("lodash");
const Item = require("./itemSchema.js");


let itemArray = [];
router.post("/addItem", (req, res) => {
    let newItem = {
        "username": req.body.username,
        "content": req.body.content
    };
    itemArray.push(newItem);
    res.send(itemArray);
});

router.post("/add", (req, res) => {
    const errors = {};
    let newdoc = new Item({
        "username": req.body.username,
        "content": req.body.content
    });
    newdoc.save().then(() => console.log('complete'));
})

router.get("/", (req, res) => {
    res.send(itemArray);
});

router.get("/all", (req, res) => {
    const errors = {};
    Item.find()
      .then(items => {
        if (!items) {
          errors.noItems = "There are no items";
          res.status(404).json(errors);
        }
        res.json(items);
      })
      .catch(err => res.status(404).json({ noItems: "There are no items" }));
  });
  

router.put("/updateItem/:index", (req, res) => {
    let index = req.params.index;
    let newItem = {
        "username": req.body.username,
        "content": req.body.content
    };
    _.set(itemArray, index, newItem);
    res.send(itemArray);

});

router.put("/update", (req, res) => {
    Item.replaceOne({"username": req.body.username},
    {"username": req.body.replacename, "content": req.body.replacecontent}
    ).then(({ok, n}) => {
        res.json({ noItemL: "updated" });
    });
})

router.delete("/deleteItem/:index", (req, res) => {
    let index = req.params.index;
    _.pullAt(itemArray, index);
    res.send(itemArray);
});

router.delete("/delete", (req, res) => {
    let delUser = req.body.delUser;
    Item.deleteOne({ 'username': delUser}).then(({ ok, n}) => {
        console.log("You deleted " + delUser + "!");
        console.log(ok);
        console.log(n);
    });
})

module.exports = router;