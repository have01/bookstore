import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const SignUp = () => {
    const naviagte = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const existingEmails = JSON.parse(localStorage.getItem('registeredEmails')) || [];

    const handleSignup = (event) => {
        event.preventDefault()
        if (existingEmails.includes(email)) {
            alert('This email is already registered. Please use a different email.');
        } else {
            const user = {
                email,
                password,
            };
            localStorage.setItem('user', JSON.stringify(user));
            existingEmails.push(email);
            localStorage.setItem('registeredEmails', JSON.stringify(existingEmails));
            naviagte("/login")
        }
    };
    return (
        <div class="flex min-h-screen flex-col px-6 py-2 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
            </div>
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" onSubmit={(event) => handleSignup(event)}>
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp