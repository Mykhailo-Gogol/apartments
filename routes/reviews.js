var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json([
    {
      author: "Mary",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequuntur nobis quos, mollitia corporis neque porro? Incidunt at, soluta praesentium mollitia vitae dolore dolorum nam rem ratione, omnis, excepturi vel?",
      rating: 4,
    },
    {
      author: "Larry",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequuntur nobis quos, mollitia corporis neque porro? Incidunt at, soluta praesentium mollitia vitae dolore dolorum nam rem ratione, omnis, excepturi vel?",
      rating: 3.5,
    },
    {
      author: "Lay",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequuntur nobis quos, mollitia corporis neque porro? Incidunt at, soluta praesentium mollitia vitae dolore dolorum nam rem ratione, omnis, excepturi vel?",
      rating: 2.5,
    },
    {
      author: "Jerry",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequuntur nobis quos, mollitia corporis neque porro? Incidunt at, soluta praesentium mollitia vitae dolore dolorum nam rem ratione, omnis, excepturi vel?",
      rating: 4.5,
    },
    {
      author: "Henry",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequuntur nobis quos, mollitia corporis neque porro? Incidunt at, soluta praesentium mollitia vitae dolore dolorum nam rem ratione, omnis, excepturi vel?",
      rating: 5,
    },
  ]);
});

module.exports = router;
