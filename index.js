class JulTeaCrypto {
    constructor(teaType, cryptoSymbol, brewingTimeSeconds, targetPrice) {
      this.teaType = teaType;
      this.cryptoSymbol = cryptoSymbol;
      this.brewingTimeSeconds = brewingTimeSeconds;
      this.targetPrice = targetPrice;
      this.isBrewing = false;
    }
  
    startBrewing() {
      if (!this.isBrewing) {
        console.log(`JulTeaCrypto is brewing your ${this.teaType}. Please wait for ${this.brewingTimeSeconds} seconds.`);
        this.isBrewing = true;
  
        setTimeout(() => {
          console.log(`Your JulTeaCrypto ${this.teaType} is ready! Enjoy while monitoring ${this.cryptoSymbol} prices.`);
          this.isBrewing = false;
        }, this.brewingTimeSeconds * 1000);
      } else {
        console.log('JulTeaCrypto is already brewing. Please wait for it to finish.');
      }
    }
  
    checkCryptoPrice() {
      console.log(`Checking current ${this.cryptoSymbol} price. Target price: $${this.targetPrice}.`);
      // Implement logic to check the actual crypto price from an API or data source.
      // For the sake of simplicity, a placeholder message is used in this example.
      console.log(`Current ${this.cryptoSymbol} price is fluctuating. Keep an eye on the market.`);
    }
  
    displayJulTeaCryptoInfo() {
      console.log(`
        JulTeaCrypto Information:
        Tea Type: ${this.teaType}
        Crypto Symbol: ${this.cryptoSymbol}
        Brewing Time: ${this.brewingTimeSeconds} seconds
        Target Crypto Price: $${this.targetPrice}
        Brewing Status: ${this.isBrewing ? 'In Progress' : 'Not Brewing'}
      `);
    }
  }
  
  // Example usage
  const festiveTea = new JulTeaCrypto('Festive Blend', 'TEA', 240, 5.00);
  
  festiveTea.displayJulTeaCryptoInfo();
  festiveTea.startBrewing();
  festiveTea.checkCryptoPrice();
  