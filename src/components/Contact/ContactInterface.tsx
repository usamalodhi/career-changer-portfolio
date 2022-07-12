export interface MailtoProps {
  email: string;
  subject: string;
  body: string;
  children: string;
}
export interface ContactProps extends MailtoProps {
  heading: string;
  message: string;
  tel: string;
}
