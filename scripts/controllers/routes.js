// call the pages

page('/', articleController.reveal);

page('/about', aboutController.reveal);

page('/gitrepos', repoController.reveal);
//now call page.js to make it all run
page();
