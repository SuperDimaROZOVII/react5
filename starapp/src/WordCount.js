import { useEffect } from "react";
import React from "react";
import { useAnyKeyToRender } from "./useAnyKeyToRender";
import { useMemo } from "react";

export function WordCount({ children = "" }) {
    useAnyKeyToRender();

    const words = useMemo(() => children.split(" "), [children]);

    useEffect(() => {
        console.log("fresh render");
    }, [words]);

    return (
        <>
            <p>{children}</p>
            <p>
                <strong>{words.length} — words</strong>
            </p>
        </>
    );
}