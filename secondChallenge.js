function getUrlAndBody(column, indexRow, indexColumn) {
  const candidateId = "c40bee73-68b0-4552-ba36-6edc688590e4";
  const baseParams = { row: indexRow, column: indexColumn, candidateId };

  switch (column) {
    case "POLYANET":
      return {
        url: "https://challenge.crossmint.io/api/polyanets",
        body: baseParams,
      };
    case "UP_COMETH":
      return {
        url: "https://challenge.crossmint.io/api/comeths",
        body: { ...baseParams, direction: "up" },
      };
    case "DOWN_COMETH":
      return {
        url: "https://challenge.crossmint.io/api/comeths",
        body: { ...baseParams, direction: "down" },
      };
    case "RIGHT_COMETH":
      return {
        url: "https://challenge.crossmint.io/api/comeths",
        body: { ...baseParams, direction: "right" },
      };
    case "LEFT_COMETH":
      return {
        url: "https://challenge.crossmint.io/api/comeths",
        body: { ...baseParams, direction: "left" },
      };
    case "PURPLE_SOLOON":
      return {
        url: "https://challenge.crossmint.io/api/soloons",
        body: { ...baseParams, color: "purple" },
      };
    case "RED_SOLOON":
      return {
        url: "https://challenge.crossmint.io/api/soloons",
        body: { ...baseParams, color: "red" },
      };
    case "BLUE_SOLOON":
      return {
        url: "https://challenge.crossmint.io/api/soloons",
        body: { ...baseParams, color: "blue" },
      };
    case "WHITE_SOLOON":
      return {
        url: "https://challenge.crossmint.io/api/soloons",
        body: { ...baseParams, color: "white" },
      };
    default:
      break;
  }
}

async function fetchData() {
  const response = await fetch(
    "https://challenge.crossmint.io/api/map/c40bee73-68b0-4552-ba36-6edc688590e4/goal"
  );
  const { goal } = await response.json();

  const cells = goal.flatMap((row, indexRow) =>
    row.map((column, indexColumn) => ({ column, indexRow, indexColumn }))
  );

  for (const [index, { column, indexRow, indexColumn }] of cells.entries()) {
    const { url, body } = getUrlAndBody(column, indexRow, indexColumn);

    if (url !== "") {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      await fetch(url, requestOptions);
    }
  }
}
