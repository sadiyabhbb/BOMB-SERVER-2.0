const axios = require('axios');

// Bikroy OTP পাঠানোর ফাংশন
async function sendOtp(mobileNumber) {
  try {
    const response = await axios.post(
      `https://bikroy.com/data/phone_number_login/verifications/phone_login?phone=${mobileNumber}`,
      {}, // POST body খালি
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 12; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36'
        }
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

// Optional API info
async function getApiInfo(mobileNumber) {
  return { api: 'Bikroy', mobile: mobileNumber || 'N/A' };
}

// Export
module.exports = { sendOtp, getApiInfo };
