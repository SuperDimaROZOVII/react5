import { useEffect } from "react";
import React from "react";
import { useIterator } from "./hooks/useIterator";
import RepositoryReadme from "./RepositoryReadMe";

// export default function RepoMenu({
//     repositories,
//     onSelect = f => f
// }) {
//     const [{name}, previous, next] = useIterator(
//         repositories
//     )
//     useEffect(() => {
//         if (!name) return
//         onSelect(name)
//     }, [name])
//     return (
//         <div style={{display: "flex"}}>
//             <button onClick={previous}>&lt;</button>
//             <p>{name}</p>
//             <button onClick={next}>&gt;</button>
//         </div>
//     )
// }

export default function RepoMenu({ repositories, login }) {
    const [{ name }, previous, next] = useIterator(
        repositories
    );
    console.log(login)
    return (
        <>
            <div style={{ display: "flex" }}>
                <button onClick={previous}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
            {/* <RepositoryReadme login={login} repo={name} /> */}
            <RepositoryReadme login={login} repo={name} />
        </>
    );
} 