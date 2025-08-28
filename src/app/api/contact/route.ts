// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = (await req.json()) as {
      name: string;
      email: string;
      message: string;
    };

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          ok: false,
          error:
            'Missing required fields: name, email, and message are required',
        }),
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.RESEND_API_KEY) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: 'Server configuration error: RESEND_API_KEY not found',
        }),
        { status: 500 }
      );
    }

    // Check API key format
    if (!process.env.RESEND_API_KEY.startsWith('re_')) {
      return new Response(
        JSON.stringify({
          ok: false,
          error:
            "Server configuration error: Invalid RESEND_API_KEY format (should start with 're_')",
        }),
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_TO) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: 'Server configuration error: CONTACT_TO not found',
        }),
        { status: 500 }
      );
    }

    const html = `
      <h2>New Contact</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b><br/>${(message ?? '').replace(/\n/g, '<br/>')}</p>
    `;

    // ⬇️ Resend returns { data, error }
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Using Resend's test domain
      to: process.env.CONTACT_TO!, // Gmail tujuan
      subject: `New inquiry from ${name}`,
      replyTo: email, // ✅ camelCase
      html,
    });

    if (error) {
      // error is a ResendError with .message
      console.error('Resend error:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));

      // Handle different error formats
      const errorMessage =
        error.message ||
        error.name ||
        JSON.stringify(error) ||
        'Unknown email service error';

      return new Response(
        JSON.stringify({
          ok: false,
          error: `Email service error: ${errorMessage}`,
        }),
        {
          status: 400,
        }
      );
    }

    // data?.id is the message id
    return Response.json({ ok: true, id: data?.id });
  } catch (e: unknown) {
    console.error('API error:', e);
    const errorMessage = e instanceof Error ? e.message : 'Unknown error';
    return new Response(
      JSON.stringify({ ok: false, error: `Server error: ${errorMessage}` }),
      { status: 500 }
    );
  }
}
