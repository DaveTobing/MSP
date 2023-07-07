import { faChalkboardTeacher, faExclamationTriangle, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const programsData = [
  {
    icon: (
    <FontAwesomeIcon icon={faMugHot}/>
    ),
    heading: "Café",
    details:
      "Grab a refreshing drink or a quick snack at our café. Relax and recharge before or after your skate session..",
  },
  {
    icon: (
      <FontAwesomeIcon icon={faChalkboardTeacher}/>
      ),
    heading: "Skate School",
    details:
      "Join our skate school to improve your skills. Our experienced instructors are here to help skaters of all levels",
  },
  {
    icon: (
        <FontAwesomeIcon icon={faExclamationTriangle}/>
      
    ),
    heading: "Obstacles",
    details:
      "Get ready to tackle our exciting range of obstacles, including ramps, rails, and others. Push your limits and master new tricks.",
  },
];



