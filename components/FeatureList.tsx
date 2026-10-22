import { ui } from "@/lib/ui";

type Item = readonly [string, string];

/** Shared titled feature / service list (long-form pages). */
export function FeatureList({ items }: { items: readonly Item[] }) {
  return (
    <ul className="mt-2 list-none space-y-3 pl-0">
      {items.map(([title, text]) => (
        <li key={title} className={ui.bodyMuted}>
          <strong className="font-semibold text-[#1c1e21]">{title}</strong>: {text}
        </li>
      ))}
    </ul>
  );
}
