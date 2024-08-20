import { Home } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="bg-grid-full flex h-screen items-center justify-center">
      <section className="text-center text-muted-foreground">
        <h1 className="py-12 text-center">
          <div className="mb-3 text-8xl font-extrabold">404</div>
          <div className="text-2xl"> Page Not Found </div>
        </h1>
        <Link
          href="/"
          className="flex gap-2 items-center justify-center rounded-xl bg-card py-2 px-4 text-xl text-primary hover:bg-secondary transition-colors"
        >
          Back to <Home size={24} />
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
