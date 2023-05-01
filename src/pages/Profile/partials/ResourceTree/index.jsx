import { React, useState, useContext, createContext } from "react";
import Switch from "../Switch";
import data from "../../../../data/resources.json";
import useGetResources from "../../connection/useGetResources";

import Form from "./styles";
import Button from "../ProfileSaveButton";

const resourcesContext = createContext(null);

function TreeNode({ node }) {
  const activeResources = useContext(resourcesContext);

  const [expanded, setExpanded] = useState(false);
  const isLeafNode = !node.children || node.children.length === 0;

  const [active, setActive] = useState(activeResources.includes(node.id));

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
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Tree() {
  const activeResources = useGetResources();

  return (
    <resourcesContext.Provider value={activeResources}>
      <Form>
        {data.Resources.map((node) => (
          <TreeNode key={node.id} node={node} />
        ))}
        <Button>Save</Button>
      </Form>
    </resourcesContext.Provider>
  );
}
