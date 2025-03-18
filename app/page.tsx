import Landing from "./sections/Landing";
import Testimonials from "./sections/Testimonials";
import WorkExperience from "./sections/WorkExperience";
import Works from "./sections/Works";

export default function Home() {
  return (
    <div>
      <Landing />
      <Testimonials />
      <Works />
      <WorkExperience />
    </div>
  );
}
