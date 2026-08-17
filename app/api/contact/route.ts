import { NextResponse } from "next/server";
import { sendContactMessage, validateContactPayload } from "@/lib/contact";

export async function POST(request: Request) {
  let input: unknown;
  try { input = await request.json(); } catch {
    return NextResponse.json({ ok: false, message: "Requête invalide." }, { status: 400 });
  }
  const result = validateContactPayload(input);
  if (!result.data) {
    return NextResponse.json({ ok: false, message: "Veuillez corriger les champs indiqués.", errors: result.errors }, { status: 422 });
  }
  try {
    await sendContactMessage(result.data);
    return NextResponse.json({ ok: true, message: "Votre demande a bien été transmise." });
  } catch (error) {
    const reason = error instanceof Error ? error.message : "UNKNOWN";
    const configurationMissing = reason.startsWith("CONTACT_PROVIDER_");
    return NextResponse.json({
      ok: false,
      code: configurationMissing ? "CONFIGURATION_REQUIRED" : "DELIVERY_FAILED",
      message: configurationMissing ? "L’envoi par e-mail n’est pas encore configuré. Utilisez le téléphone ou le lien e-mail ci-dessous." : "Votre demande n’a pas pu être envoyée. Veuillez réessayer ou nous contacter directement.",
    }, { status: configurationMissing ? 503 : 502 });
  }
}
