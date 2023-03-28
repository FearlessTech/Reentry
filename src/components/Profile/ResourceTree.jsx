import React from 'react';

function TreeNode({ node }) {
  const [expanded, setExpanded] = React.useState(false);
  const isLeafNode = typeof node.value !== 'object';

  const handleToggle = () => {
    if (!isLeafNode) {
      setExpanded(!expanded);
    }
  };

  return (
    <div style={{ marginLeft: '1rem' }}>
      <div onClick={handleToggle} style={{ cursor: isLeafNode ? 'default' : 'pointer' }}>
        {isLeafNode ? node.value : node.name}
        {!isLeafNode && (expanded ? '-' : '+')}
      </div>
      {typeof node.value === 'object' && expanded && (
        <div>
          {Object.entries(node.value).map(([name, value]) => (
            <TreeNode key={name} node={{ name, value }} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Tree({ data }) {
  return (
    <div>
      {Object.entries(data).map(([name, value]) => (
        <TreeNode key={name} node={{ name, value }} />
      ))}
    </div>
  );
}