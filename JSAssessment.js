/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
var nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, eyeColor, top, accessory) {
  var nft = {
    name: name,
    eyeColor: eyeColor,
    top: top,
    accessory: accessory
  };
  nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for (var i = 0; i < nftCollection.length; i++) {
    var nft = nftCollection[i];
    console.log("ID: " + (i + 1));
    console.log("name: " + nft.name);
    console.log("eyeColor: " + nft.eyeColor);
    console.log("top: " + nft.top);
    console.log("accessory: " + nft.accessory);
    console.log("=====================");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nftCollection.length;
}

// call your functions below this line
mintNFT("Fade", "Black", "Vest", "Rings");
mintNFT("Killjoy", "Brown", "Jacket", "Eyeglasses");
mintNFT("Sage", "Black", "Traditional Chinese Clothing", "Earrings");
mintNFT("Viper", "Green", "Bodysuit", "Mask");
mintNFT("Jett", "Black", "Sleeveless Jacket", "Gloves");
mintNFT("Astra", "Brown", "Hooded Shawl", "Metal Arm");
mintNFT("Reyna", "Purple", "Skin Tight Suit", "Hoops");

// Return the number of NFT's you have created
listNFTs();
console.log("Total Supply: " + getTotalSupply());
