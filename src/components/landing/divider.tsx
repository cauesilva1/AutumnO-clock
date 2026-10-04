export function Divider({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex h-[69px] w-px shrink-0 items-center justify-center ${className}`} aria-hidden="true">
      <img src="/ui/divider.svg" alt="" width={70} height={1} className="[transform:rotate(-90deg)]" />
    </span>
  );
}
