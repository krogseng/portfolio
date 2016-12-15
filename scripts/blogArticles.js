/* this is the collection of data to load to JQuery for blog posts */
var $newArticle = $('article.template').clone();


/* create one array to hold all the data */
var theLocalData = [
{
  category: 'Fiction',
  author: 'Lynn Krogseng',
  authorUrl: 'http://www.neighborsmarkets.com',
  articleTitle: 'Monkey Motion',
  publishedOn: '2015-10-14',
  articleBody: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus aliquet diam, laoreet auctor leo fringilla sit amet. Sed vitae neque sit amet nisl sodales varius eget sed turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean id cursus massa. Etiam vel dui aliquam, interdum ligula a, laoreet sapien. Nam egestas convallis arcu. Pellentesque congue aliquet varius. Aliquam sed aliquet urna. Proin mattis malesuada mauris, eget tincidunt eros consequat in. Etiam nunc arcu, sagittis vel pulvinar pellentesque, semper malesuada metus. Praesent sed metus consectetur, scelerisque neque quis, imperdiet magna.</p>'
},
{
  category: 'Fiction',
  author: 'Lynn Krogseng',
  authorUrl: 'http://www.neighborsmarkets.com',
  articleTitle: 'More Monkey Motion',
  publishedOn: '2014-11-21',
  articleBody: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus aliquet diam, laoreet auctor leo fringilla sit amet. Sed vitae neque sit amet nisl sodales varius eget sed turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean id cursus massa. Etiam vel dui aliquam, interdum ligula a, laoreet sapien. Nam egestas convallis arcu. Pellentesque congue aliquet varius. Aliquam sed aliquet urna. Proin mattis malesuada mauris, eget tincidunt eros consequat in. Etiam nunc arcu, sagittis vel pulvinar pellentesque, semper malesuada metus. Praesent sed metus consectetur, scelerisque neque quis, imperdiet magna..</p>'
},{
  category: 'Java',
  author: 'Lynn Krogseng',
  authorUrl: 'http://www.neighborsmarkets.com',
  articleTitle: 'Objects I have Known',
  publishedOn: '2016-01-07',
  articleBody: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus aliquet diam, laoreet auctor leo fringilla sit amet. Sed vitae neque sit amet nisl sodales varius eget sed turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean id cursus massa. Etiam vel dui aliquam, interdum ligula a, laoreet sapien. Nam egestas convallis arcu. Pellentesque congue aliquet varius. Aliquam sed aliquet urna. Proin mattis malesuada mauris, eget tincidunt eros consequat in. Etiam nunc arcu, sagittis vel pulvinar pellentesque, semper malesuada metus. Praesent sed metus consectetur, scelerisque neque quis, imperdiet magna..</p>'
},{
  category: 'Javascript',
  author: 'Lynn Krogseng',
  authorUrl: 'http://www.neighborsmarkets.com',
  articleTitle: 'Base',
  publishedOn: '2015-11-01',
  articleBody: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus aliquet diam, laoreet auctor leo fringilla sit amet. Sed vitae neque sit amet nisl sodales varius eget sed turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean id cursus massa. Etiam vel dui aliquam, interdum ligula a, laoreet sapien. Nam egestas convallis arcu. Pellentesque congue aliquet varius. Aliquam sed aliquet urna. Proin mattis malesuada mauris, eget tincidunt eros consequat in. Etiam nunc arcu, sagittis vel pulvinar pellentesque, semper malesuada metus. Praesent sed metus consectetur, scelerisque neque quis, imperdiet magna.</p>'
},{
  category: 'CSS',
  author: 'Lynn Krogseng',
  authorUrl: 'http://www.neighborsmarkets.com',
  articleTitle: 'Styling',
  publishedOn: '2016-01-01',
  articleBody: '<p>This is all I can manage tonight.</p>'
},
];
