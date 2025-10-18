"use client";

import { Avatar, AvatarFallback } from "@repo/components/ui/avatar";
import { Badge } from "@repo/components/ui/badge";
import { Skeleton } from "@repo/components/ui/skeleton";
import { ColumnDef } from "@tanstack/react-table";
import Image, { type StaticImageData } from "next/image";
import * as React from "react";

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  teamName: string;
  isTeamLeader: boolean;
  avatar?: StaticImageData;
  skeleton?: boolean;
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "avatar",
    header: "",
    cell: ({ row }) => {
      const skeleton = row.original.skeleton;
      if (skeleton) return <Skeleton className="size-10 rounded-full" />;
      const avatar: StaticImageData = row.getValue("avatar");
      const firstName: string = row.getValue("firstName");
      const lastName: string = row.getValue("lastName");
      return (
        <Avatar>
          {!!avatar && (
            <Image src={avatar} alt={`${firstName} ${lastName} avatar`} />
          )}
          <AvatarFallback>
            {firstName[0]}
            {lastName[0]}
          </AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "firstName",
    header: "First name",
    cell: ({ row }) => {
      const skeleton = row.original.skeleton;
      if (skeleton) return <Skeleton className="w-full min-w-10 h-8" />;
      return row.getValue("firstName");
    },
  },
  {
    accessorKey: "lastName",
    header: "Last name",
    cell: ({ row }) => {
      const skeleton = row.original.skeleton;
      if (skeleton) return <Skeleton className="w-full min-w-10 h-8" />;
      return row.getValue("lastName");
    },
  },
  {
    accessorKey: "teamName",
    header: "Team",
    cell: ({ row }) => {
      const skeleton = row.original.skeleton;
      if (skeleton) return <Skeleton className="w-full min-w-10 h-8" />;
      return row.getValue("teamName");
    },
  },
  {
    accessorKey: "isTeamLeader",
    header: "",
    cell: ({ row }) => {
      const skeleton = row.original.skeleton;
      if (skeleton) return <Skeleton className="w-full min-w-10 h-8" />;
      const isTeamLeader: boolean = row.getValue("isTeamLeader");
      return isTeamLeader ? (
        <Badge variant={"success"}>Team Leader</Badge>
      ) : null;
    },
  },
];
