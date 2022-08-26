import React from "react";
import PropTypes from "prop-types";

function Icon({ desc, icon, size, title }) {
  switch (icon) {
    case "afterpay":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width={size}
          height={size}
          viewBox="0 0 1869.6 838.5"
          aria-hidden="true"
        >
          {title && <title>{title}</title>}
          {desc && <desc>{desc}</desc>}
          <g>
            <path d="M1450.3,694.5H419.2c-152,0-275.2-123.2-275.2-275.2v0c0-152,123.2-275.2,275.2-275.2h1031.1   c152,0,275.2,123.2,275.2,275.2v0C1725.6,571.2,1602.3,694.5,1450.3,694.5z" />
          </g>
          <g>
            <g>
              <g>
                <path
                  fill="white"
                  d="M1492,353.5l-34.6-19.8l-35.1-20.1c-23.2-13.3-52.2,3.4-52.2,30.2v4.5c0,2.5,1.3,4.8,3.5,6l16.3,9.3     c4.5,2.6,10.1-0.7,10.1-5.9V347c0-5.3,5.7-8.6,10.3-6l32,18.4l31.9,18.3c4.6,2.6,4.6,9.3,0,11.9l-31.9,18.3l-32,18.4     c-4.6,2.6-10.3-0.7-10.3-6l0-5.3c0-26.8-29-43.6-52.2-30.2l-35.1,20.1l-34.6,19.8c-23.3,13.4-23.3,47.1,0,60.5l34.6,19.8     l35.1,20.1c23.2,13.3,52.2-3.4,52.2-30.2v-4.5c0-2.5-1.3-4.8-3.5-6l-16.3-9.3c-4.5-2.6-10.1,0.7-10.1,5.9v10.7     c0,5.3-5.7,8.6-10.3,6l-32-18.4l-31.9-18.3c-4.6-2.6-4.6-9.3,0-11.9l31.9-18.3l32-18.4c4.6-2.6,10.3,0.7,10.3,6v5.3     c0,26.8,29,43.6,52.2,30.2l35.1-20.1l34.6-19.8C1515.3,400.5,1515.3,366.9,1492,353.5z"
                />
              </g>
              <g>
                <g>
                  <path
                    fill="white"
                    d="M1265,360.1L1184,527.4h-33.6l30.3-62.5L1133,360.1h34.5l30.6,70.2l33.4-70.2H1265z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <g>
                    <path
                      fill="white"
                      d="M455.1,419.5c0-20-14.5-34-32.3-34s-32.3,14.3-32.3,34c0,19.5,14.5,34,32.3,34S455.1,439.5,455.1,419.5        M455.4,478.9v-15.4c-8.8,10.7-21.9,17.3-37.5,17.3c-32.6,0-57.3-26.1-57.3-61.3c0-34.9,25.7-61.5,58-61.5       c15.2,0,28,6.7,36.8,17.1v-15h29.2v118.8H455.4z"
                    />
                  </g>
                  <g>
                    <path
                      fill="white"
                      d="M626.6,452.5c-10.2,0-13.1-3.8-13.1-13.8V386h18.8v-25.9h-18.8v-29h-29.9v29H545v-11.8       c0-10,3.8-13.8,14.3-13.8h6.6v-23h-14.4c-24.7,0-36.4,8.1-36.4,32.8v15.9h-16.6V386h16.6v92.9H545V386h38.6v58.2       c0,24.2,9.3,34.7,33.5,34.7h15.4v-26.4H626.6z"
                    />
                  </g>
                  <g>
                    <path
                      fill="white"
                      d="M734,408.8c-2.1-15.4-14.7-24.7-29.5-24.7c-14.7,0-26.9,9-29.9,24.7H734z M674.3,427.3       c2.1,17.6,14.7,27.6,30.7,27.6c12.6,0,22.3-5.9,28-15.4h30.7c-7.1,25.2-29.7,41.3-59.4,41.3c-35.9,0-61.1-25.2-61.1-61.1       c0-35.9,26.6-61.8,61.8-61.8c35.4,0,61.1,26.1,61.1,61.8c0,2.6-0.2,5.2-0.7,7.6H674.3z"
                    />
                  </g>
                  <g>
                    <path
                      fill="white"
                      d="M956.5,419.5c0-19.2-14.5-34-32.3-34c-17.8,0-32.3,14.3-32.3,34c0,19.5,14.5,34,32.3,34       C942,453.5,956.5,438.8,956.5,419.5 M862.4,527.4V360.1h29.2v15.4c8.8-10.9,21.9-17.6,37.5-17.6c32.1,0,57.3,26.4,57.3,61.3       c0,34.9-25.7,61.5-58,61.5c-15,0-27.3-5.9-35.9-15.9v62.5H862.4z"
                    />
                  </g>
                  <g>
                    <path
                      fill="white"
                      d="M1091.7,419.5c0-20-14.5-34-32.3-34c-17.8,0-32.3,14.3-32.3,34c0,19.5,14.5,34,32.3,34       C1077.2,453.5,1091.7,439.5,1091.7,419.5 M1092,478.9v-15.4c-8.8,10.7-21.9,17.3-37.5,17.3c-32.6,0-57.3-26.1-57.3-61.3       c0-34.9,25.7-61.5,58-61.5c15.2,0,28,6.7,36.8,17.1v-15h29.2v118.8H1092z"
                    />
                  </g>
                  <g>
                    <path
                      fill="white"
                      d="M809.7,371.7c0,0,7.4-13.8,25.7-13.8c7.8,0,12.8,2.7,12.8,2.7v30.3c0,0-11-6.8-21.1-5.4       c-10.1,1.4-16.5,10.6-16.5,23v70.3h-30.2V360.1h29.2V371.7z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      );
    case "arrowLeft":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-testid={icon}
          aria-hidden="true"
        >
          {title && <title>{title}</title>}
          {desc && <desc>{desc}</desc>}
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      );
    case "arrowRight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-testid={icon}
          aria-hidden="true"
        >
          {title && <title>{title}</title>}
          {desc && <desc>{desc}</desc>}
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
    case "cart":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-testid={icon}
          aria-hidden="true"
        >
          {title && <title>{title}</title>}
          {desc && <desc>{desc}</desc>}
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-testid={icon}
          aria-hidden="true"
        >
          {title && <title>{title}</title>}
          {desc && <desc>{desc}</desc>}
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "github":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-testid={icon}
          aria-hidden="true"
        >
          {title && <title>{title}</title>}
          {desc && <desc>{desc}</desc>}
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case "hamburger":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-testid={icon}
          aria-hidden="true"
        >
          {title && <title>{title}</title>}
          {desc && <desc>{desc}</desc>}
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      );
    case "heartFilled":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          data-testid={icon}
          aria-hidden="true"
        >
          {title && <title>{title}</title>}
          {desc && <desc>{desc}</desc>}
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m10 17-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26Z"
          />
        </svg>
      );
    case "heartOutline":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          data-testid={icon}
          fill="currentColor"
          aria-hidden="true"
        >
          {title && <title>{title}</title>}
          {desc && <desc>{desc}</desc>}
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m10 17-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26Zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979Zm0-5.5Z"
          />
        </svg>
      );
    case "mapPin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-testid={icon}
          aria-hidden="true"
        >
          {title && <title>{title}</title>}
          {desc && <desc>{desc}</desc>}
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "passwordHidden":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
      
      aria-hidden="true"    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      );
    case "passwordVisible":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-testid={icon}
          aria-hidden="true"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-testid={icon}
          aria-hidden="true"
        >
          {title && <title>{title}</title>}
          {desc && <desc>{desc}</desc>}
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "search":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-testid={icon}
          aria-hidden="true"
        >
          {title && <title>{title}</title>}
          {desc && <desc>{desc}</desc>}
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "twitter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-testid={icon}
          aria-hidden="true"
        >
          {title && <title>{title}</title>}
          {desc && <desc>{desc}</desc>}
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      );
    case "user":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-testid={icon}
          aria-hidden="true"
        >
          {title && <title>{title}</title>}
          {desc && <desc>{desc}</desc>}
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "x":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokejoin="round"
          data-testid={icon}
          aria-hidden="true"
        >
          {title && <title>{title}</title>}
          {desc && <desc>{desc}</desc>}
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    default:
      break;
  }
}

Icon.propTypes = {
  desc: PropTypes.string,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Icon.defaultProps = {
  size: 24,
};

export default Icon;
