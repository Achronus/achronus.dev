import { cn } from "@/lib/utils";

const LogoWithIcon = () => {
  return (
    <>
      <section
        id="logo-icon"
        className="flex items-center gap-1.5 leading-none"
      >
        <div
          className={cn(
            "border-box flex h-8 w-8 items-center justify-center rounded-xl border-2",
            "sm:h-6 sm:w-6 sm:rounded-lg",
            "bg-blue-500 border-blue-500"
          )}
        >
          <div
            className={cn(
              "h-3.5 w-0.5 rotate-12 rounded-full bg-white",
              "sm:h-3 sm:w-0.5"
            )}
          />
        </div>
      </section>
      <section
        id="logo-text"
        className="-mt-1 text-xl font-medium flex gap-1 sm:gap-0.5"
      >
        <span className="text-slate-200">achronus</span>
        <span className="text-blue-500">dev</span>
      </section>
    </>
  );
};

export default LogoWithIcon;
