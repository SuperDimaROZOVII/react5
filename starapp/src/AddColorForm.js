import React, { useState } from "react";
import { useColors } from "./color-hooks";
import { useInput } from "./hooks/useInput"

export default function AddColorForm({ onNewColor = f => f }) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const { addColor } = useColors();
    const submit = e => {
        e.preventDefault();
        addColor(titleProps, colorProps);

        resetTitle();
        resetColor();
    };
    return (
        <form onSubmit={submit}>
            <input
                value={titleProps}
                onChange={event => resetTitle(event.target.value)}
                type="text"
                placeholder="color title..."
                required />
            <input
                value={colorProps}
                onChange={event => resetColor(event.target.value)}
                type="color"
                required />
            <button>ADD</button>
        </form>
    );
}