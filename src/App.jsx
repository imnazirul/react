import Header from "./Componets/header";
import Banner from "./Componets/banner";
import List from "./Componets/list";
function App() {
  return (
    <div>
      <header className="bg-[#264653]  text-white pt-6 px-36">
        <Header />
        <Banner />
      </header>
      <main className="relative mb-96">
        <div className="absolute w-56 left-[50%] right-[50%] translate-x-[-50%]">
          <List />
        </div>
      </main>
    </div>
  );
}
export default App;
