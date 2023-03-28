export const About1Icon = ({
  firstColor = "",
  secondColor = "",
  className = "",
  ...props
}) => {
  return (
    <svg
      width="36"
      height="39"
      viewBox="0 0 36 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.58622 34.0497V17.287C5.58622 15.4609 6.1235 13.7095 7.41474 12.4182L15.9633 3.77557C16.3163 3.42252 16.6734 3.15875 17.0954 2.94287C15.4601 2.06797 13.3637 2.30009 11.984 3.6798L4.08234 11.7138C2.88199 12.9141 2.33984 14.5422 2.33984 16.24V31.8226C2.33984 34.6267 4.18947 37.003 6.69973 37.869C5.96929 36.7758 5.58622 35.4626 5.58622 34.0497Z"
        fill="#E5E7FD"
      />
      <path
        d="M18.0954 37.5483H7.64128C4.10597 37.5483 1.24023 34.6825 1.24023 31.1472V15.5646C1.24023 13.8676 1.91467 12.2387 3.11502 11.0383L11.149 3.00437C12.8371 1.31625 15.5746 1.31625 17.2627 3.00437L25.2967 11.0383C26.497 12.2387 27.1715 13.8676 27.1715 15.5646V16.8031"
        stroke={firstColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.2063 10.3203C15.6388 10.3203 16.7994 11.4817 16.7994 12.9134C16.7994 14.3458 15.6388 15.5064 14.2063 15.5064C12.7739 15.5064 11.6133 14.3458 11.6133 12.9134C11.6133 11.4817 12.7739 10.3203 14.2063 10.3203Z"
        stroke={firstColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.7073 23.2754C31.8146 21.3163 28.6575 21.6368 27.1715 23.9539C25.6839 21.6344 22.5259 21.3187 20.6349 23.2754C18.9785 24.9912 18.9785 27.7709 20.6349 29.4858L27.1699 36.2512L33.7073 29.4858C35.3654 27.7709 35.3654 24.9912 33.7073 23.2754Z"
        stroke={secondColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
