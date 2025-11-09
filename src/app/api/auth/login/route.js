import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
    const body = await request.json();
    const {email,password} = body;

    if(email !== 'admin@letdiv.com' || password !=='123'){
        return NextResponse.json(
            {message: "Email hoặc mật khẩu ko đúng"},
            {status:401}
        )
    }

    //Tạo token 
    const accessToken = 'fake-jwt-token-string';

    //Lấy cookie store
    const cookieStore = await cookies();

    //Set cookie
    cookieStore.set('access_token',accessToken,{
        httpOnly: true,
        //chỉ gửi qua https
        secure: process.env.NODE_ENV==='production', 
        maxAge: 60*60*24*7,  //1 tuần
        path: '/'
    })
    return NextResponse.json({message: 'Đăng nhập thành công'});
}