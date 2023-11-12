export function Float({ children }) {
  return <div className="flex justify-between">{children}</div>;
}

function Left({ children }) {
  return <div className="items-start">{children}</div>;
}

function Center({ children }) {
  return <div className="items-center">{children}</div>;
}

function Right({ children }) {
  return <div className="items-end">{children}</div>;
}

Float.Left = Left;
Float.Right = Right;
Float.Center = Right;
