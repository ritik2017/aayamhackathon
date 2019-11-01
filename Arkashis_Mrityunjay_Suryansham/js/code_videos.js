// initialising youtube api call-back function
$(function() {
function init() {
    gapi.client.setApiKey("AIzaSyBAB1bLLCu2MaYPlIM5mH6m_z9Yh5zmEwg");
    gapi.client.load("youtube", "v3", function() {
		var req = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent("TECH FEST NIT AGARTALA").replace(/%20/g, "+"),
            maxResults: 10,
            order: "viewCount"
       });
    
	
	//executing request
	   req.execute(function(rsp) {
          var results = rsp.result;
          $("#div1").html("");
          $.each(results.items, function(index, item) {
            $.get("./res/iframes.html", function(data) {
                $("#div1").append(toIframe(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
            });
          });
		  
       });
	   });
}

	
});
function toIframe(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}


