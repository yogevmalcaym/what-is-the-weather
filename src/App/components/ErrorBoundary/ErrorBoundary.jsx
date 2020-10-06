import React from "react";

class ErrorBoundary extends React.Component {
    componentDidCatch(error, info) {
        console.error(error)
    }

    render() {
        return this.props.children;
    }
}

export default ErrorBoundary;
