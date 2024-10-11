import Hero from "../components/Hero";
import HomeCard from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
