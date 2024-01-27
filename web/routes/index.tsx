import { FreshContext } from "$fresh/server.ts";
import Banner from "@/components/banner.tsx";
import { gitHubApi } from "@/utils/github.ts";

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

  const accessToken = await gitHubApi.getAccessToken(code);
  const userData = await gitHubApi.getUserData(accessToken);

  console.log("accessToken : ", accessToken);
  console.log("userData: ", userData);

  return ctx.render();
}

export default function Main() {
  return (
    <>
      <Banner loggedIn={false}/>
    </>
  );
}
