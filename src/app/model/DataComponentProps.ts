import {ReactNode} from "react";

export type PostComponentProps = {
    titulo: string;
    imagen: string;
    descripcion: string;
    fecha: string;
}

export type PostMockData = PostComponentProps;

export type CategoriesText = {
    text: string;
    children: ReactNode;
}