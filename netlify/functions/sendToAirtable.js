const axios = require("axios");

exports.handler = async (event) => {
  const formData = JSON.parse(event.body);

  try {
    const response = await axios.post(
      "https://api.airtable.com/v0/appm1rsvExrqtPNUp/Portfolio",
      formData,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_PAT}`,
          "Content-Type": "application/json",
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Submitted successfully" }),
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
