import get from "./msw-utils";
import oppfolging from "./oppfolging.json";

export const handlers = [
  get("https://www.dev.nav.no/person/dittnav-api/oppfolging", oppfolging),
];
