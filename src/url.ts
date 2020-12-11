function getEnvironment(): string {
  let environment = "development";
  if (process.env.NODE_ENV === "production") {
    environment = "production";
  }
  return environment;
}

const OPPFOLGING_URL: any = {
  development: "https://www.dev.nav.no/person/dittnav-api/oppfolging",
  production: "https://www.nav.no/person/dittnav-api/oppfolging",
};

export const oppfolgingUrl = OPPFOLGING_URL[getEnvironment()];
