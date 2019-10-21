var SearchResult=function(e,r,s,t,o,a,i){var n={url:e.url,title:e.title,highlight:e.highlight,meta_description:e.meta_description,salesUrl:r,host:s,showIcon:t,isForum:o,jQueryObject:void 0,careerToCategory:a,degreeToCategory:i};return n.toJQuery=function(){var e="";return(n.highlight||n.meta_description)&&(e=n.isForum?n.highlight:n.meta_description),$('<li class="busca-resultado"><a class="busca-resultado-link" href="'+n.getUrl()+'">'+(n.showIcon?'<img class="busca-resultado-icone" src="'+n.getIcon(n.salesUrl)+'">':"")+'<div class="busca-resultado-container"><h4 class="busca-resultado-nome">'+n.title+'</h4><p class="busca-resultado-descricao">'+e+"</p></div></a></li>")},n.get=function(){return n.jQueryObject},n.isCourseUrl=function(){return n.url.indexOf("curso-online")>=0},n.isCareerUrl=function(){return n.url.indexOf("br/carreira-")>=0},n.isCategoryUrl=function(){return n.url.indexOf("cursos-online")>=0&&n.url.indexOf("tecnologia")<0},n.isDegree=function(){return n.url.indexOf("formacao-")>=0},n.getUrl=function(){return n.isCourseUrl()?n.host+"/course/"+n.getCourseCode():n.isCareerUrl()?n.host+"/career/"+n.getCareerCode():n.isCategoryUrl()?n.host+"/category/"+n.getCategoryCode():n.isDegree()?n.host+"/formacao-"+n.getDegreeCode():n.url},n.getIcon=function(){return n.isCourseUrl()?n.salesUrl+"/assets/api/cursos/"+n.getCourseCode()+".svg":n.isCareerUrl()?n.salesUrl+"/assets/api/carreiras/carreira-"+n.careerToCategory[n.getCareerCode()]+".svg":n.isCategoryUrl()?n.salesUrl+"/assets/api/share/categoria-"+n.getCategoryCode()+".png":n.isDegree()?n.salesUrl+"/assets/api/formacoes/categorias/"+n.degreeToCategory[n.getDegreeCode()]+".svg":n.salesUrl+"/assets/api/share/alura-cursos-online-tecnologia.png"},n.getCareerCode=function(){return n.url.substring(n.url.indexOf("carreira-")+"carreira-".length).split("/")[0]},n.getCourseCode=function(){return n.url.substring(n.url.indexOf("curso-online-")+"curso-online-".length).split("/")[0]},n.getCategoryCode=function(){return n.url.substring(n.url.indexOf("cursos-online-")+"cursos-online-".length).split("/")[0]},n.getDegreeCode=function(){return n.url.split("formacao-")[1].split("/")[0]},n.jQueryObject=n.toJQuery(),{get:n.get}};