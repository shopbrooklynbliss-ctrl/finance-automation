import { buildPrompt } from '../../src/lib/contentTemplates';

export default function handler(req, res) {
  const MASTER = process.env.MASTER_CONTROL_PROMPT || 'No master prompt configured';
  if (req.method === 'GET') {
    return res.status(200).json({ ok: true, message: 'MegaPromptServer alive', masterPresent: !!process.env.MASTER_CONTROL_PROMPT });
  }
  if (req.method === 'POST') {
    const { templateId, topic } = req.body || {};
    const generatedPrompt = buildPrompt(templateId, topic);

    return res.status(200).json({
      ok: true,
      generated: {
        title: topic || 'Sample Finance Content',
        script: `Generated using prompt: ${generatedPrompt}`,
        prompt: generatedPrompt
      }
    });
  }
  res.setHeader('Allow', ['GET','POST']);
  res.status(405).end('Method Not Allowed');
}
