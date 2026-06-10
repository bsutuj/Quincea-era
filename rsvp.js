exports.handler = async (event) => {

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxMXJYuOukvfYawoIUDu-cyJis1Ip08X1GjvnmcKrXHZz5kNSSVbB1IyVGcuQ_O3ydQPg/exec";

  try {

    const response =
      await fetch(
        GOOGLE_SCRIPT_URL,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: event.body
        }
      );

    const data =
      await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (error) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: true,
        message: error.message
      })
    };

  }

};