const express = require("express");
const Podlet = require("@podium/podlet");

const promClient = require("prom-client");
const PrometheusConsumer = require("@metrics/prometheus-consumer");

const basePath = process.env.BASE_PATH || "/person/podlet-dittnav-generelle-fliser";
const port = process.env.PORT || 7400;
const podletVersion = process.env.VERSION_HASH || `${new Date().getTime()}`;
const isDevelopmentEnv = true;

const podletName = "podlet-dittnav-generelle-fliser";

const podlet = new Podlet({
  name: podletName,
  version: podletVersion,
  pathname: "/",
  fallback: "/fallback",
  development: isDevelopmentEnv,
  logger: console,
});

podlet.css({
  value: "/dist/generelle-fliser.css",
});

podlet.js({
  value: "/dist/generelle-fliser.esm.js",
  type: "module",
  defer: true,
});

const app = express();
app.use(podlet.middleware());

app.use("/dist", express.static("./dist"));
app.use(`${basePath}/dist`, express.static("./dist"));

app.get(`${basePath}${podlet.content()}`, (req, res) => {
  res.status(200).podiumSend(`<div id="${podletName}"></div>`);
});

app.get(`${basePath}${podlet.fallback()}`, (req, res) => {
  res.status(200).podiumSend(`<div>Fallback for ${podletName}:${podletVersion}</div>`);
});

// generate the podlet manifest
app.get(`${basePath}${podlet.manifest()}`, (req, res) => {
  res.status(200).send(podlet);
});

// isAlive/isReady route for Nais
app.get(`${basePath}/isAlive|isReady`, (req, res) => res.sendStatus(200));

// Set up prometheus client with podium metrics
const metricsConsumer = new PrometheusConsumer({ client: promClient });
promClient.collectDefaultMetrics({ register: metricsConsumer.registry });
metricsConsumer.on("error", (err) => console.error(err));
podlet.metrics.pipe(metricsConsumer);

app.get("/metrics", async function (req, res) {
  const metrics = await metricsConsumer.metrics();
  res.set("Content-Type", metricsConsumer.contentType()).send(metrics);
});

//start the app at port
console.log(JSON.stringify(podlet, undefined, 2));
console.log(`Content path ${podlet.content()}`);
console.log(`Manifest path ${podlet.manifest()}`);
console.log(`Starting on port ${port} with basePath ${basePath}`);
app.listen(port);
