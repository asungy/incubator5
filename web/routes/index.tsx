import { FreshContext } from "$fresh/server.ts";
import Banner from "@/components/banner.tsx";

export async function handler(
  req: Request,
  ctx: FreshContext,
): Promise<Response> {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  if (!code) {
    return ctx.renderNotFound({
      message: "GitHub code not provided"
    });
  }

  // TODO: Continue from example
}

export default function Main() {
  return (
    <>
      <Banner loggedIn={false}/>
    </>
  );
}
