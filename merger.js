//importing the merger
const PDFMerger = require('pdf-merger-js')
const crypto = require('crypto')

const generateUniqueName = () =>{
    const randomByte = crypto.randomBytes(8).toString('hex');
    return randomByte;
}
//fuction for merging pdfs 
const mergePDFs = async (p1,p2)=>{
    const merger = new PDFMerger();
    await merger.add(p1);
    await merger.add(p2)

    //getting unique name
    let name = generateUniqueName()
    
    await merger.save(`public/${name}.pdf`)

    return name;
}

module.exports = {mergePDFs};