import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Login() {
    return (
        <div>
            <Header />
            <div class="container mx-auto p-8 flex">
                <div class="max-w-md w-full mx-auto">
                    <h1 class="text-4xl text-center mb-12 font-thin">Company</h1>

                    <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
                        <div class="p-8">
                            <form method="POST" class="" action="#" onsubmit="return false;">
                                <div class="mb-5">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-600">Email</label>

                                    <input type="text" name="email" class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                                </div>

                                <div class="mb-5">
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-600">Password</label>

                                    <input type="text" name="password" class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                                </div>

                                <button class="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">Login</button>
                            </form>
                        </div>

                        <div class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                            <a href="#" class="font-medium text-indigo-500">Create account</a>

                            <a href="#" class="text-gray-600">Forgot password?</a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
