function generatePattern(n) {
    let output = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        output += j;
      }
      output += "**";
      for (let j = i + 1; j <= n; j++) {
        output += j;
      }
      output += "\n";
    }
    return output;
  }
  
  console.log(generatePattern(5));
  console.log(generatePattern(4));