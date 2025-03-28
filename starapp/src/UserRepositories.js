import React from "react";
import Fetch from "./Fetch";
import RepoMenu from "./RepoMenu";

export default function UserRepositories({
    login,
    selectedRepo,
    onSelect = f => f
}) {
    console.log(login)
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}/repos`} 
            renderSuccess={({ data }) => (
                <RepoMenu
                    login={login}
                    repositories={data}
                    selectedRepo={selectedRepo}
                    onSelect={onSelect}
                />
            )}
        />
    );
} 