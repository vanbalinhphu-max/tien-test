'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage(){
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setEror] = useState('');
    const router= useRouter();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setEror('');

        try {
            const res = await fetch('/api/auth/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email,password})
            })
            if(res.ok){
                router.push('/dashboard')
            }else{
                const data = await res.json();
                setEror(data.message || "Email hoặc mật khẩu ko chính xác")
            }
        } catch (error) {
            setError('Đã có lỗi xảy ra, vui lòng thử lại');
        }
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                <button type="submit">Login</button>
                {error && <p style={{color:'red'}}>{error}</p>}
            </form>
        </div>
    )
}