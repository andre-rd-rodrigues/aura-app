import React from "react";

import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const headingFont = localFont({ src: "../assets/fonts/IvyMode-Regular.ttf" });

function Title({ heading, children }) {
  // Define a mapping of heading values to their corresponding HTML tags
  const headingTags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    default: "div" // Default to a div if the heading prop is not provided or invalid
  };

  // Determine the HTML tag based on the heading prop
  const TagName = headingTags[heading] || headingTags.default;

  return <TagName className={headingFont.className}>{children}</TagName>;
}

export default Title;
