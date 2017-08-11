/* */
$(document).ready(function()
 { 
var ada1=[];//ah
var ada11=[];//ah
var ada20=[];//am0
var ada120=[];//am0
var ada2=[];//am
var ada12=[];//am
var ada3=[];//ap
var ada13=[];//ap

var i26=0;
var aquiz=[];
var iques=[];
var aresp=[];
var i27=0;
var alng;
//alog = log4javascript.getDefaultLogger();

   var xhr = new XMLHttpRequest();
    xhr.open('GET', 'ac623.json');
    xhr.onload = function()
     {
      var ajsn0= xhr.responseText;                       
      var ajsn= JSON.parse(ajsn0); 

       alng=ajsn.length;
         $('#ad081').html("there are 10 question from "+alng);
         $.each(ajsn, function(ai,aset)
          {
/*
alert(ai+'ea:'+aset.ah+' '+aset.am0+' '
+aset.am+' '+aset.ap);
*/
            ada1[ai]=aset.ah;
            ada20[ai]=aset.am0;
            ada2[ai]=aset.am;
            ada3[ai]=aset.ap;
/*
alert(ai+'eb:'+ada1[ai]+' '+ada20[ai]+' '
+ada2[ai]+' '+ada3[ai]);
*/
          });//each
 //       alog.info('data was downloaded');
        $('#ad08').popup('open'); 
     };
 xhr.send();

 $('#ab081').on('click',function()
     {
       $('#ad088').hide();
       var a1='';
       var ai1=0;//'0'
       var ai2=0;//score
      for(i2=0;i2<10;i2++)
        {
         var i21=i2+1;
         if(aquiz[i2]=='0')
          {
           if(a1==0){a1+=' '+i21;}
            else{a1+=','+i21;};
            ai1=ai1+1;
         ;}//if
       ;};//for
      if(ai1>0)
       {
        if(ai1==1)
         {
          $('#ad089').html('there is a question without response:'+a1)
        ;}
         else
          {
           $('#ad089').html('the questions without response:'+a1)
         ;};      
      ;}//if>0
       else
        {
          for(i2=0;i2<10;i2++)
           {
             var a2=sessionStorage.getItem(i2);
             if(a2==ada13[i2]){ai2=ai2+1;}
          ;};
          $('#ad089,#ad002').html('score='+ai2);
       ;}
    ;});//on
   $('#ab0811').on('click',function()
     {
      $('#ab0812').show();
       i26=i26+1;
       console.log('i26='+i26);
      if(i26==9)
        {
         $('#ab0811').hide()
         $('#ad088').show();
       ;};
      var ai11;
       ai11="#ai080"+aquiz[i26];
     $(ai11).prop("checked", true);
     $("input[name='ai08n']").checkboxradio("refresh");
     $("#ad085").html(aquiz[i26]);
     var ai7=i26+1;
     var ad7='question '+ai7+':'+ada120[i26]+' ';
      ad7+=' (response:'+ada13[i26]+')';
     $('#ad087').html(ad7);
  var i3=0;//response
  $("input[name='ai08n']").each(function () 
    {
     var a1='';
     var a2=0;
     if(i3>0)
       {
         a1+="'"+i3.toString()+"'"+' '+ada12[i26][i3-1];
        $(this).prev('label').text(a1);
      ;};      
      i3=i3+1;
   ;});
    ;});//click
  $('#ab0812').on('click',function()
     {
       $('#ad089').html('');
       $('#ad088').hide();
       $('#ab0811').show();
        i26=i26-1;
       if(i26==0){$('#ab0812').hide();};
       var ai11;
       ai11="#ai080"+aquiz[i26];
     $(ai11).prop("checked", true);
     $("input[name='ai08n']").checkboxradio("refresh");
     $("#ad085").html(aquiz[i26]);
     var ai7=i26+1;
     var ad7='question '+ai7+':'+ada120[i26]+' ';
       ad7+=' (response:'+ada13[i26]+')';
     $('#ad087').html(ad7);
      var i3=0;//response
   $("input[name='ai08n']").each(function () 
    {
     var a1='';
     var a2=0;
     if(i3>0)
       {
         a1+="'"+i3.toString()+"'"+' '+ada12[i26][i3-1];
        $(this).prev('label').text(a1);
      ;};      
      i3=i3+1;
   ;});
  ;});//click

  $("input[name='ai08n']").on("change", function() 
       {
        if(i26==9)
          {
            $('#ad088').show();
            $('#ad089').html('');
         ;};
     
         aquiz[i26]= $("input[name='ai08n']:checked").val();
        $("#ad085").html(aquiz[i26]);
         aresp[i26]=aquiz[i26];
         sessionStorage.setItem(i26,aresp[i26]);         
      });//onchange

  $('#ab086').on('click',function()
     {
       var i1=0;
      $('#ad087').html('');
      $('#ad089').html('');
      $('#ad088').hide();
      $('#ab0811').show();
      $('#ab0812').hide();

      $("#ai0800").prop("checked", true);
      $("input[name='ai08n']").checkboxradio("refresh");
      for(i1=0;i1<alng;i1++){aquiz[i1]='0'; };
      var a11=$("input[name='ai08n']:checked").val();
      $('#ad085').html(a11); 
    ;});//click


/*after ajax this is the first thing( #aa01) */  
function af001()
 {
    $('#ad001').hide();
    $('#ad088').hide();
    $('#ad089').html('');
    $('#ab0811').show();
    $('#ab0812').hide();
    var i14=10;//10
    var i15=alng-1;//100
    var i16,i17,i18;
    for(i16=0;i16<i14;i16=i16+1)
     {
      do
        {
          i17=0;
          a13=Math.random()*i15;
          a13=Math.ceil(a13);
         for(i18=0;i18<i16;i18=i18+1)
           {
            if(a13==iques[i18]){i17=1;}
          ;}
       ;}//do
      while(i17==1);
 /* alert('iques='+a13);*/
      iques[i16]=a13;
      ada11[i16]=ada1[a13];
      ada120[i16]=ada20[a13];
      ada12[i16]=ada2[a13];;
      ada13[i16]=ada3[a13];
/*
 alert('f081:'+ada11[i16]+' '+ada120[i16]+' 
'+ada12[i16]+' '+ada13[i16]);
*/
    ;}//for

  var i2=0;
  for(i2=0;i2<10;i2++){aquiz[i2]='0';};
   i26=0;//question
    var ad7='question 1:'+ada120[i26]+' ';
     ad7+=' (response:'+ada13[i26]+')';
    $('#ad087').html(ad7);
  var i3=0;//response
  $("input[name='ai08n']").each(function () 
    {
     var a1='';
     var a2=0;
     if(i3>0)
       {
         a1+="'"+i3.toString()+"'";
         a1+=' '+ada12[i26][i3-1];
        $(this).prev('label').text(a1);
      ;};      
      i3=i3+1;
   ;});
aquiz[i26]= $("input[name='ai08n']:checked").val();
            $("#ad085").html(aquiz[i26]);

;};//f001

  
 
$( "#ad08" ).bind({
   popupbeforeposition: function(event, ui)
    {
      af001();
      alert('quiz is ready');
//     alog.info('f was executed');
   ;}
});
 $('#aa01').on('click',function()
   {
//     af001();
//     $('#ad08').popup('open');
  ;});//click

// alog.info('document is ready');
// $('#ad08').popup('open');  
;});//ready_m


$(document).ready(function()
 {
   
;});

$(document).ready(function()
 {
   
;});//ready

$(document).ready(function()
 {
   
;});//ready

$(document).ready(function()
 {
    
;});//onpage



$(document).ready(function()
 {
   
;});//ready

