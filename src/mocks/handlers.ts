import get from "./msw-utils";
import navn from "./person-navn.json";

export const handlers = [
  get("https://api.nav.no/dittnav-api/personalia/navn", navn),
];
