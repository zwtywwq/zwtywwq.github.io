<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/favicon.png");
         document.title = '￣へ￣你给我回来！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/images/favicon.png");
         document.title = '(*/ω＼*)';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });