"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CloseIcon, MenuIcon } from "@/components/icons";
import { navItems, site } from "@/data/site";

const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const menu = menuRef.current;
    const focusables = menu ? Array.from(menu.querySelectorAll<HTMLElement>(focusableSelector)) : [];
    focusables[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <span className="brand-mark" aria-hidden="true">MS</span>
          <span className="brand-copy">
            <strong>Mohammad Sami</strong>
            <span>SEO Strategist</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                className={active ? "nav-link active" : "nav-link"}
                href={item.href}
                key={item.href}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href={site.primaryCta.href} className="button button-small header-cta">
          {site.primaryCta.label} <ArrowUpRight className="button-icon" />
        </Link>

        <button
          ref={triggerRef}
          className="menu-button"
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      </div>

      <div
        ref={menuRef}
        id="mobile-navigation"
        className={open ? "mobile-menu open" : "mobile-menu"}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="mobile-menu-top">
          <Link href="/" className="brand" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true">MS</span>
            <span className="brand-copy">
              <strong>Mohammad Sami</strong>
              <span>SEO Strategist</span>
            </span>
          </Link>
          <button className="menu-button" aria-label="Close navigation menu" onClick={() => setOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        <nav className="mobile-nav" aria-label="Mobile primary navigation">
          {navItems.map((item, index) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link href={item.href} key={item.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
                <span aria-hidden="true">0{index + 1}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href={site.primaryCta.href} className="button mobile-menu-cta" onClick={() => setOpen(false)}>
          {site.primaryCta.label} <ArrowUpRight className="button-icon" />
        </Link>
      </div>
    </header>
  );
}
