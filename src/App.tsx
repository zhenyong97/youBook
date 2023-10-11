import React, {useEffect} from "react";
import Nav from "./components/Nav"
import Layout from "./layout"


function App() {

  const [theme, setTheme] = React.useState<string>(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const ChangeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <Layout>
      <Nav theme={theme} onClickChangeTheme={ChangeTheme}/>
      <div className=" text-xl">
       
      </div>
    </Layout>
  )
}

export default App
