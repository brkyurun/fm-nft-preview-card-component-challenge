import { Attribution } from "./components/Attribution";
import { Card } from "./components/Card";

function App() {
  return (
    <main className="flex flex-col items-center justify-center bg-main-bg h-screen px-6">
      <Card
        nftName="Equilibrium #3429"
        nftDescription="Our Equilibrium collection promotes balance and calm."
        nftPrice="0.041 ETH"
        nftTimeLeft="3 days left"
      />
      <Attribution />
    </main>
  );
}

export default App;
