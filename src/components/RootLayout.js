import * as React from "react";
import { Provider } from "@lyket/react";

export default function RootLayout({ children }) {
  return (
    <>
      <Provider
        apiKey={process.env.GATSBY_LYKET_API_KEY}
        theme={{
          colors: {
            icon: "#fff",
            background: "transparent",
            text: "#fff",
            primary: "transparent",
            secondary: "transparent",
            highlight: "transparent",
          },
        }}
      >
        {children}
      </Provider>
    </>
  );
}
