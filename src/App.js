import classes from "../src/styles/components/layout/body.module.scss";
import DayTab from "./components/dayTab";
import Graph from "./components/graph";
import BitcoinBox from "./components/layout/BitcoinWallet";

function App() {
  return (
    <div className={classes.main}>
      <BitcoinBox />
      <DayTab />
      <Graph/>
    </div>
  );
}

export default App;
