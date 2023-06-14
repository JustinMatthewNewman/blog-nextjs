import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

const IntroTemplate = () => {
return (
<footer className="bg-gray-800 py-6">
<div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
<div className="text-white text-center md:text-left">
<h2 className="text-xl font-bold mb-2">Explore More</h2>
<ul className="space-y-2">
<li>
<Link href="/recipes">
<a className="text-gray-300 hover:text-white">Recipes</a>
</Link>
</li>
<li>
<Link href="/blog">
<a className="text-gray-300 hover:text-white">Blog</a>
</Link>
</li>
<li>
<Link href="/about">
<a className="text-gray-300 hover:text-white">About</a>
</Link>
</li>
<li>
<Link href="/contact">
<a className="text-gray-300 hover:text-white">Contact</a>
</Link>
</li>
</ul>
</div>
<div className="flex items-center justify-center md:justify-start mt-4 md:mt-0">
<!-- <Image src="/logo.svg" alt="Logo" width={48} height={48} /> -->
<p className="text-white ml-2 font-semibold">JmuFood Blog</p>
</div>
<div className="text-white text-center md:text-right">
<h2 className="text-xl font-bold mb-2">Follow Us</h2>
<ul className="space-y-2">
<li>
<a
             href="https://www.instagram.com/foodblog"
             target="_blank"
             rel="noreferrer"
             className="text-gray-300 hover:text-white"
           >
Instagram
</a>
</li>
<li>
<a
             href="https://www.facebook.com/foodblog"
             target="_blank"
             rel="noreferrer"
             className="text-gray-300 hover:text-white"
           >
Facebook
</a>
</li>
<li>
<a
             href="https://www.twitter.com/foodblog"
             target="_blank"
             rel="noreferrer"
             className="text-gray-300 hover:text-white"
           >
Twitter
</a>
</li>
</ul>
</div>
</div>
<div className="bg-gray-600 h-px mt-6"></div>
<div className="container mx-auto mt-4 px-4">
<p className="text-sm text-gray-400 text-center">
© {new Date().getFullYear()} JmuFood Blog. All rights reserved.
</p>
</div>
</footer>
)
}

export default memo(IntroTemplate)
