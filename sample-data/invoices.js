const { v4: uuidv4 } = require("uuid");

const sampleInvoices = [
  {
    id: "059f02a9-f77e-4a91-812f-4ebb4f79fc6f",
    company_name: "Tech Innovators Inc.",
    customer_name: "John Doe",
    customer_email: "john.doe@example.com",
    created_at: new Date(),
    updated_at: new Date(),
    client_id: "b1d270f7-c9d5-4508-bbe2-094dcf64800e",
  },
  {
    id: "35c5bbac-41c1-4c31-876a-b332fd3f7959",
    company_name: "Green Solutions Ltd.",
    customer_name: "Jane Smith",
    customer_email: "jane.smith@example.com",
    created_at: new Date(),
    updated_at: new Date(),
    client_id: "d333adc3-2b6b-45e7-bd77-d1e020737b9e",
  },
  {
    id: "15deea3c-20dd-471b-912c-80169bc7a5cc",
    company_name: "AI Nexus",
    customer_name: "Emily Johnson",
    customer_email: "emily.johnson@example.com",
    created_at: new Date(),
    updated_at: new Date(),
    client_id: "119f900f-4e45-4ae2-9245-570217417a96",
  },
];

module.exports = sampleInvoices;
