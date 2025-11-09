import { userAgent } from "next/server";
import sitemap from "./sitemap";

const BASE_URL = 'http://localhost:3000';

export default function robots(){
    return{
        rules: {
            userAgent: "*",
            allow: '/',
            disallow : ['/admin/','/private/']
        },
        sitemap: `${BASE_URL}/sitemap.xml`
    }
}