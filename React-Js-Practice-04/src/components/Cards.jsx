import "../components/Cards.css";
import { Bookmark } from "lucide-react";
const Cards = ({companyLogo ,companyName, daysPosted, jobTitle, jobTypes, salaryPerHour}) => {
  return (
    <>
      <div className="card">
        <div className="top">
          <img
            src={companyLogo}
            alt="alt"
          />
          <button>
            Save <Bookmark size={14} />
          </button>
        </div>
        <div className="center">
          <h5>
            {companyName} <span>{daysPosted} days Ago</span>
          </h5>
          <h1>{jobTitle}</h1>
          <div className="jobPosting">
            <p>{jobTypes[0]}</p>
            <p>{jobTypes[1]}</p>
          </div>
        </div>
        <div className="bottom">
          <hr />
          <div className="salary">
            <p>${salaryPerHour}<span>/</span>hr</p>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
