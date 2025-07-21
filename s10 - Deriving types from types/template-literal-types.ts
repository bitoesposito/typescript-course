const mainUserName = 'Vito';

const greeting = `Hi there, ${mainUserName}`;

type ReadPermissions = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';

// type FilePermission = "no-read-no-write" | "no-read-write" | "read-no-write" | "read-write"

type FilePermission = `${ReadPermissions}-${WritePermissions}`;

type DataFile = {
    data: string;
    permissions: FilePermission;
}

type DataFileEventNames = `${keyof DataFile}Changed`

type DataFileEvents = {
    [K in DataFileEventNames]: () => void;
}