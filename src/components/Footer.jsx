import { footerLinks } from "../constants";
import { Logo } from "../assets";

const Footer = () => {
  return (
    <footer
      className="flex flex-col w-full text-black-100 bg-primary mt-5 
      max-md:min-h-screen max-md:mt-[350px]">
      <div className="flex max-md:flex-col flex-wrap justify-between
       gap-5 sm:px-16 px-6 py-10 ml-[40px] max-md:ml-auto max-md:mr-auto">
        <div className="flex flex-col justify-start items-start gap-6 ">
          <img
            src={Logo}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-white">
            Your goal is our target. Not anything in between. We use <br />
            online marketing platforms and tools to achieve single <br />{" "}
            objective - your business results.
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link">
              <h3 className="font-bold text-white text-[21px]">{item.title}</h3>
              <div className="flex flex-col gap-5 font-normal text-[14px]">
                {item.links.map((link) => (
                  <a key={link.title} href={link.url} className="text-white">
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex justify-between items-center flex-wrap 
      w-[900px] max-md:w-[250px] max-lg:w-[600px] border-t border-white sm:px-16 px-6 py-2 mx-auto max-md:ml-[64px]"
      />
      <div className="flex justify-between items-center flex-wrap mb-3 sm:px-16 mx-auto text-center">
        <div className="footer__copyrights-link">
          <a href="/" className="text-white">
            Privacy & Policy
          </a>
          <span className="text-white">|</span>
          <a href="/" className="text-white">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
