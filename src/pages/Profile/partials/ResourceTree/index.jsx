import { React, useState, useContext, createContext } from "react";
import Switch from "../Switch";
import data from "../../../../data/resources.json";

import Form from "./styles";
import Button from "../ProfileSaveButton";

function TreeNode({ node, activeResources }) {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState(activeResources.includes(node.id));

  const isLeafNode = !node.children || node.children.length === 0;

  const handleToggle = () => {
    if (!isLeafNode) {
      setExpanded(!expanded);
    }
  };

  return (
    <div style={{ marginLeft: "1rem" }}>
      <div
        onClick={handleToggle}
        style={{
          cursor: !isLeafNode && "pointer",
          display: "flex",
          gap: "1rem",
          marginBottom: "1rem",
          width: "max-content",
        }}
      >
        <Switch
          id={node.id}
          text={node.name}
          active={active}
          callback={() => {
            setActive(!active);
            activeResources.includes(node.id)
              ? activeResources.splice(activeResources.indexOf(node.id), 1)
              : activeResources.push(node.id);
          }}
          aria-details="select this resource"
        />
        <span
          style={{
            borderBottom: !isLeafNode && "3px solid #137b7b",
          }}
        >
          {node.name}
        </span>
      </div>
      {node.children && expanded && (
        <div>
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              activeResources={activeResources}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ResourceTree({ activeResources, handler = () => {} }) {
  const active = [...activeResources]; // simple Array

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handler(active);
      }}
    >
      {data.Resources.map((node) => (
        <TreeNode key={node.id} node={node} activeResources={active} />
      ))}
      <Button>Save</Button>
    </Form>
  );
}
