import React from "react";

const PostLoadingComponent = (Component) => {
    return function PostLoading({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return <p>Loading posts...</p>;
    };
};

export default PostLoadingComponent;
