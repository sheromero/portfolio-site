import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="dark">
      <html lang="en" className="dark ">
        <body className="bg-background text-foreground mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased">
          <Header></Header>
          <Outlet />
        </body>
      </html>
    </ThemeProvider>
  ),
});
