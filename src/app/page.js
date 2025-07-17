import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1 className="text-3xl font-bold underline mt-8">
        Welcome to BANI Agency
      </h1>
      <h1 className="bayon-regular">This uses Bayon</h1>

<p className="barlow-regular">This uses Barlow Regular</p>

<p className="barlow-bold-italic">This is Barlow Bold Italic</p>

    </main>
  );
}
