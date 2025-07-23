export const decodeSwapiId = (base64Id: string): string | null => {
    try {
        const decodedUrlId = decodeURIComponent(base64Id);
        const decodedString = atob(decodedUrlId);
        const parts = decodedString.split(':');
        if (parts.length === 2 && (parts[0] === 'films' || parts[0] === 'people' || parts[0] === 'planets' /* etc. */)) {
            return parts[1];
        }
        return null;
    } catch (e) {
        console.error("Failed to decode SWAPI ID:", e);
        return null;
    }
};