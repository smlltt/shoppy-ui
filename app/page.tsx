import { getMe } from "./getMe";

export default async function Home() {
  const me = await getMe();
  return <div>home page</div>;
}
