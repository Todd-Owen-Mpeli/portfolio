// Imports
import {render} from "@react-email/components";
import {emailTransporter} from "@/config/nodemailer";
import {IBusinessEmail, ICustomerEmail} from "@/types/email";
import {getThemesOptionsContent} from "@/graphql/GetAllThemesOptions";

// Components
import CustomerEnquiryConfirmationEmail from "@/components/Emails/CustomerEnquiryConfirmationEmail";
import BusinessCustomerEnquiryConfirmationEmail from "@/components/Emails/BusinessCustomerEnquiryConfirmationEmail";

export const sendContactForm = async (data: any) => {
	// If any of these values are undefined
	if (
		!data?.email ||
		!data?.message ||
		!data?.subject ||
		!data?.lastName ||
		!data?.firstName ||
		!data?.phoneNumber
	) {
		console.log(`Error`);
	}

	try {
		const fromEmailHtml: any = process.env.EMAIL_FROM;
		const toEmailHtml: any = process.env.EMAIL_TO;
		const imagesDirUrl: any = process.env.IMAGE_DIR_URL;
		const themesOptionsContent: any = await getThemesOptionsContent();

		/* Render React Customer Enquiry 
			Confirmation Email Component*/
		const customerEmailHtml: string = render(
			<CustomerEnquiryConfirmationEmail
				email={`${data?.email}`}
				imagesDirUrl={imagesDirUrl}
				subject={`${data?.subject}`}
				lastName={`${data?.lastName}`}
				phoneNumber={data?.phoneNumber}
				firstName={`${data?.firstName}`}
				themesOptionsContent={themesOptionsContent}
			/>
		);

		/* Render React Business Customer 
			Enquiry Confirmation Email Component*/
		const businessEmailHtml: string = render(
			<BusinessCustomerEnquiryConfirmationEmail
				email={`${data?.email}`}
				imagesDirUrl={imagesDirUrl}
				subject={`${data?.subject}`}
				message={`${data?.message}`}
				lastName={`${data?.lastName}`}
				phoneNumber={data?.phoneNumber}
				firstName={`${data?.firstName}`}
				themesOptionsContent={themesOptionsContent}
			/>
		);

		/* Customer Enquiry Confirmation Email */
		const customerEmail: ICustomerEmail = {
			from: `${fromEmailHtml}`,
			to: `${data?.email}`,
			subject: `Thank You for Contacting CRDB Bank Foundation`,
			html: customerEmailHtml,
		};

		/* Business Customer Enquiry Confirmation Email */
		const businessEmail: IBusinessEmail = {
			from: `${fromEmailHtml}`,
			to: `${toEmailHtml}`,
			subject: `New Website Inquiry: ${data?.subject}`,
			html: businessEmailHtml,
		};

		// await emailTransporter.sendMail({...customerEmail});
		// await emailTransporter.sendMail({...businessEmail});
	} catch (err) {
		console.log(err);
	}
};
