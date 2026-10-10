/** Marks content that must be confirmed by the hotel before publishing. */
export function Verify({ children = "Confirm with hotel" }: { children?: React.ReactNode }) {
  return (
    <span className="verify" title="Unverified — to be confirmed by Gambella Hotel">
      {children}
    </span>
  );
}
