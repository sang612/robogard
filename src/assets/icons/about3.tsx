export const About3Icon = ({
  firstColor = "",
  secondColor = "",
  className = "",
}) => {
  return (
    <svg
      width="35"
      height="40"
      viewBox="0 0 35 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.868 16.625C29.868 16.1986 29.3312 15.8525 28.7094 15.8525C28.0876 15.8525 27.5508 16.1986 27.5508 16.625V37.4801C27.5508 37.9065 28.0876 38.2525 28.7094 38.2525C29.3312 38.2525 29.868 37.9065 29.868 37.4801V16.625Z"
        fill="#E5E7FD"
      />
      <mask
        id="mask0_88_11127"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="14"
        y="23"
        width="3"
        height="17"
      >
        <path
          d="M14.4199 39.7972H16.7372V23.0391H14.4199V39.7972Z"
          fill="#E5E7FD"
        />
      </mask>
      <g mask="url(#mask0_88_11127)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7372 23.6168C16.7372 23.2978 16.2003 23.0391 15.5785 23.0391C14.9567 23.0391 14.4199 23.2978 14.4199 23.6168V39.2196C14.4199 39.5386 14.9567 39.7974 15.5785 39.7974C16.2003 39.7974 16.7372 39.5386 16.7372 39.2196V23.6168Z"
          fill="#E5E7FD"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.37779 30.2335C4.37779 30.0605 3.84096 29.9199 3.21917 29.9199C2.59737 29.9199 2.06055 30.0605 2.06055 30.2335V38.71C2.06055 38.883 2.59737 39.0236 3.21917 39.0236C3.84096 39.0236 4.37779 38.883 4.37779 38.71V30.2335Z"
        fill="#E5E7FD"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3911 23.0391H18.8106C19.7661 23.0391 20.5416 23.8138 20.5416 24.77V36.7911C20.5416 37.7474 19.7661 38.5221 18.8106 38.5221H15.3911C14.4349 38.5221 13.6602 37.7474 13.6602 36.7911V24.77C13.6602 23.8138 14.4349 23.0391 15.3911 23.0391Z"
        stroke={firstColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.9966 29.9199H6.41608C7.37156 29.9199 8.14706 30.6947 8.14706 31.6509V36.7905C8.14706 37.7468 7.37156 38.5215 6.41608 38.5215H2.9966C2.04036 38.5215 1.26562 37.7468 1.26562 36.7905V31.6509C1.26562 30.6947 2.04036 29.9199 2.9966 29.9199Z"
        stroke={firstColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.5572 16.1582H31.9766C32.9321 16.1582 33.7076 16.9329 33.7076 17.8892V36.7917C33.7076 37.7479 32.9321 38.5234 31.9766 38.5234H28.5572C27.6009 38.5234 26.8262 37.7479 26.8262 36.7917V17.8892C26.8262 16.9329 27.6009 16.1582 28.5572 16.1582Z"
        stroke={firstColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.31836 21.2444L6.75383 13.9891C7.78037 12.6188 9.72299 12.3407 11.0925 13.3665L13.9203 15.4852C15.2898 16.511 17.2324 16.2329 18.2589 14.8627L28.0709 1.76562"
        stroke={secondColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5566 2.98681L28.0717 1.76562L29.2921 10.2807"
        stroke={secondColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
