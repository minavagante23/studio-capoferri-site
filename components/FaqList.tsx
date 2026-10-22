import { ui } from "@/lib/ui";

type FaqItem = readonly [string, string];

/** Shared FAQ list: large display questions, muted answers, light dividers. */
export function FaqList({ items }: { items: readonly FaqItem[] }) {
  return (
    <dl className="mt-2 space-y-0 divide-y divide-[#1c1e21]/12">
      {items.map(([q, a]) => (
        <div key={q} className="py-6 first:pt-2 sm:py-7">
          <dt className="font-display text-[1.15rem] font-medium leading-snug tracking-tight text-[#1c1e21] sm:text-[1.3rem]">
            {q}
          </dt>
          <dd className={`mt-3 max-w-[40rem] ${ui.bodyMuted}`}>{a}</dd>
        </div>
      ))}
    </dl>
  );
}
