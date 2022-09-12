import ReactGA from "react-ga4";

function gaEvent(category, action) {
  console.log(category)
  console.log(action)
  ReactGA.event({
    category: category,
    action: action,
  });
}

export default gaEvent;