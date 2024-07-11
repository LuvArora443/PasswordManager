import React from 'react'
import { useRef, useState, useEffect } from 'react'

const Manager = () => {

    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
      let passwords = localStorage.getItem("passwords")
      if(passwords){
        setpasswordArray(JSON.parse(passwords))
      }
    }, [])
    


    const savePassword = () => {
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("passwords",JSON.stringify([...passwordArray,form]))
        console.log([...passwordArray,form])
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: [e.target.value] })
    }

    // const showPassword = () => {
    //     if (ref.current.src.includes("icons/eyecross.png")) {
    //         ref.current.src = "icons/eye.png"
    //         passwordRef.current.type = "password"
    //     }
    //     else {
    //         passwordRef.current.type = "text"
    //         ref.current.src = "icons/eyecross.png"
    //     }
    // }
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
            <div className="mycontainer">

                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-600'>&lt;</span>
                    Pass
                    <span className='text-green-600'>OP/&gt;</span>
                </h1>
                <h5 className='text-xl text-center text-green-900'>Your own password manager!!</h5 >
                <div className="flex flex-col p-4 text-black gap-6 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-lg border border-green-700 py-1 px-3 w-full' type="text" name="site" id="" />
                    <div className="flex w-full gap-10 justify-between">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-lg border w-full border-green-700 py-1 px-3' type="text" name="username" id="" />
                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-lg border w-full border-green-700 py-1 px-3' type="password" name="password" id="" />
                            {/* <span className='absolute right-1 top-1 cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={29} src="icons/eye.png" alt="eye" />
                            </span> */}
                        </div>

                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-green-500 hover:bg-green-600 w-fit gap-2 py-1 px-4 rounded-lg border-2 border-green-800'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-2 text-center'>Your Passwords</h2>
                    {passwordArray.length===0 && <div className='text-center text-xl'>No Passwords to show</div>}
                    {passwordArray.length!==0 && 
                    <table className='table-auto w-full overflow-hidden rounded-md '>
                        <thead className='bg-green-500 text-center'>
                            <tr>
                                <th className='py-1 '>Site</th>
                                <th className='py-1'>Username</th>
                                <th className='py-1'>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-200 '>
                        {passwordArray.map((item,index)=>{
                            return <tr>
                                <td className='py-1 border border-white text-center w-32'><a href="{item.site}" target='_blank'>{item.site}</a></td>
                                <td className='py-1 border border-white text-center w-32'>{item.username}</td>
                                <td className='py-1 border border-white text-center w-32'>{item.password}</td>
                            </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager