import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from "react-codemirror2";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { ButtonOutlineDark } from "../utils/style";
import styled from "styled-components";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

const EditorBody = styled.div`
  width: 100%;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem 0.1rem;
  }
  .code-mirror-wrapper {
    height: 100% !important;
    border-radius: 10px;
  }
`;

const ButtonStyled = styled(ButtonOutlineDark)`
  padding: 0.1rem 0.7rem;
  margin-right: 0.1rem;
`;

const Editors = ({ title, language, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (_, __, value) => {
    onChange(value);
  };
  return (
    <EditorBody className={`${isOpen ? title : ""}`}>
      <div className="title">
        <h2>{title}</h2>
        {isOpen ? (
          <ButtonStyled onClick={() => setIsOpen(!isOpen)}>
            <CancelPresentationIcon />
          </ButtonStyled>
        ) : (
          <ButtonStyled onClick={() => setIsOpen(!isOpen)}>
            <OpenInNewIcon />
          </ButtonStyled>
        )}
      </div>
      <ControlledEditor
        autoScroll
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </EditorBody>
  );
};

export default Editors;
