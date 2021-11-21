const HLTV = require("hltv-api").default;
const express = require("express");
const app = express();
app.set("view engine", "ejs");
// app.get("/", async (req, res) => {
// 	const news = await HLTV.getNews();
// 	res.json(news);
// });
app.get("/", function (req, res) {
	res.render("pages/index");
});

app.get("/matches", async (req, res) => {
	const matches = await HLTV.getMatches();
	res.render("pages/matches", { matches });
});

app.get("/news", async (req, res) => {
	const news = await HLTV.getNews();
	res.render("pages/news", { news });
});

app.get("/top-players", async (req, res) => {
	const players = await HLTV.getTopPlayers();
	res.render("pages/players", { players });
});

app.get("/top-teams", async (req, res) => {
	const teams = await HLTV.getTopTeams();
	res.render("pages/teams", { teams });
});

app.listen(4000, () => {
	console.log("Listening on port localhost:4000");
});
