# EmailJS Setup Instructions for Contact Form

The contact form is now configured to send emails to **morningstarhealthcareservicess@gmail.com** using EmailJS.

## Setup Steps:

### 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account (allows 200 emails/month)

### 2. Add Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose "Gmail" 
- Connect your Gmail account (morningstarhealthcareservicess@gmail.com)
- Note down your **Service ID** (e.g., service_xxxxxxx)

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template structure:

**Subject:** New Contact Form Message from {{from_name}}

**Body:**
```
You have received a new message from your website contact form.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from your Morning Star Health Care website contact form.
```

- Save template and note the **Template ID** (e.g., template_xxxxxxx)

### 4. Get Public Key
- Go to "Account" > "General"
- Copy your **Public Key**

### 5. Update Contact.jsx
Open `src/pages/Contact.jsx` and replace these placeholders (around line 56-58):

```javascript
const serviceID = 'service_xxxxxxx'; // Replace with your actual Service ID
const templateID = 'template_xxxxxxx'; // Replace with your actual Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual Public Key
```

### 6. Test the Form
- Fill out the contact form on your website
- Check morningstarhealthcareservicess@gmail.com for the email
- Check browser console for any errors

## Email Template Variables Available:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{phone}}` - Sender's phone (if provided)
- `{{message}}` - The message content
- `{{to_email}}` - Your email (morningstarhealthcareservicess@gmail.com)

## Troubleshooting:
- If emails don't arrive, check your Gmail spam folder
- Verify all IDs are correctly copied (no extra spaces)
- Check browser console for error messages
- Ensure you haven't exceeded the 200 emails/month limit

## Alternative: Formspree (Simpler Setup)
If EmailJS is too complex, you can use Formspree:
1. Go to https://formspree.io/
2. Create free account
3. Get form endpoint
4. Update form action to use Formspree endpoint

---
**Package Installed:** @emailjs/browser (already installed via npm)
