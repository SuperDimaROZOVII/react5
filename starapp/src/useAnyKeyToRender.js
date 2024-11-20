import { useState } from "react";
import React from "react";
import { useEffect } from "react";

export const useAnyKeyToRender = () => {
    const [, forceRender] = useState();
    useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
    }, []);
   };