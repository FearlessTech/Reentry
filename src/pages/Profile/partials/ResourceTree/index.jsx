import React from 'react';

function TreeNode({ node }) {
  const [expanded, setExpanded] = React.useState(false);
  const isLeafNode = !node.children || node.children.length === 0;

  const handleToggle = () => {
    if (!isLeafNode) {
      setExpanded(!expanded);
    }
  };

  return (
    <div style={{ marginLeft: '1rem' }}>
      <div
        onClick={handleToggle}
        style={{ cursor: isLeafNode ? 'default' : 'pointer' }}
      >
        {node.name}
        {!isLeafNode && (expanded ? '-' : '+')}
      </div>
      {node.children && expanded && (
        <div>
          {node.children.map(child => (
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
      {data.map(node => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
}
