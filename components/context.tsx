import { createContext, useContext, Dispatch, SetStateAction } from 'react';



export type KmoContextType = {
    folder: FileSystemDirectoryHandle;
    setFolder: (Handle: FileSystemDirectoryHandle) => void;
    dbHandle: FileSystemFileHandle;
    setDbHandle: (Handle: FileSystemFileHandle) => void;
    db: string;
    setDb: (Data: string) => void;
    filesFound: number;
    setFilesFound: Dispatch<SetStateAction<number>>;
}

export const KmoContext = createContext<KmoContextType>({ 
    folder: {} as FileSystemDirectoryHandle, 
    setFolder: folder => console.warn('no folder provider'),
    dbHandle: {} as FileSystemFileHandle, 
    setDbHandle: folder => console.warn('no dbHandle provider'),
    db: "", 
    setDb: folder => console.warn('no db provider'),
    filesFound: 0, 
    setFilesFound: folder => console.warn('no db provider')
});
export const useKmoContext = () => useContext(KmoContext);