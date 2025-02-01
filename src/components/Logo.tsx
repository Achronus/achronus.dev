const Logo = () => {
  return (
    <a
      href="/"
      className="tw-flex tw-h-9 tw-items-center tw-gap-2 tw-rounded-xl tw-px-2 hover:tw-bg-muted tw-transition-colors tw-justify-center"
    >
      <section
        id="logo-icon"
        className="tw-flex tw-items-center tw-gap-1.5 tw-leading-none"
      >
        <div className="tw-border-box tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-rounded-xl tw-border-2 sm:tw-h-6 sm:tw-w-6 sm:tw-rounded-lg tw-bg-blue-dark tw-border-blue-dark">
          <div className="tw-h-3.5 tw-w-0.5 tw-rotate-12 tw-rounded-full tw-bg-white sm:tw-h-3 sm:tw-w-0.5"></div>
        </div>
      </section>
      <section
        id="logo-text"
        className="tw--mt-1 tw-text-[26px] tw-font-medium tw-flex tw-gap-1 sm:tw-gap-0.5 tw-font-dm-sans"
      >
        <span className="tw-text-black-theme">achronus</span>
        <span className="tw-text-blue-dark">dev</span>
      </section>
    </a>
  );
};

export default Logo;
