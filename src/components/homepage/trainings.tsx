import { useState } from "react";
import Dropdown from "./dropdown-list";
import trainings from "../../data/trainings";
import TrainingCard from "./training-card";
import "../../css/trainings.css";

function Trainings() {
  const [allTrainings, setTrainings] = useState(trainings);
  const [filterType, setFilter] = useState("");

  const dropdownOptions = ["All", "2022", "2023", "2024"];

  const filteredTrainings = filterType
    ? filterType === "All"
      ? allTrainings
      : allTrainings.filter((tr) => tr.year === filterType)
    : allTrainings;

  const handleSelect = (it: string) => {
    setFilter(it);
  };

  return (
    <section className="block trainings-block">
      <div className="trainings-block container">
        <div className="trainings__header">
          <h1 className="link__heading" data-aos="flip-up">
            Our Trainings
          </h1>
        </div>
        <div className="trainings__filter">
          <Dropdown
            title="Filter by:"
            items={dropdownOptions}
            onSelect={handleSelect}
          />
        </div>
        <div className="trainings__list grid grid--2x grid--3x">
          {/* remove the grid effect if one or two */}
          {filteredTrainings.length > 0 ? (
            filteredTrainings.map((tr) => (
              <TrainingCard
                imageSrc={tr.imageSrc}
                title={tr.title}
                maxTrainees={tr.maxTrainees}
                description={tr.description}
                collaboratingCompanies={tr.collaboratingCompanies}
                duration={tr.duration}
              />
            ))
          ) : (
            <h3 className="trainings__warning">
              There are currently no trainings available
            </h3>
          )}
        </div>
      </div>
    </section>
  );
}

export default Trainings;
