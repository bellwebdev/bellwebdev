import { icon } from "@fortawesome/fontawesome-svg-core";

// Renders a FontAwesome icon definition to an SVG string at build time,
// replacing the React <FontAwesomeIcon> runtime component.
export function iconHtml(iconDefinition, className = "") {
  return icon(iconDefinition, {
    classes: className ? [className] : [],
  }).html.join("");
}
