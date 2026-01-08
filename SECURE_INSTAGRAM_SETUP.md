# Secure Instagram Token Setup Guide

## Step 1: Get Instagram Basic Display API Token

### 1.1 Create Facebook App
1. Go to https://developers.facebook.com/
2. Click "Create App" → "Consumer" → "Next"
3. Enter App Name: "GoGreenIn Website"
4. Enter App Contact Email: your email
5. Click "Create App"

### 1.2 Add Instagram Basic Display
1. In your app dashboard, click "Add Product"
2. Find "Instagram Basic Display" → Click "Set Up"
3. Click "Create New App" if prompted

### 1.3 Configure Instagram Basic Display
1. Go to Instagram Basic Display → Basic Display
2. Add Instagram Tester: Click "Add or Remove Instagram Testers"
3. Add your Instagram username: `gogreenrao`
4. Accept the invitation in your Instagram app

### 1.4 Get Access Token
1. In Basic Display settings, note your:
   - Instagram App ID: `XXXXXXXXXX`
   - Instagram App Secret: `XXXXXXXXXX`

2. Generate User Token:
   - Click "Generate Token" next to your Instagram account
   - Authorize the app in Instagram
   - Copy the generated token (starts with `IGQVQ...`)

## Step 2: Encrypt Your Token

### 2.1 Run Token Encryption
Open browser console on your website and run:

```javascript
// Load the encryption utility
const encryption = new TokenEncryption();

// Replace with your actual Instagram token
const myToken = 'IGQVQ...YOUR_ACTUAL_TOKEN_HERE...';

// Encrypt the token
const encryptedToken = encryption.encrypt(myToken);
console.log('Encrypted Token:', encryptedToken);

// Test decryption (should match original)
const decryptedToken = encryption.decrypt(encryptedToken);
console.log('Decrypted Token:', decryptedToken);
console.log('Match:', myToken === decryptedToken);
```

### 2.2 Update Your Code
Replace in `secure-instagram-api.js`:

```javascript
// Replace this line:
this.encryptedToken = 'YOUR_ENCRYPTED_TOKEN_HERE';

// With your encrypted token:
this.encryptedToken = 'YOUR_ACTUAL_ENCRYPTED_TOKEN_FROM_STEP_2.1';
```

## Step 3: Update Your Website

### 3.1 Update HTML
Replace in your `index.html`:

```html
<!-- Replace this line -->
<script src="instagram-integration.js"></script>

<!-- With these lines -->
<script src="token-encryption.js"></script>
<script src="secure-instagram-api.js"></script>
```

### 3.2 Test Integration
1. Open your website
2. Check browser console for any errors
3. Verify Instagram posts load from your actual account
4. Test both grid and detailed views

## Step 4: Token Refresh (Every 60 Days)

Instagram tokens expire every 60 days. Set a reminder to:

1. Go to Facebook Developers → Your App → Instagram Basic Display
2. Generate new token
3. Encrypt new token using Step 2.1
4. Update `secure-instagram-api.js` with new encrypted token
5. Commit and push changes

## Security Features

✅ **Token Encryption**: Your token is encrypted before storing in code
✅ **No Plain Text**: Token never appears in plain text in your repo
✅ **Caching**: API calls are cached for 10 minutes to reduce requests
✅ **Fallback**: Falls back to sample data if API fails
✅ **Error Handling**: Graceful error handling with user-friendly messages

## File Structure
```
your-website/
├── token-encryption.js      # Encryption utility
├── secure-instagram-api.js  # Secure API integration
├── instagram-enhanced-styles.css
└── index.html              # Updated with secure scripts
```

## Troubleshooting

**Token doesn't work?**
- Verify Instagram account is added as tester
- Check token hasn't expired (60 days)
- Ensure encryption/decryption works correctly

**API errors?**
- Check browser console for specific error messages
- Verify Facebook app is in "Live" mode (not Development)
- Ensure Instagram account is public or connected properly

**No posts showing?**
- Check if fallback sample posts are showing (means API issue)
- Verify your Instagram account has public posts
- Check network tab for API call responses

## Benefits

- ✅ **Free**: No monthly fees
- ✅ **Secure**: Encrypted token in public repo
- ✅ **Reliable**: Official Instagram API
- ✅ **Fast**: 10-minute caching
- ✅ **Fallback**: Works even if API fails