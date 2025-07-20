import Website from "./components/Website"; // Capitalized component name

export default function Home() {
  return (
    <main className="relative">
      
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <video
          className="w-full h-full object-cover"
          src="/videos/Hero-section-render.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <Website />
    </main>
  );
}
