import { getLinksLinks } from "../utils/data";

const NonsocialLinks = () => {
  const nonSocialLinks = getLinksLinks();

  if (nonSocialLinks) {
    return (
      <div className="grid justify-center">
        {nonSocialLinks.map((link) => {
          return (
            <a href={link.url} key={link.id}>
              <button className="button max-w-md mt-6 mb-4">
                {link.title}
              </button>
            </a>
          );
        })}
      </div>
    );
  }
};

export default NonsocialLinks;
