const { User, Plan, Invoices } = require("./models");

async function test() {
  try {
    const res = await Plan.findAll();
    console.log("🚀 ~ test ~ res:", res);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

test();
