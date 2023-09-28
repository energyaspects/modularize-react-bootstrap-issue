'use client'

import { useState } from "react";
import {
  AccordionButtonProps,
  useAccordionButton,
  Accordion,
  Button,
} from "react-bootstrap";

interface IExpandableCardToggle {
  toggle: AccordionButtonProps["onClick"];
  expanded: boolean;
}

export const ExpandableCardToggle: React.FC<IExpandableCardToggle> = ({
  toggle,
  expanded,
}) => {
  const eventKey = "0";

  const accordionToggle = useAccordionButton(eventKey, toggle);

  return (
    <Accordion.Item
      as={Button}
      className="expandable-card-accordion-toggle-wrapper p-0"
      eventKey={eventKey}
      onClick={accordionToggle}
      style={{
        position: "relative",
        zIndex: 2,
      }}
      aria-label={expanded ? "Collapse" : "Expand"}
    >
      <div className="align-items-center d-flex justify-content-center expandable-card-accordion-toggle">
        icon
      </div>
    </Accordion.Item>
  );
};

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  return (
    <main>
      <ExpandableCardToggle
        toggle={() => setExpanded(!expanded)}
        expanded={expanded}
      />
    </main>
  );
}
