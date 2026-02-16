export default function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  className?: string;
}) {
  const base =
    "relative inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061410] overflow-hidden";

  const metallicGold =
    "bg-gradient-to-br from-[#d4af37] via-[#f1d77a] to-[#b08d57] text-[#0a221c] border border-[#d4af37]/60 shadow-[0_8px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.55)] hover:scale-[1.03] active:scale-[0.97]";

  const secondaryStyle =
    "border border-[#d4af37]/60 text-[#d4af37] bg-transparent hover:bg-[#d4af37]/15 active:bg-[#d4af37]/25";

  const styles = variant === "primary" ? metallicGold : secondaryStyle;

  return (
    <button type={type} className={`${base} ${styles} group ${className}`}>
      <span className="relative z-10">{children}</span>
      
      {/* Subtle metallic sheen */}
      {variant === "primary" && (
        <span
          className="absolute top-0 left-[-75%] h-full w-[50%] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:left-[125%] transition-all duration-700 ease-out"
          style={{ transform: "skewX(-20deg)" }}
        />
      )}
    </button>
  );
}