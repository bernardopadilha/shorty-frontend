import { Header } from "@/components/header";
import { Loader } from "@/components/ui/loader";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export function PageLayout() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <main className="min-h-screen bg-background relative">
      <div className="container mx-auto px-4 fixed top-5 left-0 right-0 z-50">
        <Header />
      </div>
      <div className="absolute top-44 left-0 right-0 mx-auto">
        <Outlet />
      </div>
    </main>
  )
}