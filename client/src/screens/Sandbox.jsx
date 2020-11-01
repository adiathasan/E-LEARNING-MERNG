import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Editors from "../components/Editors";
import { Grid } from "../utils/style";

const Editor = styled(Grid)`
  background-color: #034a74;
  margin-top: 4rem;
  grid-template-columns: 33% 33% 33%;
  gap: 0.5rem;
  color: white;
  padding: 0 0.4rem;
  .HTML {
    grid-column: span 2;
  }
  .CSS {
    grid-column: span 2;
  }
  .JS {
    grid-column: span 2;
  }
  @media (max-width: 500px) {
    padding-top: 2rem;
  }
`;

const Canvas = styled.div`
  border: 10px solid #034a74;
  h1 {
    text-align: center;
    color: white;
    background-color: #034a74;
    padding: 0.3rem 0;
  }
`;

const Iframe = styled.iframe`
  display: block;
  border: none;
  height: 70vh;
  width: 100%;
`;

const Sandbox = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const srcDocType = `
              <html>
              <head>
                <style>
                  ${css}
                </style>
              </head>
              <body> 
                ${html} 
                <script>
                  ${javascript}
                </script>
              </body>
              </html>
            `;
      setSrcDoc(srcDocType);
    }, 1000);

    return () => clearTimeout(timer);
  }, [css, html, javascript]);

  return (
    <>
      <Editor>
        <Editors title="HTML" onChange={setHtml} value={html} language="xml" />
        <Editors title="CSS" onChange={setCss} value={css} language="css" />
        <Editors
          title="JS"
          onChange={setJavascript}
          value={javascript}
          language="javasript"
        />
      </Editor>
      <Canvas>
        <h1>Review Your Work Here</h1>
        <Iframe
          srcDoc={srcDoc}
          title="output"
          frameborder="0"
          sandbox="allow-scripts"
        />
      </Canvas>
    </>
  );
};

export default Sandbox;
