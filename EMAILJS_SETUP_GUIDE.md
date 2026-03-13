# EmailJS Setup Guide for Auspen Academy Contact Form

This guide will help you set up email notifications for your contact form in 10 minutes.

---

## 🚀 Quick Overview

When someone submits the contact form, you'll receive an email at **info@auspenacademy.com** with all their details.

---

## 📋 Step-by-Step Setup

### **STEP 1: Create a Free EmailJS Account**

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up Free"**
3. Enter your email and create a password
4. Verify your email address
5. Login to your EmailJS dashboard

✅ **Free plan includes:** 200 emails/month (perfect for a contact form!)

---

### **STEP 2: Connect Your Email Service**

1. In the EmailJS dashboard, click **"Email Services"** in the left menu
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for testing)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Custom SMTP** (for info@auspenacademy.com domain email)

#### **For Gmail (Easy Testing):**
1. Click **"Gmail"**
2. Click **"Connect Account"**
3. Login with your Gmail account
4. Allow EmailJS to send emails
5. Give it a **Service ID** (e.g., "service_auspen") or use the auto-generated one
6. Click **"Create Service"**

#### **For Custom Domain Email (info@auspenacademy.com):**
1. Click **"Other"** or **"Custom SMTP"**
2. Enter your SMTP details:
   - **SMTP Server:** (Get from your email provider - e.g., smtp.gmail.com for Gmail)
   - **Port:** 587 (or 465 for SSL)
   - **Username:** info@auspenacademy.com
   - **Password:** Your email password
3. Click **"Create Service"**

✅ **Save your Service ID** - you'll need it later!

---

### **STEP 3: Create an Email Template**

1. Click **"Email Templates"** in the left menu
2. Click **"Create New Template"**
3. **Delete the default content** and paste this template:

```
Subject: New Inquiry from {{from_name}} - Auspen Academy Website

---

NEW STUDENT INQUIRY
===================================

STUDENT DETAILS:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Course Interested: {{course}}

MESSAGE:
{{message}}

---

This inquiry was submitted through the Auspen Academy website contact form.

Please respond to the student at: {{from_email}}
Or call them at: {{phone}}

---
Auspen Academy
Excellence in Education, Right from the Start
```

4. In the **"To Email"** field at the top, enter: **info@auspenacademy.com**
5. In the **"From Name"** field, enter: **Auspen Academy Website**
6. In the **"Reply To"** field, enter: **{{from_email}}** (this allows you to reply directly to students)
7. Give your template a name: **"Contact Form Inquiry"**
8. Click **"Save"**

✅ **Save your Template ID** - you'll need it later!

---

### **STEP 4: Get Your Public Key**

1. Click **"Account"** in the left menu (or your profile icon)
2. Go to the **"General"** tab
3. Find **"Public Key"** section
4. Copy the **Public Key** (it looks like: `xkM9vN3tQpL2sR7bY`)

✅ **Save your Public Key** - you'll need it next!

---

### **STEP 5: Update Your Code**

Open your project and edit the file:
**`/src/app/components/Contact.tsx`**

Find these lines (around line 65-67):

```typescript
const serviceId = "YOUR_SERVICE_ID";
const templateId = "YOUR_TEMPLATE_ID";
const publicKey = "YOUR_PUBLIC_KEY";
```

**Replace them with your actual values:**

```typescript
const serviceId = "service_auspen"; // Your Service ID from Step 2
const templateId = "template_xyz123"; // Your Template ID from Step 3
const publicKey = "xkM9vN3tQpL2sR7bY"; // Your Public Key from Step 4
```

**Example:**
```typescript
const serviceId = "service_12abc34";
const templateId = "template_56def78";
const publicKey = "xkM9vN3tQpL2sR7bY";
```

---

### **STEP 6: Test Your Contact Form**

1. Save all your changes
2. Run your website locally: `npm run dev`
3. Go to the Contact page
4. Fill out the form with test data
5. Click **"Submit Inquiry"**

