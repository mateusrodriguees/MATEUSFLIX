let listMoviesImages = ["https://br.web.img2.acsta.net/medias/nmedia/18/89/43/82/20052140.jpg" , "https://br.web.img3.acsta.net/medias/nmedia/18/87/89/83/20028679.jpg" , "https://br.web.img3.acsta.net/pictures/21/04/14/19/06/3385237.jpg" , "https://br.web.img3.acsta.net/medias/nmedia/18/87/35/87/20039778.jpg" , "https://br.web.img2.acsta.net/pictures/210/166/21016629_2013062820083878.jpg", "https://br.web.img3.acsta.net/pictures/22/03/02/19/26/3666027.jpg" , "https://br.web.img3.acsta.net/pictures/21/12/15/16/51/3899884.jpg", "https://br.web.img3.acsta.net/pictures/21/12/06/22/05/3298637.jpg", "https://upload.wikimedia.org/wikipedia/pt/4/4a/Skyfall007.jpg"]

let listMoviesLink = ["https://www.disneyplus.com/pt-br/movies/the-avengers-os-vingadores-da-marvel-studios/2h6PcHFDbsPy" ,"https://globoplay.globo.com/meu-malvado-favorito/t/Xy6HmkQsrM/","https://globoplay.globo.com/velozes-furiosos-9/t/WzmnXCy68x/","https://play.hbomax.com/page/urn:hbo:page:GYOVrkwGAqquiBgEAAAQd:type:feature?source=googleHBOMAX&action=open","https://play.hbomax.com/page/urn:hbo:page:GXdu2RQKDmpuAuwEAADZ2:type:feature?source=googleHBOMAX&action=play","https://www.primevideo.com/dp/amzn1.dv.gti.e78b472d-4cbe-49e9-b05a-ace30495e398?autoplay=0&ref_=atv_cf_strg_wb", "https://play.hbomax.com/page/urn:hbo:page:GYrNiQQwpWMLDwwEAAADJ:type:feature?source=googleHBOMAX&action=open", "https://play.hbomax.com/page/urn:hbo:page:GXdu2VgPdq5uAuwEAADak:type:feature?source=googleHBOMAX&action=play", "https://www.primevideo.com/dp/amzn1.dv.gti.49012885-7ab6-47f8-b8c4-e7869a4658de?autoplay=0&ref_=atv_cf_strg_wb"]
document.write("<div class='container'>")
document.write("<h2 class='page-subtitle'>Filmes Recomendados</h2>")
document.write("<section id='movies'>")
for (var i = 0; i < listMoviesImages.length; i++) {
    document.write("<a href=" + listMoviesLink[i] + " target=_blank>")
    document.write("<img src=" + listMoviesImages[i] + ">")
}
document.writeln("</section>")


let listSeriesImages = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EnHu4wUKaCxXhOAHmvg8vk42wggRPb4D7xtexpavds22e9sWOUz3sVJoLNbVEocqjGo&usqp=CAU", "https://lumiere-a.akamaihd.net/v1/images/twd_kv_bpo_4x5_e469db7e.png","https://musicnonstop.uol.com.br/wp-content/uploads/2021/08/PT-BR_LCDP_S5_Main_Vertical_RGB_PRE.jpg" , "https://br.web.img2.acsta.net/pictures/19/07/10/20/01/2331295.jpg"];

let listSeriesLink = ["https://www.netflix.com/br/title/70143836?source=35","https://www.starplus.com/pt-br/series/the-walking-dead/6FPLfTcQrTpy?distributionPartner=google","https://www.netflix.com/br/title/80192098?source=35", "https://www.netflix.com/br/title/80057281?source=35"]

document.write("<h2 class='page-subtitle'>Séries Recomendadas</h2>")
document.write("<section id='series'>");
for (var i = 0; i < listSeriesImages.length; i++) {
    document.write("<a href=" + listSeriesLink[i] + " target=_blank>");
    document.write("<img src=" + listSeriesImages[i] + ">");
}
document.writeln("</section>");

let listAnimeImages = ["https://upload.wikimedia.org/wikipedia/pt/thumb/5/51/Shingeki_no_Kyojin_1%C2%AA_temporada.jpg/230px-Shingeki_no_Kyojin_1%C2%AA_temporada.jpg" , "https://img.elo7.com.br/product/zoom/1EE247E/big-poster-do-anime-one-punch-man-tamanho-90x-0-cm-lo009-decoracao-geek.jpg" , "https://img1.ak.crunchyroll.com/i/spire1/6a63d28dc4193210a69c83f1fca67bf21325886769_main.jpg" , "https://br.web.img2.acsta.net/pictures/20/08/11/20/56/3761241.jpg" , "https://deathnote.com.br/img/death-note/cover.jpg" , "https://img1.ak.crunchyroll.com/i/spire4/5568ffb263f6bcba85a639980b80dd9a1612993223_main.jpg", "https://infoanime.com.br/wa_1_p/pa_13ddw877z4/big_onepiece.jpg"];

let listAnimeLink = ["https://www.crunchyroll.com/pt-br/maturity_wall?next=%2Fpt-br%2Fattack-on-titan%3Fskip_wall%3D1" , "https://www.crunchyroll.com/pt-br/one-punch-man" , "https://www.crunchyroll.com/pt-br/another" , "https://www.netflix.com/br/title/80050063" , "https://www.netflix.com/br/title/70204970" , "https://www.netflix.com/br/title/70205012","https://www.netflix.com/br/title/80107103"];

document.write("<h2 class='page-subtitle'>Animes Recomendados</h2>")
document.write("<section id='animes'>");
for (var i = 0; i < listAnimeImages.length; i++) {
    document.write("<a href=" + listAnimeLink[i] + " target=_blank>");
    document.write("<img src=" + listAnimeImages[i] + ">");
}
document.writeln("</section>");
document.writeln("</div>");
