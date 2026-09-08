import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function Breadcrumbs({ items }: { items: Array<{ name: string; href: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => (
          <li key={`${item.href}-${index}`} className="flex items-center gap-1">
            {index > 0 ? <ChevronRight className="size-4" aria-hidden="true" /> : null}
            {index === items.length - 1 ? (
              <span aria-current="page" className="font-medium text-slate-700">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-sky-700">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
