export default function getBaseUrl() {
    // look at host name to determine if the application is running in development
    const inDevelopment = window.location.hostname === 'localhost';
    // if in production, point to localhost port 3001 for mock api
    return inDevelopment ? 'http://localhost:3001/' : '/';
}
