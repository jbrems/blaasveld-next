import { getNumber } from "./number.utils";

export default async function Home() {
  const nr = await getNumber()

  return (<>
    <h2>Homepage</h2>
    <span>Your number is {nr}</span>
  </>);
}
