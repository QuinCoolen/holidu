import Image from 'next/image'
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import firebaseConfig from '../../utils/db/firebaseConfig.json';
import {db} from '@/utils/db/firebaseClient';
import { doc, setDoc } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function SignUp() {
    const [email, setEmail] =  useState("");
    const [password, setPassword] =  useState("");
    const [repeat_password, setRepeatPassword] =  useState(""); 
    const router = useRouter();
    
    const handleSubmit = async (event: FormEvent) => {
        if(password == repeat_password){
            event.preventDefault();
            createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                await setDoc(doc(db, 'users', user.uid), { email: user.email });
                router.push('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
        } else {

        }
    }

    return (
    <>
    <div className="min-h-full flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign up a new account</h2>

            <div className="mt-8">
            <div>

                <div className="mt-6 relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
                </div>
            </div>

            <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                    </label>
                    <div className="mt-1">
                    <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                    />
                    </div>
                </div>

                <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                    </label>
                    <div className="mt-1">
                    <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                    />
                    </div>
                </div>

                <div className='space-y-1'>
                <label htmlFor="repeat_password" className="block text-sm font-medium text-gray-700">
                    Repeat Password
                    </label>
                    <div className="mt-1">
                    <input
                        value={repeat_password}
                        onChange={(event) => setRepeatPassword(event.target.value)}
                        id="repeat_password"
                        name="repeat_password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                    />
                    </div>
                </div>
                {(password != repeat_password) ? 
                (
                    <div className='py-2 text-center'>
                        <p>Passwords Do Not Match</p>
                    </div>
                ) : (
                    <div>
                        <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                        >
                        Sign Up
                        </button>
                    </div>
                )}
                </form>
            </div>
            </div>
        </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
        <Image
            width={0}
            height={0}
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
        />
        </div>
    </div>
    </>
)
}