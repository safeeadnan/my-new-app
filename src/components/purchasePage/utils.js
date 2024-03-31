import React from "react";

export function generateRandomData() {
    const data = [];
    for (let i = 1; i <= 8; i++) {
      const randomNo = Math.floor(Math.random() * 1000) + 1;
      const randomPrrate = Math.floor(Math.random() * 1000) + 100;
      const randomMrp = randomPrrate + Math.floor(Math.random() * 200) + 50;
      const randomDisc = Math.floor(Math.random() * 20) + 1;
      const randomAmount = Math.floor(randomNo * randomPrrate * (1 - randomDisc / 100));
      const randomGst = Math.floor(randomAmount * (Math.random() * 0.1 + 0.05));
      const randomGstPercentage = Math.floor(Math.random() * 10) + 5;
      data.push({
        id: i,
        productName: `Product is toooooooooooooo big  Name ${i}`,
        qty: randomNo,
        free: randomNo,
        prsz: `S10`,
        tqty: randomNo,
        batchNo: `Batch ${i}`,
        exp: `Exp ${i}`,
        prate: randomPrrate,
        idisc: randomNo,
        sdisc: randomNo,
        stamt: randomNo,
        percentage: randomNo,
        mrp: randomMrp,
        rack: `Rack ${i}`,
      });
    }
    return data;
  }