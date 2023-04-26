import snapchat from "../images/snapchat.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import Image from "next/image";
import { getSocialLinks } from "../utils/data";

const SocialLinks = () => {
  const socialLinks = getSocialLinks();
  if (socialLinks) {
    return (
      <div className="barge flex justify-between items-center mt-12 mb-10">
        {socialLinks.map((link) => {
          switch (link.title) {
            case "Snapchat":
              return (
                <a href={link.url}>
                  <Image
                    src={snapchat}
                    alt={"SocialLink"}
                    height="70"
                    width="70"
                  />
                </a>
              );
            case "Facebook":
              return (
                <a href={link.url}>
                  <Image
                    src={facebook}
                    alt={"SocialLink"}
                    height="70"
                    width="70"
                  />
                </a>
              );
            case "Instagram":
              return (
                <a href={link.url}>
                  <Image
                    src={instagram}
                    alt={"SocialLink"}
                    height="70"
                    width="70"
                  />
                </a>
              );
            case "Twitter":
              return (
                <a href={link.url}>
                  <Image
                    src={twitter}
                    alt={"SocialLink"}
                    height="70"
                    width="70"
                  />
                </a>
              );
            default:
              return <p>Unable to load link</p>;
          }
        })}
      </div>
    );
  }
};

export default SocialLinks;
