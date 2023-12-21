import config from "@config/config.json";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoPinterest,
  IoLogoTwitter,
} from "react-icons/io5";
import {FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton} from "next-share";

const Share = ({ title, tags, slug, className }) => {
  // destructuring items from config object
  const { base_url } = config.site;

  return (
    <ul className={`${className}`}>
      <li className="inline-block">
        <FacebookShareButton
          url={`${base_url}/${slug}`}
          quote={title}
          hashtag={tags}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </li>
      <li className="inline-block">
        <TwitterShareButton
          url={`${base_url}/${slug}`}
          title={title}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </li>
    </ul>
  );
};

export default Share;
