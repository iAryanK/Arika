"use client";

import { useState, useEffect } from "react";
import Loader from "../shared/Loader";

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{loading ? <Loader /> : children}</div>;
}
