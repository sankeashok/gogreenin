// Token Encryption Utility for Instagram Integration
// Use this to encrypt your Instagram token before committing to public repo

class TokenEncryption {
    constructor() {
        // Simple XOR encryption with rotating key
        this.key = 'GoGreenIn2008CyclingBangalore'; // Change this to your own secret
    }

    encrypt(token) {
        let encrypted = '';
        for (let i = 0; i < token.length; i++) {
            const keyChar = this.key.charCodeAt(i % this.key.length);
            const tokenChar = token.charCodeAt(i);
            encrypted += String.fromCharCode(tokenChar ^ keyChar);
        }
        return btoa(encrypted); // Base64 encode
    }

    decrypt(encryptedToken) {
        try {
            const decoded = atob(encryptedToken); // Base64 decode
            let decrypted = '';
            for (let i = 0; i < decoded.length; i++) {
                const keyChar = this.key.charCodeAt(i % this.key.length);
                const encryptedChar = decoded.charCodeAt(i);
                decrypted += String.fromCharCode(encryptedChar ^ keyChar);
            }
            return decrypted;
        } catch (error) {
            console.error('Token decryption failed');
            return null;
        }
    }
}

// Usage example:
// const encryption = new TokenEncryption();
// const encrypted = encryption.encrypt('YOUR_INSTAGRAM_TOKEN');
// console.log('Encrypted token:', encrypted);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = TokenEncryption;
}