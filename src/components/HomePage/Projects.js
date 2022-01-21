import React from 'react'
import Image from 'next/image'

import Extractify from '../../images/projects/extractify.png'
import Classroom from '../../images/projects/classroom.jpg'
import Posmate from '../../images/projects/posmate.jpg'
import GeekBOT from '../../images/projects/geekbot.jpg'
import Matrixio from '../../images/projects/matrixio.png'


function Projects() {
    return (
        <div id="projects" className='flex flex-col w-full bg-[#f9fbfc] p-4'>
            <p className='flex bg-gradient-to-r from-custom-purple-300 to-custom-cyan bg-clip-text text-transparent text-4xl md:text-5xl p-6 md:p-12 font-medium after:content-[""] after:relative after:inline-block after:w-2/5 after:h-[1px] after:bg-custom-purple-50 after:mt-7 after:ml-4'>Some stuffs I&apos;ve built</p>
            <div className="flex flex-col px-6 md:px-0 space-y-40">

                {/* Extractify */}
                <div className='flex flex-col md:flex-row md:justify-evenly pt-12'>
                    <div className="flex md:w-[35rem] md:h-[20rem] overflow-hidden duration-700 rounded-lg shadow-xl hover:shadow-2xl">
                        <Image src={Extractify} objectFit='cover' alt='Extractify' />
                    </div>
                    <div className="flex flex-col md:items-end">
                        <div className='flex flex-col md:items-end my-2'>
                            <p className='text-base text-purple-700'>Project</p>
                            <p className='text-4xl font-medium text-purple-800'>Extractify</p>
                        </div>
                        <div className="flex flex-col text-purple-900/95 bg-purple-100/60 md:w-96 rounded-lg p-4">
                            Extractify is a Multi-Class Bert-Classifier & ANN Linker Based JSON data extractor, Extractify API Takes Raw-Ocr Data & Classify & Maps Key-Value pairs which is Extremely useful in data extraction.
                        </div>
                        <div className='flex flex-col py-2'>
                            <p className='text-base font-medium text-purple-700'>Tech Stack: </p>
                            <div className='flex flex-wrap'>
                                <span className='text-sm text-custom-purple-400 pr-1'>ReactJS</span>
                                <span className='text-sm text-custom-purple-400 px-1'>Canvas</span>
                                <span className='text-sm text-custom-purple-400 px-1'>Flask</span>
                                <span className='text-sm text-custom-purple-400 px-1'>BERT Classifier Model</span>
                                <span className='text-sm text-custom-purple-400 px-1'>Tensorflow</span>
                            </div>
                        </div>
                        <div className='flex space-x-4 py-2'>
                            <a href="https://github.com/ML9-FORCES/extractify-frontend" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 text-purple-700' xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.03em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 250">
                                    <path className='duration-200 hover:fill-custom-cyan' d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z" fill="#660AB4" />
                                </svg>
                            </a>
                            <a href="https://extractifynow.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700 duration-200 hover:text-custom-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Classroom-X */}
                <div className='flex flex-col-reverse md:flex-row md:justify-evenly'>
                    <div className="flex flex-col items-start">
                        <div className='flex flex-col align-left my-2'>
                            <p className='text-base text-purple-700'>Project</p>
                            <p className='text-4xl font-medium text-purple-800'>Classroom-X</p>
                        </div>
                        <p className="text-purple-900/95 bg-purple-100/60 md:w-96 rounded-lg p-4">
                            A Robust E-Classroom Platform With Lowest Data-Transmission Leveraging on AI for Overcoming the
                            Internet Access Inequity Our Approach Was to Take Shortest Path Instead of Fastest Vehicle , So
                            Instead of Direct Streaming We Regenerated Teacher&apos;s Screen on Student Console With Bare-Minimum
                            Data-Streaming and Client-Side AI Monitoring Students Presence.
                        </p>
                        <div className='flex flex-col py-2 items-start'>
                            <p className='text-base font-medium text-purple-700'>Tech Stack: </p>
                            <div className='flex flex-wrap'>
                                <span className='text-sm text-custom-purple-400 px-1'>Tensorflow | BlazeFace </span>
                                <span className='text-sm text-custom-purple-400 pr-1'>Flask</span>
                                <span className='text-sm text-custom-purple-400 px-1'>Python</span>
                                <span className='text-sm text-custom-purple-400 px-1'>MongoDB</span>
                                <span className='text-sm text-custom-purple-400 px-1'>Socket.IO</span>
                                <span className='text-sm text-custom-purple-400 px-1'>HTML/CSS/JS</span>
                            </div>
                        </div>
                        <div className='flex space-x-4 py-2'>
                            <a href="https://github.com/Garvit9000c/ML9-FORCES_CLASSROOM-X" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 text-purple-700' xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.03em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 250">
                                    <path className='duration-200 hover:fill-custom-cyan' d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z" fill="#660AB4" />
                                </svg>
                            </a>
                            <a href="https://classroom-x.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700 duration-200 hover:text-custom-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex md:w-[35rem] md:h-[22rem] overflow-hidden duration-700 rounded-lg shadow-xl hover:shadow-2xl">
                        <Image src={Classroom} objectFit='cover' alt='Classroom-X' />
                    </div>
                </div>

                {/* Matrix.io */}
                <div className='flex flex-col md:flex-row md:justify-evenly'>
                    <div className="flex md:w-[42rem] md:h-[20rem] overflow-hidden duration-700 rounded-lg shadow-xl hover:shadow-2xl">
                        <Image src={Matrixio} objectFit='cover' alt='Matrix.io' />
                    </div>
                    <div className="flex flex-col md:items-end">
                        <div className='flex flex-col md:items-end my-2'>
                            <p className='text-base text-purple-700'>Project</p>
                            <p className='text-4xl font-medium text-purple-800'>Matrix.io</p>
                        </div>
                        <div className="flex flex-col text-purple-900/95 bg-purple-100/60 md:w-96 rounded-lg p-4">
                            Landing Page for Matrix.io Student Community
                        </div>
                        <div className='flex flex-col py-2 self-start'>
                            <p className='text-base font-medium text-purple-700'>Tech Stack: </p>
                            <div className='flex flex-wrap'>
                                <span className='text-sm text-custom-purple-400 pr-1'>ReactJS</span>
                                <span className='text-sm text-custom-purple-400 px-1'>SupaBase</span>
                            </div>
                        </div>
                        <div className='flex space-x-4 py-2'>
                            <a href="https://github.com/subinsk/matrixio" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 text-purple-700' xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.03em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 250">
                                    <path className='duration-200 hover:fill-custom-cyan' d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z" fill="#660AB4" />
                                </svg>
                            </a>
                            <a href="https://www.matrixio.tech/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700 duration-200 hover:text-custom-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Portfolio*/}
                <div className='flex flex-col-reverse md:flex-row md:justify-evenly'>
                    <div className="flex flex-col items-start">
                        <div className='flex flex-col align-left my-2'>
                            <p className='text-base text-purple-700'>Project</p>
                            <p className='text-4xl font-medium text-purple-800'>Portfolio</p>
                        </div>
                        <div className="flex flex-col text-purple-900/95 bg-purple-100/60 md:w-96 rounded-lg p-4">
                            My Portfolio</div>
                        <div className='flex flex-col py-2 items-start'>
                            <p className='text-base font-medium text-purple-700'>Tech Stack: </p>
                            <div className='flex flex-wrap'>
                                <span className='text-sm text-custom-purple-400 px-1'>NextJS </span>
                                <span className='text-sm text-custom-purple-400 pr-1'>TailwindCSS</span>
                                <span className='text-sm text-custom-purple-400 px-1'>Supabase</span>
                            </div>
                        </div>
                        <div className='flex space-x-4 py-2'>
                            <a href="https://github.com/subinsk/Portfolio" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 text-purple-700' xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.03em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 250">
                                    <path className='duration-200 hover:fill-custom-cyan' d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z" fill="#660AB4" />
                                </svg>
                            </a>
                            <a href="https://subinsk.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700 duration-200 hover:text-custom-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex md:w-[35rem] md:h-[22rem] overflow-hidden duration-700 rounded-lg shadow-xl hover:shadow-2xl">
                        <Image src={Classroom} objectFit='cover' alt='Portfolio' />
                    </div>
                </div>

                {/* Posmate */}
                <div className='flex flex-col md:flex-row md:justify-evenly'>
                    <div className="flex md:w-[35rem] md:h-[20rem] overflow-hidden duration-700 rounded-lg shadow-xl hover:shadow-2xl">
                        <Image src={Posmate} objectFit='cover' alt='Posmate' />
                    </div>
                    <div className="flex flex-col md:items-end">
                        <div className='flex flex-col md:items-end my-2'>
                            <p className='text-base text-purple-700'>Project</p>
                            <p className='text-4xl font-medium text-purple-800'>Posmate</p>
                        </div>
                        <div className="flex flex-col text-purple-900/95 bg-purple-100/60 md:w-96 rounded-lg p-4">
                            A Robust AI-Driven System (Web App) That Monitors : Posture (7 Body KeyPoints) Relative Distance from
                            Display Which Notifies User when his/her Posture or Relative Distance is Wrong with a Suggestion on
                            how to improve it!
                        </div>
                        <div className='flex flex-col py-2 self-start'>
                            <p className='text-base font-medium text-purple-700'>Tech Stack: </p>
                            <div className='flex flex-wrap'>
                                <span className='text-sm text-custom-purple-400 pr-1'>MoveNet 3.0</span>
                                <span className='text-sm text-custom-purple-400 px-1'>Flask</span>
                                <span className='text-sm text-custom-purple-400 px-1'>CI/CD Pipelines</span>
                                <span className='text-sm text-custom-purple-400 px-1'>HTML/CSS/JS</span>
                            </div>
                        </div>
                        <div className='flex space-x-4 py-2'>
                            <a href="https://github.com/subinsk/Posmate" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8' xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.03em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 250">
                                    <path className='duration-200 hover:fill-custom-cyan' d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z" fill="#660AB4" />
                                </svg>
                            </a>
                            <a href="https://posmate-io.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700 duration-200 hover:text-custom-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* GeekBOT*/}
                <div className='flex flex-col-reverse md:flex-row md:justify-evenly'>
                    <div className="flex flex-col items-start">
                        <div className='flex flex-col align-left my-2'>
                            <p className='text-base text-purple-700'>Project</p>
                            <p className='text-4xl font-medium text-purple-800'>GeekBOT</p>
                        </div>
                        <div className="flex flex-col text-purple-900/95 bg-purple-100/60 md:w-96 rounded-lg p-4">
                            Advance Discord Bot with all the Administrative Moderation Power, Codeforces and GitHub access, which
                            can take your Tech Server to another level.
                        </div>
                        <div className='flex flex-col py-2 items-start'>
                            <p className='text-base font-medium text-purple-700'>Tech Stack: </p>
                            <div className='flex flex-wrap'>
                                <span className='text-sm text-custom-purple-400 px-1'>NodeJS </span>
                                <span className='text-sm text-custom-purple-400 pr-1'>MongoDB</span>
                                <span className='text-sm text-custom-purple-400 px-1'>ExpressJS</span>
                                <span className='text-sm text-custom-purple-400 px-1'>DiscordJS</span>
                            </div>
                        </div>
                        <div className='flex space-x-4 py-2'>
                            <a href="https://github.com/subinsk/geekbot" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 text-purple-700' xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.03em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 250">
                                    <path className='duration-200 hover:fill-custom-cyan' d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z" fill="#660AB4" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex md:w-[22rem] md:h-[28rem] overflow-hidden duration-700 rounded-lg shadow-xl hover:shadow-2xl">
                        <Image src={GeekBOT} objectFit='cover' alt='GeekBOT' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
