import { STATUS } from "./Status";

import iconActive from "../assets/icon-active.svg";
import iconClosed from "../assets/icon-closed.svg";
import iconUnknown from "../assets/icon-unknown.svg";
// import iconShadow from "../assets/icon-shadow.png";

export const ICONS = (() => {
  const icons = {};
  icons[STATUS.ACTIVE] = L.icon({
      iconUrl: iconActive,
      // shadowUrl: iconShadow,
      iconSize: [38, 95],
      // shadowSize: [50, 64],
      iconAnchor: [22, 94],
      // shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
  });
  icons[STATUS.CLOSED] = L.icon({
      iconUrl: iconClosed,
      // shadowUrl: iconShadow,
      iconSize: [38, 95],
      // shadowSize: [50, 64],
      iconAnchor: [22, 94],
      // shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
  });
  icons[STATUS.UNKNOWN] = L.icon({
      iconUrl: iconUnknown,
      // shadowUrl: iconShadow,
      iconSize: [38, 95],
      // shadowSize: [50, 64],
      iconAnchor: [22, 94],
      // shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
  });
  return icons;
}());
