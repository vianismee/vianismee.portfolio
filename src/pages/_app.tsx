

import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { ThemeProvider } from "`/components/ui/theme-provider";
import Header from "`/feature/components/layout/Header";
import { api } from "`/utils/api";

import "`/styles/globals.css";
import { Toaster } from "`/components/ui/toaster";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className={GeistSans.className}>
              <div className="relative no-scrollbar">
                <Header />
                <Component {...pageProps} />
                <Toaster />
              </div>
              
    </div>
          </ThemeProvider>
    
  );
};

export default api.withTRPC(MyApp);
