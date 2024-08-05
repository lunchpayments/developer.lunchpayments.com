import { CodeBlock, codepen, ocean } from "react-code-blocks";
import { Primary } from "../layouts/Primary";
import { CakeIcon } from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Get your OAuth Credentials",
    description:
      "Your OAuth credentials are used to authenticate requests made when fetching an embed token in the next step. These credentials will be provided to you by Lunch during your organization's onboarding process.",
    code: `const exampleCredentials = {
    clientId: '18de4710-9514-4bbc-987f-e594b1ebf443',
    clientSecret: '721b5faf-778f-4ece-b2be-005e08e99e69',
    username: 'ben@lunchpayments.com',
    password: 'AVerySecretPassword',
};`,
  },
  {
    title: "Create the Embed Token endpoint",
    description:
      "Lunch's embed flow only requires you to create a single endpoint within your API/system. This endpoint is used to generate a short lived embed token that is used to authenticate requests made to the Lunch API from your user interface.",
    code: `const app = express();

app.get('/embed-token', async (req, res) => {
  const response = await fetch('https://api.app.lunchpayments.com/v1/embed-sessions', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      body: JSON.stringify({
          clientId: '18de4710-9514-4bbc-987f-e594b1ebf443',
          clientSecret: '721b5faf-778f-4ece-b2be-005e08e99e69',
          username: 'ben@lunchpayments.com',
          password: 'AVerySecretPassword',
      }),
  });

  const data = await response.json();

  return { token: data.token };
});
`,
  },
  {
    title: "Embed the Lunch Payments Script",
    description:
      "The Lunch Payments embed script is a lightweight script that is used to embed the Lunch payment flow into your user interface. This script is designed to be unobtrusive, so it can be easily embedded into your application.",
    code: `<script src="https://gpn.lunchpayments.com/embed.js"></script>`,
  },
  {
    title: "Add Get Paid Now markup to approved invoices",
    description:
      "The Get Paid Now markup is a simple HTML snippet that powers the embedded flow with a single click. This markup requires minimal information to allow vendors to onboard and get paid on already-approved invoices. Implement this for each invoice that you want to enable Get Paid Now on.",
    code: `<div
  class="lunch-gpn"
  data-embedToken="$EMBED_TOKEN_FROM_PREVIOUS_STEP"
  data-invoiceId="$UNIQUE_INVOICE_ID" // ex: 191387d9-c76a-4a43-b336-1d0f05bd86cf
  data-invoiceNumber="$INVOICE_NUMBER" // ex: 0001
  data-vendorExternalId="$UNIQUE_VENDOR_ID" // ex: 38b7e014-f0af-4dae-953d-fdca6ebfd7e3
  data-customerName="$CUSTOMER_NAME" // ex: Grant School
  data-amount="$INVOICE_AMOUNT" // ex: 1250.13
  data-issuedAt="$ISSUE_DATE" // ex: 2024-07-11
  data-dueAt="$DUE_DATE" // ex: 2024-10-11
></div>`,
  },
  {
    title: "Pat yourself on the back",
    description:
      "You're all set! You can now use the embedded flow to onboard vendors to get paid on approved invoices.",
    element: (
      <div>
        <p className="text-gray-500">
          Having trouble? Reach out to at{" "}
          <span className="text-brand">support@lunchpayments.com</span> for
          support.
        </p>
      </div>
    ),
  },
];

export const EmbeddedGPN = () => {
  return (
    <Primary canGoBack>
      <div className="flex flex-col divide-y divide-solid divide-gray-200 px-4">
        {steps.map((step, index) => (
          <div className="flex flex-col gap-y-4 py-6" key={index}>
            <h2 className="text-xl text-brand font-bold">
              Step {index + 1}. {step.title}
            </h2>
            <p className="text-gray-500">{step.description}</p>
            {step.code && (
              <CodeBlock
                customStyle={{
                  fontSize: "0.8rem",
                }}
                language="javascript"
                text={step.code}
                theme={ocean}
              />
            )}
            {step.element}
          </div>
        ))}
      </div>
    </Primary>
  );
};
