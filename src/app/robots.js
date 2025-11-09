import { userAgent } from "next/server";
import sitemap from "./sitemap";

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