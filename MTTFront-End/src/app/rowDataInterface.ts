export interface RowData {
    Priority: number;
    Summary: string;
}

export interface TableOfRows {
    TableName: string
    Rows: Array<RowData>
}