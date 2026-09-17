import { tryGetClientShowcases } from "../lib/cms.js";
import HomePage from "./HomePage";

export const revalidate = 60;

export default async function Home() {
  const showcases = await tryGetClientShowcases(4);
  return <HomePage showcases={showcases} />;
}
