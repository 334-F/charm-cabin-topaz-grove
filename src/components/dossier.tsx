import { useEffect, useState, type ReactNode } from "react";
import { Printer } from "lucide-react";
import { copy, type DocKind, type Lang } from "@/lib/profile";

export function Dossier() {
  const [lang, setLang] = useState<Lang>("es");
  const [doc, setDoc] = useState<DocKind>("cv");
  const t = copy[lang];

  useEffect(() => {
    document.title = doc === "cv" ? t.metaCv : t.metaLetter;
    document.documentElement.lang = t.htmlLang;
  }, [doc, t]);

  return (
    <div className="min-h-screen bg-desk text-ink print:min-h-0 print:bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-5 print:gap-0 print:p-0 sm:px-6 sm:py-8 lg:py-10">
        <header className="no-print flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-2xl tracking-tight text-balance">Felipe Xu</p>
            <p className="mt-1 max-w-md text-sm text-pretty text-muted">
              {lang === "es"
                ? "Perfil para administración, atención internacional y traducción. Listo para imprimir."
                : "Profile for administration, international client care and translation. Ready to print."}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <div className="flex flex-wrap gap-2" role="group" aria-label={t.ui.langs}>
              <Toggle pressed={lang === "es"} onClick={() => setLang("es")}>
                {t.ui.es}
              </Toggle>
              <Toggle pressed={lang === "en"} onClick={() => setLang("en")}>
                {t.ui.en}
              </Toggle>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label={t.ui.docs}>
              <Toggle pressed={doc === "cv"} onClick={() => setDoc("cv")}>
                {t.ui.cv}
              </Toggle>
              <Toggle pressed={doc === "letter"} onClick={() => setDoc("letter")}>
                {t.ui.letter}
              </Toggle>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex h-11 items-center gap-2 bg-seal px-4 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
              >
                <Printer className="size-4" aria-hidden="true" />
                {t.ui.print}
              </button>
            </div>
          </div>
        </header>

        <div className="grid items-start gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <aside className="no-print order-2 flex flex-col gap-5 lg:order-1">
            <section className="border border-line bg-paper p-5">
              <h2 className="font-serif text-xl tracking-tight">{t.ui.notesTitle}</h2>
              <ul className="mt-4 flex flex-col gap-4">
                {t.ui.notes.map((note) => (
                  <li key={note.title}>
                    <p className="text-sm font-semibold">{note.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-pretty text-muted">{note.body}</p>
                  </li>
                ))}
              </ul>
            </section>
            <section className="border border-line bg-paper p-5">
              <h2 className="font-serif text-xl tracking-tight">{t.ui.sendTitle}</h2>
              <ul className="cv-list mt-4 flex flex-col gap-3">
                {t.ui.send.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-pretty text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          <article className="sheet order-1 p-6 print:p-0 sm:p-9 lg:order-2 lg:p-12">
            {doc === "cv" ? <Curriculum t={t} /> : <Letter t={t} />}
          </article>
        </div>
      </div>
    </div>
  );
}

function Toggle({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={
        pressed
          ? "inline-flex h-11 items-center bg-ink px-4 text-sm font-semibold text-paper"
          : "inline-flex h-11 items-center border border-line bg-paper px-4 text-sm font-semibold text-ink"
      }
    >
      {children}
    </button>
  );
}

function Curriculum({ t }: { t: (typeof copy)["es"] }) {
  return (
    <div className="flex flex-col gap-7 print:gap-3">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-line pb-6 print:gap-3 print:pb-3 sm:gap-8">
        <div>
          <p className="text-xs font-semibold tracking-widest text-seal uppercase">{t.kicker}</p>
          <h1 className="mt-2 font-serif text-4xl leading-none tracking-tight text-balance sm:text-5xl">
            {t.name}
          </h1>
          <p className="mt-3 max-w-xl text-base leading-snug text-pretty sm:text-lg">{t.role}</p>
          <p className="mt-2 text-sm text-pretty text-muted">{t.bridge}</p>
          <address className="mt-4 flex flex-col gap-1 text-sm not-italic text-muted sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-1">
            <span>{t.location}</span>
            <span className="hidden sm:inline" aria-hidden="true">
              ·
            </span>
            <a className="underline decoration-line underline-offset-2 hover:text-ink" href={`tel:${t.phone.replace(/\s/g, "")}`}>
              {t.phone}
            </a>
            <span className="hidden sm:inline" aria-hidden="true">
              ·
            </span>
            <a className="underline decoration-line underline-offset-2 hover:text-ink" href={`mailto:${t.email}`}>
              {t.email}
            </a>
            <span className="hidden sm:inline" aria-hidden="true">
              ·
            </span>
            <a
              className="underline decoration-line underline-offset-2 hover:text-ink"
              href={t.linkedinHref}
              target="_blank"
              rel="noreferrer"
            >
              {t.linkedin}
            </a>
          </address>
        </div>
        <img
          src="/portrait.jpg"
          alt="Felipe Xu"
          width={189}
          height={243}
          className="h-24 w-20 object-cover object-top print:h-20 print:w-16 sm:h-32 sm:w-24"
        />
      </header>

      <Section title={t.summaryTitle}>
        <p className="text-sm leading-relaxed text-pretty sm:text-base">{t.summary}</p>
      </Section>

      <Section title={t.langTitle}>
        <ul className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
          {t.languages.map((language) => (
            <li key={language.name} className="bg-paper px-3 py-3">
              <p className="font-serif text-xl leading-none">{language.name}</p>
              <p className="mt-1 text-xs tracking-wide text-muted uppercase">{language.level}</p>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-pretty">{t.interpret}</p>
      </Section>

      <Section title={t.expTitle}>
        <div className="flex flex-col gap-5 print:gap-2.5">
          {t.jobs.map((job) => (
            <article key={job.title}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-xl leading-tight">{job.title}</h3>
                {job.period ? (
                  <p className="shrink-0 text-sm text-muted tabular-nums">{job.period}</p>
                ) : null}
              </div>
              <p className="mt-1 text-sm text-seal">{job.meta}</p>
              <ul className="cv-list mt-2 flex flex-col gap-1.5">
                {job.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-pretty">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title={t.eduTitle}>
        {t.education.map((item) => (
          <article key={item.title}>
            <h3 className="font-serif text-xl leading-tight text-balance">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-pretty text-muted">{item.detail}</p>
          </article>
        ))}
        <p className="mt-3 text-sm leading-relaxed text-pretty">{t.extraEdu}</p>
      </Section>

      <Section title={t.skillTitle}>
        <p className="text-sm leading-relaxed text-pretty sm:text-base">{t.skills}</p>
        <p className="mt-4 border-t border-line pt-3 text-sm text-muted">
          {t.availability}
          <span aria-hidden="true"> · </span>
          {t.references}
        </p>
      </Section>
    </div>
  );
}

function Letter({ t }: { t: (typeof copy)["es"] }) {
  return (
    <div className="flex min-h-[70vh] flex-col print:min-h-0">
      <header className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-widest text-seal uppercase">{t.letterKicker}</p>
          <h1 className="mt-2 font-serif text-4xl leading-none tracking-tight">{t.name}</h1>
          <p className="mt-2 text-sm text-pretty">{t.role}</p>
          <address className="mt-3 text-sm not-italic leading-relaxed text-muted">
            {t.location}
            <br />
            <a className="underline decoration-line underline-offset-2" href={`tel:${t.phone.replace(/\s/g, "")}`}>
              {t.phone}
            </a>
            <br />
            <a className="underline decoration-line underline-offset-2" href={`mailto:${t.email}`}>
              {t.email}
            </a>
          </address>
        </div>
        <p className="text-sm text-muted sm:pt-7">{t.letterDate}</p>
      </header>

      <div className="mt-7 flex flex-col gap-4 text-sm leading-relaxed text-pretty sm:text-base">
        <p>{t.salutation}</p>
        {t.letter.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <footer className="mt-8">
        <p className="text-sm">{t.signoff}</p>
        <p className="mt-3 font-serif text-2xl italic">{t.name}</p>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-xs font-semibold tracking-widest text-seal uppercase print:mb-1">{title}</h2>
      {children}
    </section>
  );
}
