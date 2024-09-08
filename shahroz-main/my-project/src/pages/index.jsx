import Profile from "../assets/Profile.jpeg";
import { TypeAnimation } from "react-type-animation";

const index = () => {
  return (
    <>
      <div className="flex flex-wrap gap-20 sm:flex items-center justify-around   py-[12em] flex-wrap">
        <div className="barlow">
          <h1 className="text-7xl sm:text-8xl text-[#C96868] underline dela-gothic">
            Shahroz Baig
          </h1>
          <p className="text-2xl sm:text-2xl w-80 le ading-1 px-1 py-3"> </p>
          <p className=" font-bolder text-lg">
            I specialize in crafting seamless, high-performance mobile
            applications using <p className="text-[#7EACB5] font-bold">Flutter</p> Helping businesses turn their ideas into
            reality across <p className="text-[#7EACB5] font-bold"> iOS and Android platforms.</p>
            <p>Let's create something amazing together!</p>
          </p>
        </div>
        <div>
          <img
            src={Profile}
            alt=""
            className="rounded-full w-[35vh] h-[35vh] object-fill"
          />
        </div>
      </div>
      <span className="sm:flex hidden items-center justify-center">
        <p
          className="text-5xl m-auto text-center rounded-full border border-black animate-upAndDown"
          style={{
            animation: "upAndDown 2s ease-in-out infinite",
            display: "inline-block",
            padding: "20px",
          }}
        >
          ↓
        </p>
      </span>
    </>
  );
};

export default index;
