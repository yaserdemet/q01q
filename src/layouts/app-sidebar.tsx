"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  BookOpenText,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/layouts/nav-main";
import { NavProjects } from "@/layouts/nav-projects";
import { NavUser } from "@/layouts/nav-user";
import { TeamSwitcher } from "@/layouts/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Yaser Demet",
    email: "ddemety@hotmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Q10Q Inc.",
      logo: BookOpenText,
      plan: "Learning",
      color: "#3e9392",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Noun and Pronoun",
      url: "/playground",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Pronouns",
          url: "/pronouns",
        },
     
        {
          title: "Prular",
          url: "/prular",
        },
        {
          title: "Babs",
          url: "/babs",
        },
      ],
    },
    {
      title: "Verbs",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Past Verbs",
          url: "/verbs/past-verbs",
        },
        {
          title: "Present Verbs",
          url: "/verbs/present-verbs",
        },
      ],
    },
    {
      title: "Interactive",
      url: "#",
      icon: BookOpen,
      items: [
      {
          title: "Graphics",
          url: "/interactive/graphics",
        },
         {
          title: "Map",
          url: "/interactive/map",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
       {
          title: "Settings",
          url: "/settings",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
