import { createSvgIcon } from "@material-ui/core/utils";
import React from "react";

export const DigitalSmallIcon = createSvgIcon(
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M4.52254 2.25C3.71765 2.25 2.98184 2.70475 2.62188 3.42467L2.02988 4.60869C1.81376 5.04092 1.98896 5.56651 2.42119 5.78262C2.85342 5.99874 3.37901 5.82354 3.59512 5.39131L4.18713 4.20729C4.25065 4.08025 4.3805 4 4.52254 4H15.4258C15.5758 4 15.7113 4.0894 15.7704 4.22728L16.798 6.625H4.96845C4.69645 6.24688 4.25218 6 3.75 6C2.92157 6 2.25 6.67157 2.25 7.5C2.25 8.32843 2.92157 9 3.75 9C4.25218 9 4.69645 8.75312 4.96845 8.375H6.625V12.1061C6.625 13.4854 8.32977 14.1336 9.24611 13.1027L10.654 11.5188C10.975 11.1576 10.9425 10.6046 10.5813 10.2835C10.2201 9.96246 9.66707 9.995 9.34602 10.3562L8.375 11.4486V8.375H11.625V11.2815C11.2469 11.5536 11 11.9978 11 12.5C11 13.3284 11.6716 14 12.5 14C13.3284 14 14 13.3284 14 12.5C14 11.9978 13.7531 11.5536 13.375 11.2815V8.375H17.25V16.25C17.25 16.4571 17.0821 16.625 16.875 16.625H3.75C3.54289 16.625 3.375 16.4571 3.375 16.25V12.4685C3.75312 12.1964 4 11.7522 4 11.25C4 10.4216 3.32843 9.75 2.5 9.75C1.67157 9.75 1 10.4216 1 11.25C1 11.7522 1.24688 12.1964 1.625 12.4685V16.25C1.625 17.4236 2.57639 18.375 3.75 18.375H16.875C18.0486 18.375 19 17.4236 19 16.25V7.3204L17.3789 3.53792C17.0441 2.75659 16.2758 2.25 15.4258 2.25H4.52254Z"
    fill="currentColor"
  />,
  "DigitalSmallIcon"
);
(DigitalSmallIcon as React.ComponentType).defaultProps = {
  viewBox: "0 0 20 20",
};
