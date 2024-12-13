
import ProjectList from './ProjectList';


export default function Work() {
  return (
    <div id="work" className="min-h-screen bg-fixed bg-parallax bg-cover bg-no-repeat  flex flex-col items-center pb-12 max-w-screen-xl">
      <div className="py-12 px-4 text-[#4831D4]">
        <h1 className="text-center text-4xl font-semibold mt-8">Work</h1>
        <p className="text-center text-xl font-medium mt-4">Selected projects I have worked on.</p>
      </div>

      {/*Project List*/}
      <div className="px-2 py-6">
        <ProjectList />
      </div>
    </div>
  );
}
