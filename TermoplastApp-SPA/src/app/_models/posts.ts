import { Photo } from './photo';
export interface Posts {

    id: number;
    title: string;
    head: string;
    body: string;
    photoUrl: string;
    photos: Photo[];
}
