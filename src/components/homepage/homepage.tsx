import Callout from "./callout";
import Hero from "./hero";
import Intro from "./intro";
import TestimonialCard from "./testimonial";
import Trainings from "./trainings";

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
          speech: `This non-profit Association contributes from one hand to assisting industrialists in finding efficient Lebanese labor that would enable them to achieve high quality production, and from the other hand empowering graduates to acquire the practical skills to carry out their duties. This equation, which is a Win-Win situation, is the basis of the the Association's goal. From their side, employers find a Lebanese labor force that meets their needs, and enables them to dispense with the foreign labor force, and from their side the Lebanese youth improve their employment opportunities. Numerous industrialists embraced and supported this goal. The number of our partners is gradually increasing, but it must be said that the main supporter to the Association is Mr. Rafi Manoukian. To him all thanks and appreciation, as I consider him an honorable partner, who never asked to mention his name.
            `,
        }}
      />
      <Callout />
    </>
  );
}

export default Homepage;
