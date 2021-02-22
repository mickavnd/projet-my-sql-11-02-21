exports.getauteurPage= async(req,res)=>{
 const listeAuteur= await querysql('select*from auteur')
 //console.log(listeAuteur);   
res.render('auteur',{auteur:listeAuteur});

}

exports.getauteurSingle = async (req,res)=>{
  const id =req.params.id
    const singleAuteur= await querysql('select*from auteur where auteurId=?',[id])
   // console.log(singleAuteur);
   res.render('auteurSingle',{auteur:singleAuteur[0]})
}



