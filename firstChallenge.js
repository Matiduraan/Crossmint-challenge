const firstChallenge = async () => {
  const response = await fetch(
    "https://challenge.crossmint.io/api/map/c40bee73-68b0-4552-ba36-6edc688590e4/goal"
  );
  const { goal } = await response.json();
  goal.forEach((row, indexRow) => {
    row.forEach((column, indexColumn) => {
      if (column === "POLYANET") {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            row: indexRow,
            column: indexColumn,
            candidateId: "c40bee73-68b0-4552-ba36-6edc688590e4",
          }),
        };
        fetch("https://challenge.crossmint.io/api/polyanets", requestOptions);
      }
    });
  });
};
