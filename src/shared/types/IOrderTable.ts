import { TablePaginationConfig } from "antd";
import { DataTypeOrder } from "../api/store/models/MOrganizationState";
import { FilterValue, SortOrder } from "antd/es/table/interface";

export interface DataTypeTableOrder extends DataTypeOrder {
    key: React.Key
}

export type OrderStatusType = 'Active' | 'Canceled' | 'Complete' | 'Pending' | 'Rejected';

export interface OrderStatusColor {
    Active: string,
    Canceled: string,
    Complete: string,
    Pending: string,
    Rejected: string,
}

export interface TableParams {
    pagination?: TablePaginationConfig,
    field?: React.Key | readonly React.Key[],
    order?: SortOrder,
    filters?: Record<string, FilterValue | null>,
}