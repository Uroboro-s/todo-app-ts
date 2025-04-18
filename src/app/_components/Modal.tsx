interface AppProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  children,
}: AppProps): React.JSX.Element | null {
  if (!isOpen) return null;

  return (
    <div
      // onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(3, 3, 3, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          background: "white",
          minHeight: "200px",
          width: "300px",
          margin: "auto",
          padding: "2%",
          border: "2px solid #000",
          borderRadius: "10px",
          boxShadow: "2px solid black",
          zIndex: 1,
        }}
      >
        <div
          onClick={onClose}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "50px",
            width: "50px",
          }}
        >
          X
        </div>
        {children}
      </div>
    </div>
  );
}
