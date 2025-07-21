// Types
type FileData = {
    path: string;
    content: string;
}

type Status = {
    isOpen: boolean;
    errorMessage?: string;
}

type DatabaseData = {
    connectionUrl: string;
    credentials: string;
}

type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;

// Interfaces
interface InterfaceFileData {
    path: string;
    content: string;
}

interface InterfaceStatus {
    isOpen: boolean;
    errorMessage?: string;
}

interface InterfaceDatabaseData {
    connectionUrl: string;
    credentials: string;
}

interface InterfaceAccessedFileData extends InterfaceFileData, InterfaceStatus {}
interface InterfaceAccessedDatabaseData extends InterfaceDatabaseData, InterfaceStatus {}