import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingDots from "@/components/floating-dots";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark">
      <html lang="en" className="dark">
        <body className="bg-background text-foreground font-sans antialiased">
          <FloatingDots />
          <Header />
          <main className="mx-auto max-w-3xl flex flex-col px-8 min-h-screen">
            <Outlet />
            <Footer />
          </main>
        </body>
      </html>
    </ThemeProvider>
  ),
});
