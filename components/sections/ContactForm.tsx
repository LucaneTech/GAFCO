"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { company, localizedHref, serviceKeys, type Locale } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

type FormStatus = { kind: "idle" | "loading" | "success" | "error"; message: string };

export function ContactForm({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const dict = getDictionary(locale);
  const [status, setStatus] = useState<FormStatus>({ kind: "idle", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const companyName = String(formData.get("company") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const email = String(formData.get("email") ?? "");
    const service = String(formData.get("service") ?? "");
    const message = String(formData.get("message") ?? "");
    const whatsappMessage = [
      "Bonjour G.A.F.CO,",
      "",
      "Je souhaite vous contacter au sujet d'une demande.",
      "",
      `Nom : ${name}`,
      companyName ? `Entreprise : ${companyName}` : "",
      `Téléphone : ${phone}`,
      `E-mail : ${email}`,
      `Service : ${dict.services[service as keyof typeof dict.services]?.title ?? service}`,
      "",
      `Message : ${message}`,
    ].filter(Boolean).join("\n");
    setErrors({});
    setStatus({ kind: "loading", message: fr ? "Ouverture de WhatsApp…" : "Opening WhatsApp…" });
    const whatsappUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.location.assign(whatsappUrl);
  }

  const error = (field: string) => errors[field] ? <span className="field-error" id={`${field}-error`}>{errors[field]}</span> : null;
  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
      <div className="form-grid">
        <label>{fr ? "Nom et prénom" : "Full name"}<input name="name" autoComplete="name" required minLength={2} maxLength={100} aria-describedby={errors.name ? "name-error" : undefined} placeholder={fr ? "Votre nom et prénom" : "Your full name"} />{error("name")}</label>
        <label>{fr ? "Entreprise (facultatif)" : "Company (optional)"}<input name="company" autoComplete="organization" maxLength={120} placeholder={fr ? "Nom de votre entreprise" : "Company name"} /></label>
        <label>{fr ? "Téléphone" : "Phone"}<input name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={30} placeholder={company.phoneDisplay} aria-describedby={errors.phone ? "phone-error" : undefined} />{error("phone")}</label>
        <label>{fr ? "E-mail" : "Email"}<input name="email" type="email" autoComplete="email" required maxLength={160} placeholder={fr ? "Votre adresse e-mail" : "Your email address"} aria-describedby={errors.email ? "email-error" : undefined} />{error("email")}</label>
        <label className="full">{fr ? "Service concerné" : "Service of interest"}<select name="service" required defaultValue="" aria-describedby={errors.service ? "service-error" : undefined}><option value="" disabled>{fr ? "Sélectionnez un service" : "Select a service"}</option>{serviceKeys.map((key) => <option key={key} value={key}>{dict.services[key].title}</option>)}</select>{error("service")}</label>
        <label className="full">{fr ? "Message" : "Message"}<textarea name="message" required minLength={10} maxLength={2000} rows={6} placeholder={fr ? "Décrivez votre besoin ou votre projet…" : "Describe your needs or project…"} aria-describedby={errors.message ? "message-error" : undefined} />{error("message")}</label>
        <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
        <label className="consent full"><input name="consent" type="checkbox" required aria-describedby={errors.consent ? "consent-error" : undefined} /><span>{fr ? "J’accepte que mes données soient utilisées pour me recontacter concernant ma demande." : "I agree that my data may be used to contact me about this request."} <Link href={localizedHref(locale, "privacy")}>{dict.common.privacy}</Link>.</span>{error("consent")}</label>
      </div>
      <button className="button primary submit-button" type="submit" disabled={status.kind === "loading"}>{fr ? "Envoyer ma demande" : "Send my request"}<Icon name="arrow" /></button>
      <div className={`form-status ${status.kind}`} aria-live="polite" role="status">{status.message}</div>
      {status.kind === "error" ? <div className="form-alternatives"><a href={company.phoneHref}>{company.phoneDisplay}</a><span>•</span><a href={`mailto:${company.email}`}>{company.email}</a></div> : null}
    </form>
  );
}
