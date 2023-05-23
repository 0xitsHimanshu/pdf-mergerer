//importing the merger
const PDFMerger = require('pdf-merger-js')

var merger = new PDFMerger()
//fuction for merging pdfs 
const mergePDFs = async (p1,p2)=>{
    await merger.add(p1);
    await merger.add(p2)

    //getting timestamp for always a unique name
    let d = new Date().getTime();
    
    await merger.save(`public/${d}.pdf`)

    return d;
}

module.exports = {mergePDFs};