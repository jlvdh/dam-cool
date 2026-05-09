import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type LanguageSwitcherProps = {
  locale: Locale;
  /** Pathname without locale prefix. `Link` from next-intl adds `/nl` or `/en`. */
  pathname?: string;
};

export function LanguageSwitcher({ locale, pathname = "/" }: LanguageSwitcherProps) {
  const path = pathname || "/";

  return (
    <div className="inline-flex gap-2" aria-label="Language switcher">
      <Link
        href={path}
        locale="nl"
        className={`rounded-chip px-2.5 py-1 text-xs ${
          locale === "nl"
            ? "font-semibold text-dam-ink underline underline-offset-4"
            : "text-dam-muted"
        }`}
      >
        NL
      </Link>
      <Link
        href={path}
        locale="en"
        className={`rounded-chip px-2.5 py-1 text-xs ${
          locale === "en"
            ? "font-semibold text-dam-ink underline underline-offset-4"
            : "text-dam-muted"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
