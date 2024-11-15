import { ProjectsService } from "@/app/infrastucture/service/project.service";
import DashboardCards from "@/app/ui/organisms/common/DashboardCards";
import DashboardTopNavBar from "@/app/ui/organisms/common/DashboardTopNavBar";

import TableDashboardClient from "@/app/ui/organisms/common/TableDashboard";
import React from "react";

const projectsService = new ProjectsService();

export default async function page() {
  const { data, metadata } = await projectsService.findAll(1);

  return (
    <>
      <div className="w-full bg-gray-300">
        <DashboardTopNavBar />
        <DashboardCards />
        <div className="p-6 max-h-min">
          <TableDashboardClient initialData={data} initialMetadata={metadata} />
        </div>
      </div>
    </>
  );
}
