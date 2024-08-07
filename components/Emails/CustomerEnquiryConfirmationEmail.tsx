// Imports
import {
	Head,
	Html,
	Link,
	Text,
	Body,
	Section,
	Preview,
	Container,
} from "@react-email/components";
import * as React from "react";
import {ICustomerEmail} from "@/types/email";

// Components
import EmailFooter from "./Layout/EmailFooter";
import EmailHeader from "./Layout/EmailHeader";

export const CustomerEnquiryConfirmationEmail: React.FC<
	ICustomerEmail.ICustomerConfirmationEmail
> = ({
	email,
	subject,
	lastName,
	firstName,
	updatedDate,
	phoneNumber,
	imagesDirUrl,
	themesOptionsContent,
}) => {
	const formattedDate = new Intl.DateTimeFormat("en", {
		dateStyle: "medium",
		timeStyle: "medium",
	}).format(updatedDate);

	return (
		<>
			<Html>
				<Head />
				<Preview>Thank You for Contacting CRDB Bank Foundation</Preview>
				<Body style={main}>
					<Container style={container}>
						<EmailHeader
							imagesDirUrl={`${imagesDirUrl}/2024/05/CRDB-Bank-Foundation-Email-Header.png`}
						/>
						<Section style={content}>
							<Text style={introParagraph}>Hi {firstName},</Text>
							<Text style={paragraph}>
								Thank you for reaching out to CRDB Bank Foundation regarding{" "}
								{subject}. We have received your website inquiry on{" "}
								{formattedDate} and are eager to assist you with your goals. At
								this moment there is no further action is required from you.
							</Text>
							<Text style={paragraph}>
								Our team is currently reviewing the details you provided, and we
								will get back to you as soon as possible with further
								information and to discuss your requirements in more detail. We
								will get in touch by calling you at {phoneNumber} or either
								emailing you at {email}.
							</Text>
							<Text style={paragraph}>
								In the meantime, if you have any urgent questions or additional
								information you&apos;d like to share, please feel free to reply
								to this email or give us a call at{" "}
								<Link
									href={`tel:${themesOptionsContent?.phoneNumber?.url}`}
									style={link}
								>
									{themesOptionsContent?.phoneNumber?.url}
								</Link>
							</Text>
							<Text style={paragraph}>
								Thank you once again for considering . We are looking forward to
								working with you.
							</Text>
							<Text style={paragraph}>Best regards,</Text>
							<Text style={paragraph}>
								Ms. Tully Esther Mwambapa,
								<br />
								Director,
								<br />
								CRDB Bank Foundation (CBF)
							</Text>
							<Text style={paragraph}>
								Tel:{" "}
								<Link
									href={`tel:${themesOptionsContent?.phoneNumber?.url}`}
									style={link}
								>
									{themesOptionsContent?.phoneNumber?.url}
								</Link>{" "}
								<br />
								Email:{" "}
								<Link
									href={`mailto:${themesOptionsContent?.email?.url}`}
									style={link}
								>
									{themesOptionsContent?.email?.url}
								</Link>
								<br />
								Website:{" "}
								<Link style={link} href={`https://toddowenmpeli.com`}>
									toddowenmpeli.com
								</Link>
							</Text>
						</Section>
						<EmailFooter
							imagesDirUrl={imagesDirUrl}
							themesOptionsContent={themesOptionsContent}
						/>
					</Container>
				</Body>
			</Html>
		</>
	);
};

export default CustomerEnquiryConfirmationEmail;

const fontFamily: string = "PlusJakartaSans,Helvetica,Arial,sans-serif";

const main: ICustomerEmail.IMain = {
	fontFamily,
	padding: "0px",
	backgroundColor: "#ffffff",
};
const introParagraph: ICustomerEmail.IIntroParagraph = {
	lineHeight: 1.5,
	fontSize: 14,
	fontWeight: "600",
	padding: "0.25rem 0.5rem",
	paddingTop: "1.5rem",
};
const paragraph: ICustomerEmail.IParagraph = {
	lineHeight: 1.5,
	fontSize: 14,
	fontWeight: "400",
	padding: "0.25rem 0.5rem",
};
const container: ICustomerEmail.IContainer = {
	maxWidth: "580px",
	margin: "0px auto",
	marginBottom: "0px",
	backgroundColor: "#ffffff",
};
const content: ICustomerEmail.IContent = {
	padding: "10px",
};
const link: ICustomerEmail.ILink = {
	color: "#43b02a",
	textDecoration: "underline",
};
