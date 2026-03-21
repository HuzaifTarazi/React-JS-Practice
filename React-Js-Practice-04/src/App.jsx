import "./App.css";
import Cards from "./components/Cards.jsx";
import jobListings from "./components/ObjectData.jsx";
const App = () => {
  return (
    <>
      <div className="Parent">
        {jobListings.map((element) => {
          return <Cards companyLogo={element.logo} companyName={element.companyName} daysPosted={element.daysPosted} jobTitle={element.jobTitle} jobTypes={element.jobTypes} salaryPerHour={element.salaryPerHour}/>;
        })}
      </div>
    </>
  );
};

export default App;