✅ **You should see:**
- A success message: "Thank you! Your inquiry has been sent successfully..."
- An email in **info@auspenacademy.com** inbox within 1-2 minutes

---

### **STEP 7: Deploy to Production**

Once testing works:

1. Push your code to GitHub:
```bash
git add .
git commit -m "Add EmailJS contact form integration"
git push
```

2. Deploy to Vercel (it will auto-deploy if connected to GitHub)
3. Test the live contact form at your production URL

---

## 📧 What Happens When Someone Submits the Form?

1. **Student fills out the form** on your website
2. **EmailJS sends an email** to info@auspenacademy.com with:
   - Student name
   - Student email
   - Student phone number
   - Course they're interested in
   - Their message
3. **You receive the email** and can respond directly
4. **Student sees a success message** on the website

---

## 🎯 Email Template Preview

When you receive an inquiry, it will look like this:

```
From: Auspen Academy Website
To: info@auspenacademy.com
Subject: New Inquiry from Rajesh Kumar - Auspen Academy Website

NEW STUDENT INQUIRY
===================================

STUDENT DETAILS:
- Name: Rajesh Kumar
- Email: rajesh.kumar@example.com
- Phone: +91 98765 43210
- Course Interested: IIT-JEE Main Preparation

MESSAGE:
I'm interested in enrolling for the next batch. 
Please send me more details about the course structure and fees.

---

This inquiry was submitted through the Auspen Academy website contact form.

Please respond to the student at: rajesh.kumar@example.com
Or call them at: +91 98765 43210
```

---

## 🔒 Security Best Practices

✅ **DO:**
- Use EmailJS Public Key (it's safe to expose in frontend code)
- Keep your email password secure
- Use environment variables for sensitive data (optional)

❌ **DON'T:**
- Share your EmailJS Private Key
- Commit email passwords to GitHub
- Use your personal email password (create an app-specific password if using Gmail)

---

## 💡 Tips & Tricks

### **Gmail Users:**
If you're using Gmail with 2-factor authentication:
1. Go to **Google Account** → **Security** → **App Passwords**
2. Generate an **App Password** for "Mail"
3. Use this password instead of your regular password in EmailJS

### **Testing Locally:**
Use your personal email as the "To Email" during testing, then change it to info@auspenacademy.com for production.

### **Monitor Usage:**
- Check your EmailJS dashboard to see how many emails are being sent
- Free plan: 200 emails/month
- If you need more, upgrade to a paid plan ($7/month for 1,000 emails)

---

## 🐛 Troubleshooting

### **Problem: "EmailJS Error" message appears**

**Solution:**
1. Check that Service ID, Template ID, and Public Key are correct
2. Verify your email service is connected in EmailJS dashboard
3. Check browser console for detailed error messages
4. Make sure you're not exceeding the free plan limit (200 emails/month)

### **Problem: Form submits but no email received**

**Solution:**
1. Check your spam/junk folder
2. Verify the "To Email" in the EmailJS template is correct
3. Test with a different email address
4. Check EmailJS dashboard → History to see if the email was sent

### **Problem: "Please fill in all required fields" error**

**Solution:**
Make sure you fill in: Name, Email, Phone, and Course (all required fields)

---

## 📞 Support

If you need help:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

## ✅ Final Checklist

Before going live, make sure:

- [ ] EmailJS account created
- [ ] Email service connected
- [ ] Email template created with correct "To Email"
- [ ] Service ID, Template ID, and Public Key added to Contact.tsx
- [ ] Form tested locally - email received successfully
- [ ] Code pushed to GitHub
- [ ] Website deployed to Vercel
- [ ] Live form tested - email received successfully
- [ ] Spam folder checked (whitelist EmailJS if needed)

---

## 🎉 You're Done!

Your Auspen Academy contact form is now live and sending email notifications!

Every time a student fills out the form, you'll receive an email at **info@auspenacademy.com** with all their details.

---

**Created for Auspen Academy**  
*Excellence in Education, Right from the Start*
