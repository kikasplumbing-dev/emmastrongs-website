import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-gradient-hero text-white flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4">Page not found</p>
        <h1 className="text-8xl font-display font-bold text-gradient-gold">404</h1>
        <p className="mt-4 text-white/75">The page you're looking for doesn't exist or has moved.</p>
        <a href="/" className="mt-8 inline-flex items-center bg-gradient-gold text-navy font-semibold px-6 py-3 rounded-full">
          Return Home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-display font-bold text-navy">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again or return home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-gradient-gold text-navy font-semibold px-5 py-2.5 rounded-full"
          >
            Try again
          </button>
          <a href="/" className="border border-border px-5 py-2.5 rounded-full font-semibold">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Emmastrons — Interior & Exterior Decorations" },
      { name: "description", content: "Premium interior and exterior decoration in Nigeria. Designing elegant homes, offices, and commercial spaces." },
      { name: "author", content: "Emmastrons" },
      { property: "og:site_name", content: "Emmastrons" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Emmastrons — Interior & Exterior Decorations" },
      { name: "twitter:title", content: "Emmastrons — Interior & Exterior Decorations" },
      { property: "og:description", content: "Premium interior and exterior decoration in Nigeria. Designing elegant homes, offices, and commercial spaces." },
      { name: "twitter:description", content: "Premium interior and exterior decoration in Nigeria. Designing elegant homes, offices, and commercial spaces." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0b0cb672-1079-49a3-9d6b-109a58ba83b1/id-preview-ed436c5b--bd1edf0a-ecfb-443a-97d4-768ac25c62ed.lovable.app-1781050689443.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0b0cb672-1079-49a3-9d6b-109a58ba83b1/id-preview-ed436c5b--bd1edf0a-ecfb-443a-97d4-768ac25c62ed.lovable.app-1781050689443.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="min-h-screen pb-16 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
    </QueryClientProvider>
  );
}
