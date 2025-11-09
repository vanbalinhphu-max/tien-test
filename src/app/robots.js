import { userAgent } from "next/server";
import sitemap from "./sitemap";
const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

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