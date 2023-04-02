import certificate from "../assets/png/certificate.png";
import udemy from '../assets/png/udemy.jpg';
import solana from '../assets/png/solana.jpg'
import solanaDev from '../assets/png/solanaDev.jpg'
export const achievementData = {
    bio : "Putting quantified achievements on a resume is great, but I just don’t work with hard numbers. I have no data to support the quality of my work. If you have lots of relevant experience, the heading statement of your resume will be a summary.",
    achievements : [
        {
            id : 1,
            title : 'Apprenticeship in Blockchain Development',
            details :`Skills:DeFi,NFTMarketplace,web3,DApps,Hardhat,SmartContracts,JavaScript,Solidity, React.js,Node.js,Ethereum,NFT`,
            date : 'Mar 1, 2022',
            field : 'Blockchain',
            image : certificate
        },
        {
            id : 2,
            title : 'Ethereum Blockchain Developer Bootcamp With Solidity',
            details : `Skills: Decentralized finance,NFT Marketplace, web3.js, Decentralized Applications (DApps), Cryptocurrency, Hardhat, Web3, truffle,Smart Contracts, JavaScript, Solidity, React.js, Node.js, Decentralized finance, Ethereum, Non-Fungible Tokens (NFTs)`,
            date : 'Aug 4, 2022',
            field : 'Blockchain',
            image : udemy 
        },
        {
            id : 3,
            title : 'Learn Solana Development-Web3Js, SmartContract, NFTs',
            details : 'Course of Solana Blockchain for Write smart contract mint nft with help of candy Machine',
            date : 'Jan 2, 2023',
            field : 'Blockchain',
            image : solana
        },
        {
            id : 4,
            title : 'Solana Blockchain Developer Bootcamp with Rust + JavaScript',
            details : 'Course of Solana Blockchain for Write smart contract With Rust',
            date : 'Jan 2, 2023',
            field : 'Blockchain',
            image : solanaDev
        }


    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/