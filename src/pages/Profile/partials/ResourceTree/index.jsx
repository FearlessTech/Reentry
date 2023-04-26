import { useState } from "react";
import Switch from "../Switch";
import { BiDownArrowCircle } from "react-icons/bi";

function TreeNode({ node }) {
  const [expanded, setExpanded] = useState(false);
  const isLeafNode = !node.children || node.children.length === 0;

  const [active, setActive] = useState(false);

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
          cursor: isLeafNode ? "default" : "pointer",
          display: "flex",
          gap: "1rem",
          marginBottom: "1rem",
          width: "max-content",
        }}
      >
        <Switch id={node.id} text={node.name} toggle={setActive} />
        <span
          style={{
            borderBottom: isLeafNode ? "" : "3px solid #137b7b",
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

export default function Tree({ data }) {
  return (
    <div>
      {data.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
}
