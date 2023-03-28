export const About2Icon = ({
  firstColor = "",
  secondColor = "",
  className = "",
  ...props
}) => {
  return (
    <svg
      className={className}
      {...props}
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.8949 33.4975C12.0121 33.1981 5.48896 26.675 5.1896 18.7922C5.04509 14.9906 6.2956 11.489 8.45818 8.74023C4.74868 11.6571 2.41431 16.244 2.60896 21.3729C2.90831 29.2556 9.43145 35.7788 17.3142 36.0781C22.4431 36.2728 27.03 33.9384 29.9468 30.2282C27.1981 32.3915 23.6965 33.642 19.8949 33.4975Z"
        fill="#E5E7FD"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9079 6.81607C5.67455 8.91819 1.23805 14.9237 1.50349 21.9254C1.80285 29.8089 8.32598 36.332 16.2087 36.6306C23.2111 36.8968 29.2159 32.4596 31.3188 26.2269C32.1299 23.8218 30.3205 21.3296 27.7826 21.3296H22.302C19.2664 21.3296 16.8052 18.8684 16.8052 15.8328V10.3523C16.8052 7.81441 14.3123 6.00501 11.9079 6.81607Z"
        stroke={firstColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.5176 1.30469V11.6464C21.5176 14.3915 23.7436 16.6175 26.4894 16.6175H36.8304C36.8304 8.16036 29.9747 1.30469 21.5176 1.30469Z"
        stroke={secondColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
