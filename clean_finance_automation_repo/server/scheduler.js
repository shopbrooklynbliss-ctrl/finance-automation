// Simple local scheduler skeleton for testing.
// Run with: node server/scheduler.js
import cron from 'node-cron'
import fetch from 'node-fetch'

async function createPackage(type) {
  // call your mega prompt server endpoint - local or deployed
  try {
    const res = await fetch(process.env.MEGAPROMPT_SERVER_URL + '/generate', { method: 'POST' })
    const data = await res.json()
    console.info('Generated package:', data)
    return data
  } catch (e) {
    console.error('Generate error', e)
    return null
  }
}

cron.schedule('0,30 * * * *', async () => {
  console.info('Creating short at', new Date().toISOString())
  await createPackage('short')
})

cron.schedule('0 * * * *', async () => {
  console.info('Creating long at', new Date().toISOString())
  await createPackage('long')
})

console.info('Scheduler started.')
