"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";

export default function Header() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isCategoryActive, setIsCategoryActive] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  const handleResize = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (searchButtonRef.current && searchContainerRef.current) {
        if (width <= 768) {
          searchButtonRef.current.style.display = "inline";
          searchContainerRef.current.style.display = "none";
        } else {
          searchButtonRef.current.style.display = "none";
          searchContainerRef.current.style.display = "block";
          setIsSearchExpanded(false);
          setIsCategoryActive(false);
        }
      }
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="top-left-container">
          <button className="hamburger" onClick={() => setIsCategoryActive((prev) => !prev)}>&#9776;</button>
          <Link href="../">
            <Image
              src='/triangle_45_45_90.png'
              width={48}
              height={48}
              alt='A triangle with a circumscribed circle'
              className='image'
            />
          </Link>
        </div>

        <div className="top-right-container">
          <div className="search-container" ref={searchContainerRef}>
            <input type="text" className="search-input" placeholder="Search calculators..." />
          </div>
          <button className="search-button" ref={searchButtonRef} onClick={() => setIsSearchExpanded(true)}>&#128269;</button>
          <div className="nav-links">
            <Link href="../about">About</Link>
            <Link href="../contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <div className={isCategoryActive ? "category-nav active" : "category-nav"}>
          {[
            "Conversion",
            "Math",
            "Physics",
            "Reference",
          ].map((cat) => (
            <Link key={cat} href={`../${cat.toLowerCase()}`}>{cat}</Link>
          ))}
        </div>
      </div>
      {isSearchExpanded && (
        <div className="search-expanded">
          <button onClick={() => setIsSearchExpanded(false)}>&lt;</button>
          <input type="text" className="search-input" placeholder="Search calculators..." />
        </div>
      )}
    </header>
  );
};
