const { User } = require("./models");

async function test() {
  try {
    const res = await User.findAll();
    console.log("🚀 ~ test ~ res:", res);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

test();
