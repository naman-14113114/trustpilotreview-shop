import { serveLegacyRequest } from '../lib/legacy-router';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  return serveLegacyRequest([]);
}

export async function HEAD() {
  return serveLegacyRequest([], false);
}
