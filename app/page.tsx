import Landing from "./sections/Landing";
import Testimonials from "./sections/Testimonials";
import WorkExperience from "./sections/WorkExperience";
import Projects from "./sections/Project";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <div>
      <Landing />
      {/* <Testimonials /> */}
      <Projects />
      <WorkExperience />
      <Contact />
    </div>
  );
}
