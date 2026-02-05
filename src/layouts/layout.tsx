import type { ReactNode } from "react";
import { Outlet, useMatches } from "react-router-dom";
import { AppSidebar } from "@/layouts/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Footer from "@/layouts/footer";

interface LayoutProps {
  children?: ReactNode;
  pageTitle?: string;
  breadcrumbItems?: Array<{ label: string; href?: string }>;
}

interface RouteHandle {
  title?: string;
}

export default function Layout({
  children,
  pageTitle: propPageTitle,
  breadcrumbItems = [],
}: LayoutProps) {
  const matches = useMatches();

  // Get pageTitle from the last route handle if not provided as a prop
<<<<<<< HEAD
  const routePageTitle = (matches[matches.length - 1]?.handle as RouteHandle)
    ?.title;
=======
  const routePageTitle = (matches[matches.length - 1]?.handle as { title?: string })?.title;
>>>>>>> f483bff1d44a6cdf18f3f27eafb0b3c205ade355
  const pageTitle = propPageTitle || routePageTitle || "Page";

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbItems.length > 0 ? (
                  <>
                    {breadcrumbItems.map((item, idx) => (
                      <div key={idx}>
                        <BreadcrumbItem
                          className={idx > 0 ? "hidden md:block" : ""}
                        >
                          {item.href ? (
                            <BreadcrumbLink href={item.href}>
                              {item.label}
                            </BreadcrumbLink>
                          ) : (
                            <BreadcrumbPage>{item.label}</BreadcrumbPage>
                          )}
                        </BreadcrumbItem>
                        {idx < breadcrumbItems.length - 1 && (
                          <BreadcrumbSeparator className="hidden md:block" />
                        )}
                      </div>
                    ))}
                  </>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
                  </BreadcrumbItem>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children || <Outlet />}
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
