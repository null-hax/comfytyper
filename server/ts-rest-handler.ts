import { fetchRequestHandler, tsr } from "@ts-rest/serverless/fetch";
import { contract } from "../ts-rest/contract";

/**
 * ts-rest route
 *
 * @link {@see https://ts-rest.com/docs/serverless/fetch-runtimes/}
 **/
const router = tsr.router(contract, {
  demo: async () => {
    return {
      status: 200,
      body: {
        demo: true,
      },
    };
  },
  createTodo: async ({ body }) => {
    console.log("Received new todo", { text: body.text });
    return {
      status: 200,
      body: {
        status: "Ok",
      },
    };
  },
});

export async function tsRestHandler<
  Context extends Record<string | number | symbol, unknown>,
>(request: Request, _context?: Context): Promise<Response> {
  return fetchRequestHandler({
    request: new Request(request.url, request),
    contract,
    router,
    options: {},
  });
}
