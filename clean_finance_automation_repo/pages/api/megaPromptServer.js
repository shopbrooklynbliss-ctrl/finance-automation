// Vercel / Next.js API route - simple health + generate endpoint
export default function handler(req, res) {
  const MASTER = process.env.MASTER_CONTROL_PROMPT || 'No master prompt configured';
  if (req.method === 'GET') {
    return res.status(200).json({ ok: true, message: 'MegaPromptServer alive', masterPresent: !!process.env.MASTER_CONTROL_PROMPT });
  }
  if (req.method === 'POST') {
    // Placeholder: integrate with your LLM or generation pipeline here
    return res.status(200).json({ ok: true, generated: { title: 'Sample', script: 'This is a demo.' } });
  }
  res.setHeader('Allow', ['GET','POST']);
  res.status(405).end('Method Not Allowed');
}
