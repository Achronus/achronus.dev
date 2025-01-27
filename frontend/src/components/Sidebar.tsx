import PortraitImg from "@/assets/imgs/me.jpg";

import Logo from "@/components/Logo";
import type { SocialIcon } from "@/types/collections";

type SidebarProps = {
  children: React.ReactNode;
  socials: SocialIcon[];
};

const SocialIcons = ({ socials }: { socials: SocialIcon[] }) => {
  return (
    <div className="social-icons tw-flex tw-gap-4 tw-mb-6 tw-justify-center">
      {socials.map((social) => (
        <a
          key={social.name}
          className={`btn btn-primary ${social.name}-btn tw-rounded-full tw-w-12 tw-h-12 tw-border-0 tw-transition-all hover:tw-bg-black-theme hover:!tw-text-white tw-bg-white`}
          href={social.url}
          role="button"
          style={{
            color: social.colour,
          }}
        >
          <i
            className={`fa-${social.type} fa-${social.name} tw-text-[28px] tw-w-full tw-h-full`}
          ></i>
        </a>
      ))}
    </div>
  );
};

const Sidebar = ({ socials, children }: SidebarProps) => {
  return (
    <aside className="sidebar tw-w-full tw-px-2 lg:tw-w-1/4">
      <div className="tw-sticky tw-top-4 tw-w-full tw-p-4 tw-items-center">
        <Logo />
        <div className="portrait tw-flex tw-my-6 tw-justify-center">
          <img
            src={PortraitImg.src}
            alt="Me!"
            className="tw-rounded-full tw-w-40 tw-h-40"
          />
        </div>
        <SocialIcons socials={socials} />
        {children}
      </div>
    </aside>
  );
};

export default Sidebar;
