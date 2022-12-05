import { useRouter } from 'next/router'
import React, { Component, useEffect } from "react";
export default function ActiveLink({ children, href }) {
    const { asPath } = useRouter()
    console.log("=============", asPath)
    useEffect(() => {
        window.location.href = "https://viralbilla.com"+asPath;
      }, []);
}

// export default function Custom404() {
//     return <h1>404 - Page Not Found</h1>
//   }
