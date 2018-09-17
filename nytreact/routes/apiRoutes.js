const axios = require("axios");
const router = require("express").Router();

router.get("/articles", (req, res) => {
  axios
    .get("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + req.query.q + "&sort=newest&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931")
    // .then(({ data: { results } }) => res.json(results))
    // .then(results => console.log(results.data.response.docs))
    .then(console.log(req.query.q))
    .then(results => res.json(results.data.response.docs))
    .catch(err => res.status(422).json(err));
});

module.exports = router;