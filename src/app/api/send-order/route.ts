import { Article } from "@/app/stores/cart";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { cart, name, mail, phone } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const cartHTML = cart
    .map(
      (item: Article) =>
        `<li>${item.name} - ${item.fragrance} x ${item.quantity}</li>`
    )
    .join("");

  const mailOptions = {
    from: `"Sitio Web" <${process.env.MAIL_USER}>`,
    to: "ventas@marabel.com.ar",
    subject: `Nuevo pedido de ${mail}`,
    html: `<p><b>Nombre:</b> ${name}</p>
    <p><b>Teléfono:</b> ${phone}</p>
           <p><b>Email:</b> ${mail}</p>
           <br/>
           <p><b>Pedido:</b></p>
           <ul>${cartHTML}</ul>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
    });
  }
}
