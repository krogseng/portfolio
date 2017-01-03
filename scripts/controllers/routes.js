// call the pages

page('/articles', articleController.reveal);

page('/about', aboutController.reveal);
//now call page.js to make it all run
page();
