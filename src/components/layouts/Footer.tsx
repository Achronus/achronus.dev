import { SocialIcons } from "@/constants/menu";
import { FooterAboutDetailsType } from "@/types/details";

import IconArray from "@/components/IconArray";
import { ShimmerBadge } from "@/components/ShimmerBadge";

type FooterProps = {
  details: FooterAboutDetailsType;
};

const FooterDescription = ({
  title,
  name,
  position,
  desc,
}: FooterAboutDetailsType) => {
  return (
    <section className="max-w-80 mb-12">
      <h6 className="mb-3 text-sm text-slate-400">{title}</h6>
      <p className="mb-4 text-sm font-normal leading-relaxed">
        {"I'm"} {name}, a <strong>{position}</strong> {desc}
      </p>
      <div className="flex gap-1">
        <IconArray icons={SocialIcons} />
      </div>
    </section>
  );
};

const Footer = ({ details }: FooterProps) => {
  return (
    <footer className="relative pt-20 pb-10 lg:pt-30">
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-grid-bottom z-[-1]" />
      <div className="wrapper flex flex-col">
        <FooterDescription {...details} />
        <div className="border-muted flex justify-between border-t pt-6 text-xs items-center">
          <section className="font-semibold">
            &copy; {new Date().getFullYear()}, Ryan Partridge
          </section>
          <ShimmerBadge delay={0} className="sm:hidden">
            Open For Work
          </ShimmerBadge>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
