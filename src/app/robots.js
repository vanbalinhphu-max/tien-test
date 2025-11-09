import { userAgent } from "next/server";
import sitemap from "./sitemap";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function robots(){
    return{
        rules: {
            userAgent: "*",
            allow: '/',
            disallow : ['/admin/','/private/']
        },
        sitemap: `${baseUrl}/sitemap.xml`
    }
}