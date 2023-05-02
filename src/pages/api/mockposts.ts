import type {NextApiRequest, NextApiResponse} from "next";
import {postMock} from "@/pages/api/post.mock";

type Posts = {
    titulo: string;
    imagen: string;
    descripcion: string;
    fecha: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Array<Posts>>) {
        res.status(200).json(postMock);
}