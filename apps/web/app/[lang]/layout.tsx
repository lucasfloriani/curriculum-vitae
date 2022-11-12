import React from "react";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string | undefined };
}) {
  return (
    <div lang={params?.lang ?? "en-US"} id="lang">
      {children}
    </div>
  );
}
