import Landing from "./sections/Landing";
import Testimonials from "./sections/Testimonials";
import WorkExperience from "./sections/WorkExperience";
import Projects from "./sections/Project";

export default function Home() {
  return (
    <div>
      <Landing />
      <Testimonials />
      <Projects />
      <WorkExperience />
    </div>
  );
}
