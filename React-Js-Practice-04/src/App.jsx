import "./App.css";
import Cards from "./components/Cards.jsx";
import jobListings from "./components/ObjectData.jsx";

const App = () => {
  return (
    <>
      {jobListings.map((element, index) => {
        return (
          <div className="Parent" key={index}>
            <Cards
              companyLogo={element.logo}
              companyName={element.companyName}
              daysPosted={element.daysPosted}
              jobTitle={element.jobTitle}
              jobTypes={element.jobTypes}
              salaryPerHour={element.salaryPerHour}
            />
          </div>
        );
      })}
    </>
  );
};

export default App;
