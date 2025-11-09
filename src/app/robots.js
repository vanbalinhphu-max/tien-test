import { userAgent } from "next/server";
import sitemap from "./sitemap";
    const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || vercelUrl;

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