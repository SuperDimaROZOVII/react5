import React from "react";
import Fetch from "./Fetch";
import UserDetails from "./UserDetails.js";

export default function GitHubUser({ login }) {
    return (
        <Fetch
            //uri={`https://api.github.com/users/${login}`}
            uri={`https://api.github.com/users/MoonTahoe`}
            renderSuccess={UserDetails}
        />
    );
}
