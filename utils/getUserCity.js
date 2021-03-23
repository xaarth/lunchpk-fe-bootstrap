import axios from 'axios';

const getUserIpDetails = async () => {
  try {
    const { data: res } = await axios.get(`https://api.ipify.org?format=json`);

    const { data: ipDetails } = await axios.get(
      `http://ip-api.com/json/${res.ip}`
    );

    console.log(ipDetails);

    if (ipDetails.status === 'success') {
      return ipDetails;
    }

    return false;
  } catch (err) {
    return false;
  }
};

export default getUserIpDetails;
