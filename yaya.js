/* sitemap satu label by penaindigo.com */

var numposts = 100;
var standardstyling = true;

function startpost(json){
  for (var i = 0; i < numposts; i++){
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    
    var label = 'Blogger';
    var text = 'Total post with label';
    var sortby = 'date'; /* 'date' OR 'title' */

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('i a=["\\f\\v\\g\\h\\r\\d","\\v\\g\\b\\e\\d\\b\\1f\\c\\b\\B\\b\\l\\d","\\f\\g\\v","\\m\\w\\b\\b\\j\\f\\m\\r\\u\\f\\d\\f\\m\\j\\b\\w\\e\\k\\c\\d\\m\\S\\m","\\1q\\e\\c\\d\\q\\I\\f\\u\\l\\R\\v\\e\\c\\c\\Z\\e\\v\\1c\\q\\f\\h\\d\\b\\B\\e\\r\\1a\\R\\f\\d\\e\\g\\d\\S\\h\\l\\j\\b\\1g\\q","\\R\\B\\e\\1g\\S\\g\\b\\f\\k\\c\\d\\f\\q","\\e\\r\\r\\b\\l\\j\\1y\\x\\h\\c\\j","\\Z\\u\\j\\P","\\f\\h\\d\\b\\B\\e\\r\\1a","\\W\\b\\d\\1f\\c\\b\\B\\b\\l\\d\\1C\\P\\1B\\j","\\h\\l\\l\\b\\g\\1A\\1z\\1D\\1E","","\\w\\b\\b\\j","\\c\\b\\l\\W\\d\\x","\\b\\l\\d\\g\\P","\\1K\\d","\\d\\h\\d\\c\\b","\\c\\h\\l\\1c","\\g\\b\\c","\\e\\c\\d\\b\\g\\l\\e\\d\\b","\\x\\g\\b\\w","\\r\\k\\f\\x","\\I\\k\\j\\k\\c","\\f\\u\\g\\d","\\p\\c\\h\\o\\p\\e\\y\\x\\g\\b\\w\\q\\t","\\k\\g\\c","\\t\\y\\d\\h\\d\\c\\b\\q\\t","\\t\\o","\\p\\m\\e\\o\\p\\m\\c\\h\\o","\\p\\j\\h\\Y\\y\\v\\c\\e\\f\\f\\q\\t\\I\\k\\j\\k\\c\\t\\o","\\y","\\1h\\y","\\p\\m\\j\\h\\Y\\o\\p\\u\\c\\o","\\p\\m\\u\\c\\o"];i T=1,H=1G,K=1F 1H();V M(){i U=O[a[1]](a[0]);U[a[2]]=a[3]+1b+a[4]+T+a[5]+H;O[a[7]][a[6]](U)}V 1x(X){i J=O[a[9]](a[8]);C(!J){1d};J[a[10]]=a[11];i A=X[a[12]];C(A[a[14]][a[13]]>0){N(i G=0;G<A[a[14]][a[13]];G++){i D=A[a[14]][G];i E=D[a[16]][a[15]];N(i z=0;z<D[a[17]][a[13]];z++){C(D[a[17]][z][a[18]]==a[19]){i F=D[a[17]][z][a[1o]];C(F&&F[a[13]]>0&&E&&E[a[13]]>0){K[a[1I]]({"\\k\\g\\c":F,"\\I\\k\\j\\k\\c":E})};1l}}};C(A[a[14]][a[13]]>=H){T+=H;M()}1i{i Q=a[11],n;i n=(1J===a[16]?K[a[1w]](V(n,1e){1d n[a[L]]>1e[a[L]]?1:-1}):K);N(i s=0;s<n[a[13]];s++){Q+=a[1L]+n[s][a[1v]]+a[1s]+n[s][a[L]]+a[1k]+n[s][a[L]]+a[1j]};J[a[10]]=a[1u]+1m+a[1t]+1b+a[1r]+n[a[13]]+a[1n]+Q+a[1p]}}}M()',62,110,'||||||||||_0x73e9|x65|x6C|x74|x61|x73|x72|x69|var|x64|x75|x6E|x2F|_0x6718x10|x3E|x3C|x3D|x70|_0x6718x12|x22|x6F|x63|x66|x68|x20|_0x6718xd|_0x6718x9|x6D|if|_0x6718xb|_0x6718xc|_0x6718xe|_0x6718xa|max|x6A|_0x6718x8|sitemap6Arr|22|runSitemap6|for|document|x79|_0x6718xf|x26|x2D|start|_0x6718x5|function|x67|_0x6718x7|x76|x62|||||||||||x36|label|x6B|return|_0x6718x11|x45|x78|x3A|else|28|27|break|text|32|20|33|x3F|31|26|30|29|25|23|sitemap6|x43|x54|x48|x49|x42|x4D|x4C|new|150|Array|21|sortby|x24|24'.split('|'),0,{}));
//]]> </script>
    
    if (i == json.feed.entry.length) break;
    
    for (var k = 0; k < entry.link.length; k++){
      if (entry.link[k].rel == 'alternate'){
        posturl = entry.link[k].href;break;
      }
    }
        
    posttitle = posttitle.link(posturl);
    if (standardstyling) document.write('<li>');
    
    document.write(posttitle);
  }
  
  if (standardstyling) document.write('</li>');
}

function finished(){}
