function showrecentpostswiththumbs(json) {document.write('<ul class="recent_posts_with_thumbs">'); for (var i = 0; i < numposts; i++) {var entry = json.feed.entry[i];var posttitle = entry.title.$t;var posturl;if (i == json.feed.entry.length) break;for (var k = 0; k < entry.link.length;k++){
if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){var commenttext=entry.link[k].title;var commenturl=entry.link[k].href;}
if (entry.link[k].rel == 'alternate') {posturl = entry.link[k].href;break;}}var thumburl;try {thumburl=entry.media$thumbnail.url;}catch (error)


{
s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){
thumburl=d;} else thumburl='https://www.marutisuzuki.com/images/ajax-loader.gif';

}


var postdate = entry.published.$t;var cdyear = postdate.substring(0,4);var cdmonth = postdate.substring(5,7);var cdday = postdate.substring(8,10);var monthnames = new Array();monthnames[1] = "Januari";monthnames[2] = "Februari";monthnames[3] = "Maret";monthnames[4] = "April";monthnames[5] = "Mei";monthnames[6] = "Juni";monthnames[7] = "Juli";monthnames[8] = "Agustus";monthnames[9] = "September";monthnames[10] = "Oktober";monthnames[11] = "November";monthnames[12] = "Desember";document.write('<li class="clearfix">');


if(showpostthumbnails==true) 
document.write('<img class="recent_thumb" src="'+thumburl+'"/>');
document.write('<b><a href="'+posturl+'" target ="_top">'+posttitle+'</a></b><p>');

    if ("content" in entry) {
      var postcontent = entry.content.$t;}
    else
    if ("summary" in entry) {
      var postcontent = entry.summary.$t;}
    else var postcontent = "";
    var re = /<\S[^>]*>/g; 
    postcontent = postcontent.replace(re, "");


if (showpostsummary == true) {

      if (postcontent.length < numchars) {
          document.write('');
         document.write(postcontent);
          document.write('');}
      else {
          document.write('');
         postcontent = postcontent.substring(0, numchars);
         var quoteEnd = postcontent.lastIndexOf(" ");
         postcontent = postcontent.substring(0,quoteEnd);
         document.write(postcontent + '...');
          document.write('');}
}

var towrite='';var flag=0;
document.write('<p><strong>');

if(showpostdate==true) {towrite=towrite+monthnames[parseInt(cdday,10)]+'-'+cdmonth+'-'+cdyear;flag=1;}

if(showcommentnum==true) 
{
if (flag==1) {towrite=towrite+' | ';}
if(commenttext=='1 Comments') commenttext='1 Comment';
if(commenttext=='0 Comments') commenttext='No Comments';
commenttext = '<a href="'+commenturl+'" target ="_top">'+commenttext+'</a>';
towrite=towrite+commenttext;
flag=1;
;
}

if(displaymore==true) 
{
if (flag==1) towrite=towrite+' | ';
towrite=towrite+'<button class="btn btn-default"><a href="'+posturl+'" style="color:#fff;font-size:14px" target ="_top">SEE MORE</a></button>';
flag=1;
;
}




document.write(towrite);

document.write('</strong></li>');
if(displayseparator==true) 
if (i!=(numposts-1))
document.write('<hr color="#d9f1fa" size=0.5>');
}document.write('</ul>');

}
