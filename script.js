var socialMedia = {
  facebook : 'http://facebook.com/viewsource',
  twitter: 'http://twitter.com/planetoftheweb',
  flickr: 'http://flickr.com/planetotheweb',
  youtube: 'http://youtube.com/planetoftheweb'
};

var mediaicons =[
  'facebook.png',
  'twitter.png',
  'flickr.png',
  'youtube.png',
]
 window.onload=function (){

  viewicons()
     viewicons2()



 }

 function viewicons() {
     for (i = 0; i < mediaicons.length; i++) {
         var img = document.createElement('img')
         img.setAttribute('src', `images/${mediaicons[i]}`)

       var x =   document.querySelectorAll('nav.socialmediaicons')

           x[0].append(img);



     }

 }


function viewicons2() {
    for (i = 0; i < mediaicons.length; i++) {
        var img = document.createElement('img')
        img.setAttribute('src', `images/${mediaicons[i]}`)

        var x = document.querySelectorAll('nav.socialmediaicons')

        x[1].append(img);
    }
}