import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/magicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 px-6 mb-10 sm:mb-10" id="contact">
      <div className="flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        <p className="text-white-200 mt-2 mb-5 max-w-xl">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <a href="mailto:malsayan6@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            className="text-white-200 mt-2 mb-5 max-w-xl"
          />
        </a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-30 gap-6 text-white-200 border-t border-white/10 pt-6">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Sayan Mallick. All rights reserved.
        </p>

        <div className="flex gap-4">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-black-200 hover:bg-white/10 transition"
            >
              <img src={info.img} alt={info.alt || "icon"} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
