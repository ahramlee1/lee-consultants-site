import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json(); // ✅ include phone

    const msg = {
      to: 'ahram.lee@lee-consultants.com', // where the form should send
      from: 'no-reply@lee-consultants.com', // must match your verified SendGrid sender domain
      subject: `New contact form submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ''}
        Message:
        ${message}
      `,
      html: `
        <strong>Name:</strong> ${name}<br/>
        <strong>Email:</strong> ${email}<br/>
        ${phone ? `<strong>Phone:</strong> ${phone}<br/>` : ''}
        <strong>Message:</strong><br/>
        <p>${message}</p>
      `,
    };

    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Error sending email' },
      { status: 500 }
    );
  }
}

