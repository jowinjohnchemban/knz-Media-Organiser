import { createContext, useContext, Dispatch, SetStateAction } from 'react';



export type KmoContextType = {
    folder: FileSystemDirectoryHandle;
    setFolder: (Handle: FileSystemDirectoryHandle) => void;
    dbHandle: FileSystemFileHandle;
    setDbHandle: (Handle: FileSystemFileHandle) => void;
    db: Record<string, any>;
    setDb: (Data: Record<string, any>) => void;
    filesFound: number;
    setFilesFound: Dispatch<SetStateAction<number>>;
    viewer: boolean;
    setViewer: (Data: boolean) => void;
    file: number;
    setFile: (Data: number) => void;
    getFileRecursively: any;
    cache: any[];
    setCache: (Data: any[]) => void;
}

export const KmoContext = createContext<KmoContextType>({ 
    folder: {} as FileSystemDirectoryHandle, 
    setFolder: folder => console.warn('no folder provider'),
    dbHandle: {} as FileSystemFileHandle, 
    setDbHandle: folder => console.warn('no dbHandle provider'),
    db: {}, 
    setDb: folder => console.warn('no db provider'),
    filesFound: 0, 
    setFilesFound: folder => console.warn('no db provider'),
    viewer: false, 
    setViewer: folder => console.warn('no db provider'),
    file: 0, 
    setFile: folder => console.warn('no db provider'),
    getFileRecursively: () => console.warn('no db provider'),
    cache: [], 
    setCache: folder => console.warn('no db provider')
});
export const useKmoContext = () => useContext(KmoContext);