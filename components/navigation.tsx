"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [["About", "#about"], ["Capabilities", "#skills"], ["Selected work", "#projects"], ["Contact", "#contact"]] as const;

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--paper)]/95 backdrop-blur"><nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation"><a href="#top" className="flex items-center gap-2 font-bold tracking-tight" onClick={() => setOpen(false)}><span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--ink)] text-xs text-[var(--paper)]">AC</span>Aashay Chhajed</a><div className="hidden items-center gap-6 md:flex">{links.map(([label, href]) => <a key={href} href={href} className="text-sm text-[var(--muted)] transition hover:text-[var(--ink)]">{label}</a>)}<a href="/assets/Aashay_Chhajed_Resume.pdf" target="_blank" className="rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-[var(--paper)] transition hover:bg-[var(--accent)]">Resume ↗</a></div><button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="grid h-10 w-10 place-items-center md:hidden" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button></nav>{open && <div className="border-t border-[var(--line)] bg-[color:var(--paper)] px-5 py-5 md:hidden"><div className="mx-auto flex max-w-6xl flex-col gap-4">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="text-lg font-medium">{label}</a>)}<a href="/assets/Aashay_Chhajed_Resume.pdf" target="_blank" className="mt-1 font-semibold text-[var(--accent)]">View résumé ↗</a></div></div>}</header>;
}
