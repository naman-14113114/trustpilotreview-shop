import { serveLegacyRequest } from '../../lib/legacy-router';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

type RouteContext = {
  params: Promise<{
    path?: string[];
  }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const params = await context.params;
  return serveLegacyRequest(params.path ?? []);
}

export async function HEAD(_request: Request, context: RouteContext) {
  const params = await context.params;
  return serveLegacyRequest(params.path ?? [], false);
}
