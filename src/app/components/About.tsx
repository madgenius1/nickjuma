

export default function About() {
  return (
    <div id="about" className="h-screen bg-gray-100 flex items-center justify-center 
    opacity-0 translate-y-10 transition-all duration-500 ease-out 
    will-change-transform"
      data-animate>
      <div className="py-12 text-[#121212]">
        <h1 className="text-center text-4xl mt-10">About</h1>
        <p className="text-center mt-4">This is the About section.</p>
      </div>
    </div>
  );
}
