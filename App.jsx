import { useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const sspRef = useRef();

  useEffect(() => {
    window.shelf.FJFSDK.initialize(sspRef.current, {
      sspURL: "https://4a1bf72a-8e5b-4cf7-a54e-27a0642636f0.gs-ssp-eu.net/",
    });

    return () => {
      window.shelf.FJFSDK.close();
    };
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div ref={sspRef} id="ssp"></div>
    </div>
  );
}
