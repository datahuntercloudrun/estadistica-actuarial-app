"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Clock,
  Users,
  PenTool,
  Baby,
  ArrowRightLeft,
  Grid3X3,
  Calculator,
  GraduationCap,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { navigation } from "@/data/navigation";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Clock,
  Users,
  PenTool,
  Baby,
  ArrowRightLeft,
  Grid3x3: Grid3X3,
  Calculator,
};

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Teoría": BookOpen,
  "Ejercicios": PenTool,
  "Herramientas": Sparkles,
};

export function AppSidebar() {
  const pathname = usePathname();
  const { setOpenMobile, isMobile } = useSidebar();

  const handleNavClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border/40">
        <Link
          href="/"
          onClick={handleNavClick}
          className="flex items-center gap-3 px-4 py-4 group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight">Estadística Actuarial</span>
            <span className="text-[11px] text-muted-foreground">Curso 2025-2026</span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-2">
        {navigation.map((section) => {
          const SectionIcon = sectionIcons[section.title];
          return (
            <SidebarGroup key={section.title} className="py-2">
              <SidebarGroupLabel className="flex items-center gap-1.5 px-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">
                {SectionIcon && <SectionIcon className="h-3 w-3" />}
                {section.title}
              </SidebarGroupLabel>
              <SidebarMenu>
                {section.items.map((item) => {
                  const Icon = item.icon ? iconMap[item.icon] : null;
                  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

                  if (item.children) {
                    return (
                      <Collapsible key={item.href} defaultOpen={isActive} className="group/collapsible">
                        <SidebarMenuItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton
                              isActive={isActive}
                              className="rounded-lg transition-all duration-200"
                            >
                              {Icon && <Icon className="h-4 w-4 shrink-0" />}
                              <span className="flex-1 truncate">{item.label}</span>
                              {item.badge && (
                                <Badge
                                  variant="secondary"
                                  className="ml-auto mr-1 h-5 min-w-5 shrink-0 items-center justify-center rounded-full px-1.5 text-[10px] font-medium"
                                >
                                  {item.badge}
                                </Badge>
                              )}
                              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {item.children.map((child) => (
                                <SidebarMenuSubItem key={child.href}>
                                  <SidebarMenuSubButton
                                    asChild
                                    isActive={pathname === child.href}
                                  >
                                    <Link
                                      href={child.href}
                                      onClick={handleNavClick}
                                      className="truncate"
                                    >
                                      {child.label}
                                    </Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      </Collapsible>
                    );
                  }

                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className="rounded-lg transition-all duration-200"
                      >
                        <Link href={item.href} onClick={handleNavClick}>
                          {Icon && <Icon className="h-4 w-4 shrink-0" />}
                          <span className="flex-1 truncate">{item.label}</span>
                          {item.badge && (
                            <Badge
                              variant="secondary"
                              className="ml-auto h-5 min-w-5 shrink-0 items-center justify-center rounded-full px-1.5 text-[10px] font-medium"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
      <SidebarFooter className="border-t border-border/40 px-4 py-3">
        <p className="text-[10px] text-muted-foreground/50 text-center">
          Demografía y Estadística Actuarial
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
