import { AudioFile } from './audioFile';

export interface Matura {
    id: string;
    fileName: string;
    language: string;
    type: string;
    year: number;
    variant: number;
    linkFromMon: string;
    date: Date;
    audios: AudioFile[];
    hasNoAudiosAvailable: boolean;
}