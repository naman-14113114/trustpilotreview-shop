"use client";

import NextLink from "next/link";
import { useParams as useNextParams, usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, type ComponentProps, type ReactNode } from "react";

type LegacyRouteState = {
  pathname: string;
  params: Record<string, string | undefined>;
};

const LegacyRouteContext = createContext<LegacyRouteState | null>(null);

type LegacyLinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & {
  to: string;
  children?: ReactNode;
};

export function LegacyRouterProvider({
  pathname,
  params,
  children
}: LegacyRouteState & { children: ReactNode }) {
  return <LegacyRouteContext.Provider value={{ pathname, params }}>{children}</LegacyRouteContext.Provider>;
}

export function Link({ to, children, ...props }: LegacyLinkProps) {
  return (
    <NextLink href={to} {...props}>
      {children}
    </NextLink>
  );
}

export function Outlet() {
  return null;
}

export function useParams<T extends Record<string, string | undefined> = Record<string, string>>() {
  const legacyRoute = useContext(LegacyRouteContext);
  const nextParams = useNextParams();
  return (legacyRoute?.params ?? nextParams) as T;
}

export function useLocation() {
  const legacyRoute = useContext(LegacyRouteContext);
  const pathname = usePathname();
  return { pathname: legacyRoute?.pathname ?? pathname ?? "/" };
}

export function Navigate({ to, replace = false }: { to: string; replace?: boolean }) {
  const router = useRouter();

  useEffect(() => {
    if (replace) {
      router.replace(to);
      return;
    }
    router.push(to);
  }, [replace, router, to]);

  return null;
}
