import {rest} from "msw";

export default function get(endpoint: string, response: Object | null, statusCode: number = 200): any {
  return rest.get(endpoint, (req, res, ctx) => {
    return res(ctx.status(statusCode), ctx.json(response ? response : {}));
  });
}
