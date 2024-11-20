import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export function Checkbox() {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        console.log(checked ? "Yes, checked" : "No, not checked");
       })
    return (
        <>
            <input
                type="checkbox"
                value={checked}
                onChange={() => setChecked(checked => !checked)}
            />
            {checked ? "checked" : "not checked"}
        </>
    );
};