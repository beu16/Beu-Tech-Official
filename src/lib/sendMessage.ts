// Every message sent from the site lands in this inbox, and it is shown as our tech support address
export const SUPPORT_EMAIL = "infobeutech@gmail.com";

// FormSubmit relays form posts to the inbox above without needing our own server
const ENDPOINT = `https://formsubmit.co/ajax/${SUPPORT_EMAIL}`;

type Fields = Record<string, string>;

// Sends one message to the support inbox. Throws if it could not be delivered.
export async function sendMessage(subject: string, fields: Fields, replyTo?: string): Promise<void> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...fields,
      _subject: subject,
      _template: "table",
      _captcha: "false",
      ...(replyTo ? { _replyto: replyTo } : {}),
    }),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok || !data || String(data.success) !== "true") {
    throw new Error(data?.message || `Request failed with status ${res.status}`);
  }
}
