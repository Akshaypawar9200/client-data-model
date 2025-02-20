const { v4: uuidv4 } = require("uuid");

const sampleInvoices = [
  {
    id: uuidv4(),
    company_name: "Tech Innovators Inc.",
    customer_name: "John Doe",
    customer_email: "john.doe@example.com",
    created_at: new Date(),
    updated_at: new Date(),
    client_id: "b1d270f7-c9d5-4508-bbe2-094dcf64800e",
  },
  {
    id: uuidv4(),
    company_name: "Green Solutions Ltd.",
    customer_name: "Jane Smith",
    customer_email: "jane.smith@example.com",
    created_at: new Date(),
    updated_at: new Date(),
    client_id: "d333adc3-2b6b-45e7-bd77-d1e020737b9e",
  },
  {
    id: uuidv4(),
    company_name: "AI Nexus",
    customer_name: "Emily Johnson",
    customer_email: "emily.johnson@example.com",
    created_at: new Date(),
    updated_at: new Date(),
    client_id: "119f900f-4e45-4ae2-9245-570217417a96",
  },
];

module.exports = sampleInvoices;
