process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const row = Number(n[0]);
  const col = Number(n[1]);
  for (let i = 0; i < col; i++) {
    console.log("*".repeat(row));
  }
});
