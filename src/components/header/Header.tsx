import styles from "./header.module.css";
import { Link } from "wouter";
import Darkmode from "darco-dark-mode";
import darkmodeVariables from "../../utils/darkmodeVariables.ts";
import { useEffect, useState } from "react";
import AnimationHeader from "./AnimationHeader";

const Header = () => {
  const root = document.getElementsByTagName("html")[0];
  const [color, setColor] = useState("");

  // change the header background color on first render
  useEffect(() => {
    const rootColor =
      getComputedStyle(root).getPropertyValue("--background-color") + "4a";
    setColor(rootColor);

    // set class dark or light in the first render
    if (rootColor === "#0000004a") {
      root.classList.replace("light", "dark") ? "" : root.classList.add("dark");
    } else
      root.classList.replace("dark", "light")
        ? ""
        : root.classList.add("light");
  }, [color]);

  const handlerThemeChange = () => {
    // change the header background color with the dark mode switch
    const rootColor = getComputedStyle(root).getPropertyValue("--color") + "33";
    setColor(rootColor);

    // set the class dark or light with the switch
    if (root.classList.contains("light"))
      root.classList.replace("light", "dark");
    else root.classList.replace("dark", "light");
  };

  return (
    <header
      style={{ backgroundColor: color }}
      className={`${styles.headerContainer} w-full h-[var(--header-height)] flex items-center justify-between px-8 border-b border-b-[var(--color)] sticky top-0 left-0 z-[100] backdrop-blur-sm`}
    >
      <div className="flex align-center w-full h-full mx-3 [&>*]:flex [&>*]:items-center [&>*]:justify-between [&>*]:px-3">
        <AnimationHeader>
          <Link to="/">
            <svg
              version="1.1"
              id="Layer_1"
              className={styles.logo}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width={"100%"}
              height={"100%"}
              viewBox="0 0 122.88 103.05"
              xmlSpace="preserve"
            >
              <style>
                {`
      .st0 {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: var(--color);
      }
    `}
              </style>

              <g>
                <path
                  className="st0"
                  style={{ fill: "var(--color)" }}
                  d="M61.07,10.48c4.89-5.09,8.31-9.5,15.84-10.36c14.13-1.62,27.14,12.85,20,27.1 c-2.03,4.06-6.17,8.88-10.75,13.62c-5.02,5.2-10.58,10.29-14.47,14.15L61.07,65.53l-8.77-8.44C41.74,46.92,24.53,34.12,23.97,18.27 c-0.4-11.1,8.36-18.22,18.44-18.09C51.42,0.3,55.2,4.78,61.07,10.48L61.07,10.48L61.07,10.48L61.07,10.48z M4.08,61.55h5.65 c0.15,0,0.29,0.01,0.44,0.02v-4.05l0,0c0-0.06,0.01-0.12,0.01-0.18c0.05-1.05,0.49-2,1.19-2.7c0.73-0.74,1.75-1.19,2.88-1.19l0,0 l0,0l0,0h5.65l0,0c0.15,0,0.29,0.01,0.44,0.02v-4.05l0,0c0-1.12,0.46-2.14,1.2-2.88c0.73-0.73,1.75-1.19,2.87-1.19l0,0l0,0l0,0 h5.65c1.12,0,2.14,0.46,2.88,1.2c0.74,0.74,1.2,1.75,1.2,2.88v49.55c0,1.12-0.46,2.14-1.2,2.88c-0.74,0.74-1.75,1.2-2.88,1.2h-5.65 l0,0c-0.06,0-0.12-0.01-0.18-0.01c-1.05-0.05-2-0.49-2.7-1.19c-0.73-0.74-1.19-1.75-1.19-2.87l0,0l0,0l0,0v-3.43 c-0.14,0.02-0.29,0.03-0.44,0.03l0,0l0,0h-5.65l0,0c-0.06,0-0.12-0.01-0.18-0.01c-1.04-0.05-1.99-0.49-2.69-1.19 c-0.74-0.74-1.2-1.75-1.19-2.87l0,0l0,0l0,0v-4.68c-0.14,0.02-0.29,0.03-0.44,0.02H4.09c-1.12,0-2.14-0.46-2.88-1.2 c-0.73-0.73-1.2-1.75-1.2-2.88L0,65.63c0-1.12,0.46-2.15,1.19-2.88C1.93,62.01,2.95,61.56,4.08,61.55L4.08,61.55L4.08,61.55z M98.49,48.98h-5.65l0,0h-0.05c-0.1,0.02-0.19,0.06-0.26,0.13c-0.08,0.08-0.13,0.19-0.13,0.31l0,0v49.55 c0,0.12,0.05,0.23,0.13,0.31c0.08,0.08,0.19,0.13,0.31,0.13h5.65l0,0h0.05c0.09-0.01,0.19-0.06,0.26-0.13 c0.08-0.08,0.14-0.19,0.14-0.3l0,0l0,0c0-16.52-0.01-33.03-0.01-49.55l0,0c0-0.12-0.05-0.23-0.13-0.31 C98.71,49.02,98.61,48.98,98.49,48.98L98.49,48.98L98.49,48.98L98.49,48.98L98.49,48.98z M81.32,70.21v8.78l-39.18-0.01V70.2 L81.32,70.21L81.32,70.21z M118.8,65.19h-5.65l0,0c-0.13,0-0.24,0.05-0.31,0.13c-0.07,0.07-0.11,0.15-0.13,0.25v0.06l0,0v0v17.13 l0,0v0.05c0.01,0.09,0.06,0.18,0.13,0.25c0.08,0.08,0.2,0.13,0.31,0.13h5.65l0,0c0.13,0,0.24-0.05,0.31-0.13 c0.08-0.08,0.13-0.19,0.13-0.31l0,0l0,0l-0.01-17.12l0,0c0-0.12-0.05-0.23-0.13-0.31S118.92,65.19,118.8,65.19L118.8,65.19 L118.8,65.19L118.8,65.19z M113.16,61.55h5.64l0,0c1.13,0,2.14,0.46,2.88,1.2s1.2,1.75,1.2,2.88l0,0v17.13l0,0l0,0l0,0 c0,1.11-0.46,2.14-1.2,2.86c-0.74,0.74-1.76,1.2-2.87,1.2l0,0h-5.65c-0.15,0-0.29-0.01-0.44-0.02v4.68c0,1.12-0.46,2.14-1.2,2.88 c-0.74,0.74-1.76,1.19-2.88,1.2h-5.65l0,0l0,0l0,0c-0.15,0-0.29-0.01-0.44-0.03v3.43l0,0l0,0l0,0c0,1.12-0.46,2.14-1.19,2.87 c-0.7,0.7-1.65,1.14-2.7,1.19c-0.06,0-0.12,0.01-0.18,0.01l0,0h-5.65c-1.12,0-2.14-0.46-2.88-1.2c-0.74-0.74-1.19-1.76-1.2-2.88 l-0.02-49.53l0,0c0-1.12,0.46-2.15,1.19-2.88c0.7-0.7,1.65-1.14,2.7-1.19c0.06-0.01,0.12-0.01,0.18-0.01l0,0h5.65l0,0l0,0l0,0 c1.12,0,2.13,0.46,2.87,1.19c0.74,0.74,1.19,1.76,1.2,2.88l0,0v4.05c0.14-0.02,0.29-0.03,0.44-0.02h5.65 c1.12,0,2.14,0.46,2.88,1.19c0.74,0.74,1.19,1.76,1.19,2.88v4.05C112.87,61.56,113.01,61.55,113.16,61.55L113.16,61.55 L113.16,61.55L113.16,61.55z M108.64,57.08H103c-0.12,0-0.22,0.05-0.31,0.13c-0.08,0.08-0.13,0.18-0.13,0.3v0.01v33.96l0,0 c0,0.12,0.05,0.23,0.13,0.31c0.08,0.08,0.19,0.14,0.3,0.14l0,0l0,0h5.65c0.12,0,0.22-0.05,0.31-0.13c0.08-0.08,0.13-0.19,0.13-0.31 c0-11.32,0-22.65,0.01-33.97c0-0.12-0.05-0.23-0.13-0.31C108.87,57.13,108.76,57.08,108.64,57.08L108.64,57.08L108.64,57.08z M23.95,98.95L23.95,98.95L23.95,98.95c0,0.12,0.06,0.23,0.14,0.3c0.07,0.07,0.16,0.12,0.26,0.13h0.05l0,0h5.65 c0.12,0,0.23-0.05,0.31-0.13c0.08-0.08,0.13-0.19,0.13-0.31l-0.01-49.53c0-0.12-0.05-0.23-0.13-0.31 c-0.08-0.08-0.19-0.13-0.31-0.13h-5.65l0,0l0,0c-0.12,0-0.23,0.06-0.3,0.14c-0.08,0.08-0.13,0.19-0.13,0.31l0,0 C23.95,65.93,23.95,82.44,23.95,98.95L23.95,98.95z M20.31,91.54v-0.05V57.52l0,0v-0.06c-0.02-0.1-0.06-0.18-0.13-0.25 c-0.08-0.08-0.19-0.13-0.31-0.13l0,0h-5.65l0,0l0,0c-0.12,0-0.23,0.06-0.31,0.14c-0.07,0.07-0.11,0.16-0.13,0.26v0.05l0,0 c0,11.32,0,22.64,0,33.96l0,0l0,0c0,0.13,0.05,0.23,0.13,0.31c0.07,0.07,0.16,0.12,0.26,0.13h0.05l0,0h5.65l0,0 c0.12,0,0.23-0.06,0.3-0.14C20.25,91.72,20.3,91.63,20.31,91.54L20.31,91.54L20.31,91.54z M9.72,65.19H4.07 c-0.12,0-0.23,0.05-0.31,0.13c-0.08,0.08-0.13,0.19-0.13,0.31v17.13c0,0.12,0.05,0.23,0.13,0.31c0.08,0.08,0.19,0.13,0.31,0.13 h5.65c0.12,0,0.23-0.05,0.31-0.13s0.13-0.19,0.13-0.31l-0.01-17.13v-0.01c0-0.12-0.05-0.22-0.13-0.3 C9.94,65.23,9.83,65.19,9.72,65.19L9.72,65.19L9.72,65.19z M47.94,31.33c-0.68-0.65-1.03-1.52-1.05-2.4 c-0.02-0.87,0.3-1.76,0.95-2.43c0.65-0.68,1.52-1.03,2.39-1.05c0.87-0.02,1.76,0.3,2.43,0.95l5.2,4.98L70.23,19.9l0.42,0.32 l-0.42-0.32c0.03-0.04,0.07-0.08,0.12-0.11c0.7-0.6,1.57-0.87,2.42-0.83l0,0l0.04,0.01c0.86,0.05,1.7,0.44,2.32,1.13 c0.63,0.7,0.92,1.59,0.87,2.46l0,0l-0.01,0.04c-0.05,0.84-0.43,1.67-1.09,2.28l-14.71,13.7l0,0c-0.02,0.03-0.05,0.06-0.08,0.09 c-0.66,0.58-1.49,0.86-2.31,0.85c-0.83-0.01-1.66-0.33-2.31-0.95L47.94,31.33L47.94,31.33L47.94,31.33z"
                />
              </g>
            </svg>
          </Link>
        </AnimationHeader>
        <AnimationHeader>
          <span>Jhon Doe</span>
        </AnimationHeader>
      </div>

      <nav className="flex items-center justify-around w-full h-full px-5 laptop:hidden">
        <AnimationHeader>
          <Link to="/">Home</Link>
        </AnimationHeader>
        <AnimationHeader>
          <Link to="/offers">Offers</Link>
        </AnimationHeader>
        <AnimationHeader>
          <Link to="/prices">Price</Link>
        </AnimationHeader>
        <AnimationHeader>
          <Link to="/about">About me</Link>
        </AnimationHeader>
        <AnimationHeader>
          <Link to="/clients">Clients</Link>
        </AnimationHeader>
        <AnimationHeader>
          <Link to="/contact">Contact</Link>
        </AnimationHeader>
        <AnimationHeader>
          <Link to="/car">Car</Link>
        </AnimationHeader>
      </nav>

      <div onClick={handlerThemeChange}>
        <AnimationHeader>
          <Darkmode
            switchMode="static"
            hover
            switchStyles={darkmodeVariables}
            icons
          />
        </AnimationHeader>
      </div>
    </header>
  );
};
export default Header;
