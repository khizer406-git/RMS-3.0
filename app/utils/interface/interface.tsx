export interface DashboardInterface {
    Sales: DashboardMenuinterface;
    Orders: DashboardMenuinterface;
    PendingTables: DashboardMenuinterface;
    ApprovedTables: DashboardMenuinterface;
    totalTables: DashboardMenuinterface;
    TotalInventory: DashboardMenuinterface;
}

export interface DashboardMenuinterface {
    TotalSales: number;
    Change: number;
}
