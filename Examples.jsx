import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedtopic, setSelectedTopic] = useState();
  function handleSelect(selectedbutton) {
    setSelectedTopic(selectedbutton);
  }

  let content = <p> Select a Skill to Display</p>;

  if (selectedtopic) {
    content = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedtopic].title}</h3>
        <p>{EXAMPLES[selectedtopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedtopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples">
      <h2>Examples </h2>
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedtopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Software Development
            </TabButton>
            <TabButton
              isSelected={selectedtopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              Frontend Development
            </TabButton>
            <TabButton
              isSelected={selectedtopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Backend Engineering
            </TabButton>
            <TabButton
              isSelected={selectedtopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              Cloud Infrastructure
            </TabButton>
          </>
        }
      >
        {content}
      </Tabs>
    </Section>
  );
}
