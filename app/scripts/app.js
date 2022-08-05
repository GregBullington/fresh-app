var client;

init();

async function init() {
  client = await app.initialized();
  client.events.on("app.activated", renderText);
}

async function renderText() {
  const textElement = document.getElementById("apptext");
  const companyInfo = await client.data.get("company");
  const compId = companyInfo.company.id;
  console.log(
    "!!!!!!!!!!!!!!!!!!!!!!!DATA!!!!!!!!!!!!!!!!!!!!!!!",
    companyInfo
  );

  // const ticketInfo = await client.data.get("ticket");
  // console.log("!!!!!!!!!!!!!!!!!!!!!!!DATA!!!!!!!!!!!!!!!!!!!!!!!", ticketInfo)

  textElement.innerHTML = `
    <small>
      Company Id: 
        <a target="_blank" href="https://xpertdoctechnologies.freshdesk.com/a/companies/${compId}">
          <b>${compId}</b>
        </a>
    </small>
    `;
}
