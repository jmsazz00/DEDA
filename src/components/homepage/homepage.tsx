import Callout from "./callout";
import Hero from "./hero";
import Intro from "./intro";
import TestimonialCard from "./testimonial";
import Trainings from "./trainings";

// TEST THE WEBSITE'S PERFORMANCE AND SPEED LIKE MOSH DID

function Homepage() {
  return (
    <>
      <Hero />
      <Intro />
      <Trainings />
      <TestimonialCard
        president={{
          image: "./images/team.jpg",
          name: "Nabil Naccache",
          profession: "DEDA's president",
          speech:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
        }}
      />
      <Callout />
    </>
  );
}

export default Homepage;
