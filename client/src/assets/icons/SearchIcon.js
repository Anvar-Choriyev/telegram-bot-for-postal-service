import React from "react";

function SearchIcon(classname) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classname || ""}
    >
      <g clipPath="url(#clip0_13_81)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.9579 7.40975C17.2465 9.80624 17.159 13.6042 14.7625 15.8928C12.366 18.1813 8.56804 18.0939 6.27947 15.6974C3.99091 13.3009 4.07839 9.50292 6.47488 7.21435C8.87136 4.92578 12.6693 5.01327 14.9579 7.40975ZM16.8242 16.6038C19.3384 13.5224 19.2218 8.97887 16.4043 6.02848C13.3529 2.83317 8.28892 2.71652 5.09361 5.76794C1.89829 8.81936 1.78165 13.8833 4.83307 17.0787C7.6506 20.029 12.184 20.3546 15.3778 17.9851L17.4925 20.1994C17.8739 20.5988 18.5069 20.6134 18.9063 20.232C19.3057 19.8506 19.3203 19.2176 18.9389 18.8182L16.8242 16.6038Z"
          fill="#CCCCCC"
          className={classname}
        />
      </g>
      <defs>
        <clipPath id="clip0_13_81">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SearchIcon;
