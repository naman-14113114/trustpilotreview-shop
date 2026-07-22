import fs from 'fs';

async function checkUrl(url) {
  const resp = await fetch(url);
  const text = await resp.text();
  return {
    status: resp.status,
    root: text.includes('id="root"'),
    js: text.includes('/assets/main') || text.includes('/assets/index')
  };
}

async function run() {
  const urls = [
    'https://www.trustpilotreview.shop/',
    'https://www.trustpilotreview.shop/floating-head-warning',
    'https://www.trustpilotreview.shop/missing-colors-expose',
    'https://www.trustpilotreview.shop/led-density-scam',
    'https://www.trustpilotreview.shop/brand-name-premium'
  ];

  const results = {};
  for (const url of urls) {
    results[url] = await checkUrl(url);
  }

  const output = JSON.stringify(results, null, 2);
  fs.writeFileSync('verify_results.txt', output, 'utf8');
  console.log(output);
}

run();
