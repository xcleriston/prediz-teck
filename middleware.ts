import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Force Node.js runtime — Edge Runtime doesn't support pg (native Node.js module)
export const runtime = "nodejs";

const PROTECTED_ROUTES = ["/dashboard", "/admin", "/profile"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const host = req.headers.get("host") || "";

  // 1. Tenant Detection — inject domain into request headers
  const domain = host.split(":")[0];
  const res = NextResponse.next();
  res.headers.set("x-tenant-domain", domain);

  // 2. Skip Supabase auth if env vars are not configured (avoids crash on missing ANON_KEY)
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return res;
  }

  // 3. Auth Session Refresh using Supabase SSR pattern
  const { createServerClient } = await import("@supabase/ssr");
  let response = res;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(
          cookiesToSet: { name: string; value: string; options?: Record<string, unknown> }[]
        ) {
          cookiesToSet.forEach(({ name, value }) => req.cookies.set(name, value));
          response = NextResponse.next({ request: { headers: req.headers } });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options as Parameters<typeof response.cookies.set>[2])
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 4. Route Protection
  const isProtected = PROTECTED_ROUTES.some((route) => pathname.startsWith(route));
  if (isProtected && !user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
