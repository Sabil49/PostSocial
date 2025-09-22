import LoginPage from "./login/page";
import Testdata from "./Testdata/page";
import Piechart from "./Charts/Piechart/Piechart";

export default function Home() {
  return (
    <div className="">
      <LoginPage />
      <Piechart />
      <Testdata />
    </div>
  );
}
