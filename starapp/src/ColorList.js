// import React, { useContext } from "react";
import React from "react";
import { ColorContext } from "./";
import Color from "./Color";
//import { useColors } from "./hooks/useColor.js";
import { useColors } from "./color-hooks";



// export default function ColorList() {
//     const { colors } = useContext(ColorContext);
//     return (
//         <ColorContext.Consumer>
//             {context => {
//                 if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
//                 <div className="color-list">
//                     {
//                         colors.map(color => <Color key={color.id} {...color} />)

//                     }
//                 </div>
//             }}
//         </ColorContext.Consumer>
//     );
// }



export default function ColorList() {
    const { colors } = useColors();
    return (
        <>
            {context => {
                if (!context.colors.length)
                    return <div>No Colors Listed. (Add a Color)</div>;
                return (
                    <div className="color-list">
                        {
                            context.colors.map(color =>
                                <Color key={color.id} {...color} />)
                        }
                    </div>
                )
            }}
        </>
    )
}
