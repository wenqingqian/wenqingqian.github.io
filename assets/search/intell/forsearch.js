//wqq3autoupb
var contentforsearch = [
	{
		id: 0,
		title: 'a post with formatting and links',
		description: 'march & april, looking forward to summer',
		year: '2015',
		tag: 'formatting links',
		category: 'sample-posts',
		content: ` Jean shorts raw denim Vice normcore art party High Life PBR skateboard stumptown vinyl kitsch Four loko meh 8bit tousled banh mi tilde forage Schlitz dreamcatcher twee 3 wolf moon Chambray asymmetrical paleo salvia sartorial umami four loko master cleanse drinking vinegar brunch Pinteresthttpswwwpinterestcom DIY authentic Schlitz hoodie Intelligentsia butcher trust fund brunch shabby chic Kickstarter forage flexitarian Direct trade a hrefhttpsenwikipediaorgwikiColdpressedjuicecoldpresseda meggings stumptown plaid popup taxidermy Hoodie XOXO fingerstache scenester Echo Park Plaid ugh Wes Anderson freegan pug selvage fanny pack leggings pickled food truck DIY irony Banksy   Hipster list ul     librunchli     lifixieli     liraybansli     limessenger bagli ul  Hoodie Thundercats retro tote bag 8bit Godard craft beer gastropub Truffaut Tumblr taxidermy raw denim Kickstarter sartorial dreamcatcher Quinoa chambray slowcarb salvia readymade bicycle rights 90s yr typewriter selfies letterpress cardigan vegan  hr  Pug heirloom High Life vinyl swag singleorigin coffee four dollar toast taxidermy reprehenderit fap distillery master cleanse locavore Est anim sapiente leggings Brooklyn ea Thundercats locavore excepteur veniam eiusmod Raw denim Truffaut Schlitz migas sapiente Portland VHS twee Bushwick Marfa typewriter retro id keytar  blockquote     We do not grow absolutely chronologically We grow sometimes in one dimension and not in another unevenly We grow partially We are relative We are mature in one realm childish in another     —Anais Nin blockquote  Fap aliqua qui scenester pug Echo Park polaroid irony shabby chic ex cardigan churchkey Odd Future accusamus Blog stumptown sartorial squid gastropub duis aesthetic Truffaut vero Pinterest tilde twee odio mumblecore jean shorts lumbersexual`,
		href: 'formatting-and-links'
	},
	{
		id: 1,
		title: 'a post with images',
		description: 'this is what included images could look like',
		year: '2015',
		tag: 'formatting images',
		category: 'sample-posts',
		content: ` This is an example post with image galleries  div classrow mt3     div classcolsm mt3 mtmd0          include figurehtml pathassetsimg9jpg classimgfluid rounded zdepth1      div     div classcolsm mt3 mtmd0          include figurehtml pathassetsimg7jpg classimgfluid rounded zdepth1      div div div classcaption     A simple elegant caption looks good between image rows after each row or doesnt have to be there at all div  Images can be made zoomable Simply add datazoomable to img tags that you want to make zoomable  div classrow mt3     div classcolsm mt3 mtmd0          include figurehtml pathassetsimg8jpg classimgfluid rounded zdepth1 zoomabletrue      div     div classcolsm mt3 mtmd0          include figurehtml pathassetsimg10jpg classimgfluid rounded zdepth1 zoomabletrue      div div  The rest of the images in this post are all zoomable arranged into different minigalleries  div classrow mt3     div classcolsm mt3 mtmd0          include figurehtml pathassetsimg11jpg classimgfluid rounded zdepth1 zoomabletrue      div     div classcolsm mt3 mtmd0          include figurehtml pathassetsimg12jpg classimgfluid rounded zdepth1 zoomabletrue      div     div classcolsm mt3 mtmd0          include figurehtml pathassetsimg7jpg classimgfluid rounded zdepth1 zoomabletrue      div div`,
		href: 'images'
	},
	{
		id: 2,
		title: 'a post with code',
		description: 'an example of a blog post with some code',
		year: '2015',
		tag: 'formatting code',
		category: 'sample-posts',
		content: ` This theme implements a builtin Jekyll feature the use of Rouge for syntax highlighting It supports more than 100 languages This example is in C All you have to do is wrap your code in markdown code tags  markdown c code code code    c int mainint argc char const argv      string myString      cout  input a string      getlinecin myString     int length  myStringlength      char charArray  new char  length      charArray  myString     forint i  0 i  length i         cout  charArrayi              return 0    For displaying code in a list item you have to be aware of the indentation as stated in this Stackoverflow answerhttpsstackoverflowcomquestions34987908embedacodeblockinalistitemwithproperindentationinkramdown3809059838090598 You must indent your code by 3  bulletindentlevel spaces This is because kramdown the markdown engine used by Jekyll indentation for the code block in lists is determined by the column number of the first nonspace character after the list item marker For example  markdown 1 We can put fenced code blocks inside nested bullets too    1 Like this       c       printfHello World            2 The key is to indent your fenced block in the same line as the first character of the line   Which displays  1 We can put fenced code blocks inside nested bullets too    1 Like this       c       printfHello World            2 The key is to indent your fenced block in the same line as the first character of the line  By default it does not display line numbers If you want to display line numbers for every code block you can set kramdownsyntaxhighlighteroptsblocklinenumbers to true in your configyml file  If you want to display line numbers for a specific code block all you have to do is wrap your code in a liquid tag   raw   highlight c linenos   br code code code br  endhighlight   endraw   The keyword linenos triggers display of line numbers Produces something like this   highlight c linenos   int mainint argc char const argv      string myString      cout  input a string      getlinecin myString     int length  myStringlength      char charArray  new char  length      charArray  myString     forint i  0 i  length i         cout  charArrayi              return 0    endhighlight `,
		href: 'code'
	},
	{
		id: 3,
		title: 'a post with disqus comments',
		description: 'an example of a blog post with disqus comments',
		year: '2015',
		tag: 'comments',
		category: 'sample-posts external-services',
		content: ` This post shows how to add DISQUS comments`,
		href: 'disqus-comments'
	},
	{
		id: 4,
		title: 'a post with math',
		description: 'an example of a blog post with some math',
		year: '2015',
		tag: 'formatting math',
		category: 'sample-posts',
		content: ` This theme supports rendering beautiful math in inline and display modes using MathJax 3httpswwwmathjaxorg engine You just need to surround your math expression with  like  E  mc2  If you leave it inside a paragraph it will produce an inline expression just like  E  mc2   To use display mode again surround your expression with  and place it as a separate paragraph Here is an example   sumk1infty langle x ek rangle2 leq x2   You can also use beginequationendequation instead of  for display mode math MathJax will automatically number equations  beginequation labeleqcauchyschwarz left sumk1n ak bk right2 leq left sumk1n ak2 right left sumk1n bk2 right endequation  and by adding label inside the equation environment we can now refer to the equation using eqref  Note that MathJax 3 is a major rewrite of MathJaxhttpsdocsmathjaxorgenlatestupgradingwhatsnew30html that brought a significant improvement to the loading and rendering speed which is now on par with KaTeXhttpwwwintmathcomcg5katexmathjaxcomparisonphp`,
		href: 'math'
	},
	{
		id: 5,
		title: 'a distill-style blog post',
		description: 'an example of a distill-style blog post and main elements',
		year: '2018',
		tag: 'distill formatting',
		category: 'default',
		content: `   Equations  This theme supports rendering beautiful math in inline and display modes using MathJax 3httpswwwmathjaxorg engine You just need to surround your math expression with  like  E  mc2  If you leave it inside a paragraph it will produce an inline expression just like  E  mc2   To use display mode again surround your expression with  and place it as a separate paragraph Here is an example   left sumk1n ak bk right2 leq left sumk1n ak2 right left sumk1n bk2 right   Note that MathJax 3 is a major rewrite of MathJaxhttpsdocsmathjaxorgenlatestupgradingwhatsnew30html that brought a significant improvement to the loading and rendering speed which is now on par with KaTeXhttpwwwintmathcomcg5katexmathjaxcomparisonphp     Citations  Citations are then used in the article body with the dcite tag The key attribute is a reference to the id provided in the bibliography The key attribute can take multiple ids separated by commas  The citation is presented inline like this dcite keygregor2015drawdcite a number that displays more information on hover If you have an appendix a bibliography is automatically created and populated in it  Distill chose a numerical inline citation style to improve readability of citation dense articles and because many of the benefits of longer citations are obviated by displaying more information on hover However we consider it good style to mention author last names if you discuss something at length and it fits into the flow well — the authors are human and it’s nice for them to have the community associate them with their work     Footnotes  Just wrap the text you would like to show up in a footnote in a dfootnote tag The number of the footnote will be automatically generateddfootnoteThis will become a hoverable footnotedfootnote     Code Blocks  Syntax highlighting is provided within dcode tags An example of inline code snippets dcode languagehtmllet x  10dcode For larger blocks of code add a block attribute  dcode block languagejavascript   var x  25   functionx      return x  x    dcode  Note dcode blocks do not look good in the dark mode You can always use the default codehighlight using the highlight liquid tag   highlight javascript  var x  25 functionx    return x  x   endhighlight      Interactive Plots  You can add interative plots using plotly  iframes framedpicture  div classlpage   iframe src assetsplotlydemohtml  relativeurl  frameborder0 scrollingno height500px width100 styleborder 1px dashed greyiframe div  The plot must be generated separately and saved into an HTML file To generate the plot that you see above you can use the following code snippet   highlight python  import pandas as pd import plotlyexpress as px df  pdreadcsv   httpsrawgithubusercontentcomplotlydatasetsmasterearthquakes23kcsv  fig  pxdensitymapbox   df   latLatitude   lonLongitude   zMagnitude   radius10   centerdictlat0 lon180   zoom0   mapboxstylestamenterrain  figshow figwritehtmlassetsplotlydemohtml  endhighlight      Details boxes  Details boxes are collapsible boxes which hide additional information from the user They can be added with the details liquid tag   details Click here to know more  Additional details where math  2x  1  and code is rendered correctly  enddetails      Layouts  The main text column is referred to as the body It is the assumed layout of any direct descendants of the darticle element  div classfakeimg lbody   plbodyp div  For images you want to display a little larger try lpage  div classfakeimg lpage   plpagep div  All of these have an outset variant if you want to poke out from the body text a little bit For instance  div classfakeimg lbodyoutset   plbodyoutsetp div  div classfakeimg lpageoutset   plpageoutsetp div  Occasionally you’ll want to use the full browser width For this use lscreen You can also inset the element a little from the edge of the browser by using the inset variant  div classfakeimg lscreen   plscreenp div div classfakeimg lscreeninset   plscreeninsetp div  The final layout is for marginalia asides and footnotes It does not interrupt the normal flow of lbody sized text except on mobile screen sizes  div classfakeimg lgutter   plgutterp div     Other Typography  Emphasis aka italics with asterisks asterisks or underscores underscores  Strong emphasis aka bold with asterisks or underscores  Combined emphasis with asterisks and underscores  Strikethrough uses two tildes Scratch this  1 First ordered list item 2 Another item ⋅⋅ Unordered sublist 1 Actual numbers dont matter just that its a number ⋅⋅1 Ordered sublist 4 And another item  ⋅⋅⋅You can have properly indented paragraphs within list items Notice the blank line above and the leading spaces at least one but well use three here to also align the raw Markdown  ⋅⋅⋅To have a line break without a paragraph you will need to use two trailing spaces⋅⋅ ⋅⋅⋅Note that this line is separate but within the same paragraph⋅⋅ ⋅⋅⋅This is contrary to the typical GFM line break behaviour where trailing spaces are not required   Unordered list can use asterisks  Or minuses  Or pluses  Im an inlinestyle linkhttpswwwgooglecom  Im an inlinestyle link with titlehttpswwwgooglecom Googles Homepage  Im a referencestyle linkArbitrary caseinsensitive reference text  Im a relative reference to a repository fileblobmasterLICENSE  You can use numbers for referencestyle link definitions1  Or leave it empty and use the link text itself  URLs and URLs in angle brackets will automatically get turned into links httpwwwexamplecom or httpwwwexamplecom and sometimes examplecom but not on Github for example  Some text to show that the reference links can follow later  arbitrary caseinsensitive reference text httpswwwmozillaorg 1 httpslashdotorg link text itself httpwwwredditcom  Heres our logo hover to see the title text  Inlinestyle alt texthttpsgithubcomadampmarkdownhererawmastersrccommonimagesicon48png Logo Title Text 1  Referencestyle alt textlogo  logo httpsgithubcomadampmarkdownhererawmastersrccommonimagesicon48png Logo Title Text 2  Inline code has backticks around it  javascript var s  JavaScript syntax highlighting alerts   python s  Python syntax highlighting print s    No language indicated so no syntax highlighting But lets throw in a btagb   Colons can be used to align columns   Tables         Are            Cool        col 3 is       rightaligned  1600   col 2 is       centered         12   zebra stripes  are neat          1   There must be at least 3 dashes separating each header cell The outer pipes  are optional and you dont need to make the raw Markdown line up prettily You can also use inline Markdown  Markdown  Less  Pretty      Still  renders  nicely 1  2  3   Blockquotes are very handy in email to emulate reply text  This line is part of the same quote  Quote break   This is a very long line that will still be quoted properly when it wraps Oh boy lets keep writing to make sure this is long enough to actually wrap for everyone Oh you can put Markdown into a blockquote   Heres a line for us to start with  This line is separated from the one above by two newlines so it will be a separate paragraph  This line is also a separate paragraph but This line is only separated by a single newline so its a separate line in the same paragraph`,
		href: 'distill'
	},
	{
		id: 6,
		title: 'a post with github metadata',
		description: 'a quick run down on accessing github metadata.',
		year: '2020',
		tag: 'metadata',
		category: 'sample-posts external-services',
		content: `  A sample blog page that demonstrates the accessing of github meta data   What does GithubMetaData do  Propagates the sitegithub namespace with repository metadata  Setting site variables     sitetitle    sitedescription    siteurl    sitebaseurl  Accessing the metadata  duh  Generating edittable links   Additional Reading  If youre recieving incorrectmissing data you may need to perform a Github APIa hrefhttpsgithubcomjekyllgithubmetadatablobmasterdocsauthenticationmd authenticationa  Go through this a hrefhttpsjekyllgithubiogithubmetadataREADMEa for more details on the topic  a href httpsgithubcomjekyllgithubmetadatablobmasterdocssitegithubmdThis pagea highlights all the feilds you can access with githubmetadata br    Example MetaData  Host Name   sitegithubhostname   URL   sitegithuburl   BaseURL   sitegithubbaseurl   Archived   sitegithubarchived  Contributors   for contributor in sitegithubcontributors      contributorlogin   endfor `,
		href: 'github-metadata'
	},
	{
		id: 7,
		title: 'a post with twitter',
		description: 'an example of a blog post with twitter',
		year: '2020',
		tag: 'formatting',
		category: 'sample-posts external-services',
		content: ` A sample blog page that demonstrates the inclusion of TweetsTimelinesetc   Tweet An example of displaying a tweet  twitter httpstwittercomrubygemsstatus518821243320287232    Timeline An example of pulling from a timeline  twitter httpstwittercomjekyllrb maxwidth500 limit3    Additional Details For more details on using the plugin visit jekylltwitterpluginhttpsgithubcomrobmurrayjekylltwitterplugin`,
		href: 'twitter'
	},
	{
		id: 8,
		title: 'a post with diagrams',
		description: 'an example of a blog post with diagrams',
		year: '2021',
		tag: 'formatting diagrams',
		category: 'default',
		content: `  This theme supports generating various diagrams from a text description using jekylldiagramshttpsgithubcomzhustecjekylldiagramstargetblank plugin Below we generate a few examples of such diagrams using languages such as mermaidhttpsmermaidjsgithubiomermaidtargetblank plantumlhttpsplantumlcomtargetblank vegalitehttpsvegagithubiovegalitetargetblank etc  Note different diagramgeneration packages require external dependencies to be installed on your machine Also be mindful of that because of diagram generation the fist time you build your Jekyll website after adding new diagrams will be SLOW For any other details please refer to jekylldiagramshttpsgithubcomzhustecjekylldiagramstargetblank README    Mermaid  Install mermaid using nodejs package manager npm by running the following command bash npm install g mermaidcli   The diagram below was generated by the following code   raw    mermaid  sequenceDiagram     participant John     participant Alice     AliceJohn Hello John how are you     JohnAlice Great  endmermaid    endraw    mermaid  sequenceDiagram     participant John     participant Alice     AliceJohn Hello John how are you     JohnAlice Great  endmermaid `,
		href: 'diagrams'
	},
	{
		id: 9,
		title: 'a post with redirect',
		description: 'you can also redirect to assets like pdf',
		year: '2022',
		tag: 'default',
		category: 'default',
		content: `  Redirecting to another page`,
		href: 'redirect'
	},
	{
		id: 10,
		title: 'a post with giscus comments',
		description: 'an example of a blog post with giscus comments',
		year: '2022',
		tag: 'comments',
		category: 'sample-posts external-services',
		content: ` This post shows how to add GISCUS comments`,
		href: 'giscus-comments'
	},
	{
		id: 11,
		title: 'a post with table of contents',
		description: 'an example of a blog post with table of contents',
		year: '2023',
		tag: 'formatting toc',
		category: 'sample-posts',
		content: ` This post shows how to add a table of contents in the beginning of the post   Adding a Table of Contents  To add a table of contents to a post simply add yml toc   beginning true  to the front matter of the post The table of contents will be automatically generated from the headings in the post   Example of SubHeading 1  Jean shorts raw denim Vice normcore art party High Life PBR skateboard stumptown vinyl kitsch Four loko meh 8bit tousled banh mi tilde forage Schlitz dreamcatcher twee 3 wolf moon Chambray asymmetrical paleo salvia sartorial umami four loko master cleanse drinking vinegar brunch a hrefhttpswwwpinterestcomPinteresta DIY authentic Schlitz hoodie Intelligentsia butcher trust fund brunch shabby chic Kickstarter forage flexitarian Direct trade a hrefhttpsenwikipediaorgwikiColdpressedjuicecoldpresseda meggings stumptown plaid popup taxidermy Hoodie XOXO fingerstache scenester Echo Park Plaid ugh Wes Anderson freegan pug selvage fanny pack leggings pickled food truck DIY irony Banksy   Example of another SubHeading 1  Jean shorts raw denim Vice normcore art party High Life PBR skateboard stumptown vinyl kitsch Four loko meh 8bit tousled banh mi tilde forage Schlitz dreamcatcher twee 3 wolf moon Chambray asymmetrical paleo salvia sartorial umami four loko master cleanse drinking vinegar brunch a hrefhttpswwwpinterestcomPinteresta DIY authentic Schlitz hoodie Intelligentsia butcher trust fund brunch shabby chic Kickstarter forage flexitarian Direct trade a hrefhttpsenwikipediaorgwikiColdpressedjuicecoldpresseda meggings stumptown plaid popup taxidermy Hoodie XOXO fingerstache scenester Echo Park Plaid ugh Wes Anderson freegan pug selvage fanny pack leggings pickled food truck DIY irony Banksy   Table of Contents Options  If you want to learn more about how to customize the table of contents you can check the jekylltochttpsgithubcomtoshimarujekylltoc repository   Example of SubHeading 2  Jean shorts raw denim Vice normcore art party High Life PBR skateboard stumptown vinyl kitsch Four loko meh 8bit tousled banh mi tilde forage Schlitz dreamcatcher twee 3 wolf moon Chambray asymmetrical paleo salvia sartorial umami four loko master cleanse drinking vinegar brunch a hrefhttpswwwpinterestcomPinteresta DIY authentic Schlitz hoodie Intelligentsia butcher trust fund brunch shabby chic Kickstarter forage flexitarian Direct trade a hrefhttpsenwikipediaorgwikiColdpressedjuicecoldpresseda meggings stumptown plaid popup taxidermy Hoodie XOXO fingerstache scenester Echo Park Plaid ugh Wes Anderson freegan pug selvage fanny pack leggings pickled food truck DIY irony Banksy   Example of another SubHeading 2  Jean shorts raw denim Vice normcore art party High Life PBR skateboard stumptown vinyl kitsch Four loko meh 8bit tousled banh mi tilde forage Schlitz dreamcatcher twee 3 wolf moon Chambray asymmetrical paleo salvia sartorial umami four loko master cleanse drinking vinegar brunch a hrefhttpswwwpinterestcomPinteresta DIY authentic Schlitz hoodie Intelligentsia butcher trust fund brunch shabby chic Kickstarter forage flexitarian Direct trade a hrefhttpsenwikipediaorgwikiColdpressedjuicecoldpresseda meggings stumptown plaid popup taxidermy Hoodie XOXO fingerstache scenester Echo Park Plaid ugh Wes Anderson freegan pug selvage fanny pack leggings pickled food truck DIY irony Banksy`,
		href: 'table-of-contents'
	},
	{
		id: 12,
		title: 'displaying beautiful tables with Bootstrap Tables',
		description: 'an example of how to use Bootstrap Tables',
		year: '2023',
		tag: 'formatting tables',
		category: 'sample-posts',
		content: `  Using markdown to display tables is easy Just use the following syntax  markdown  Left aligned  Center aligned  Right aligned          Left 1        center 1        right 1         Left 2        center 2        right 2         Left 3        center 3        right 3          That will generate   Left aligned  Center aligned  Right aligned          Left 1        center 1        right 1         Left 2        center 2        right 2         Left 3        center 3        right 3         pp  It is also possible to use HTML to display tables For example the following HTML code will display a table with Bootstrap Tablehttpsbootstraptablecom loaded from a JSON file   raw   html table   idtable   datatoggletable   dataurl assetsjsontabledatajson  relativeurl    thead     tr       th datafieldidIDth       th datafieldnameItem Nameth       th datafieldpriceItem Priceth     tr   thead table   endraw    table   datatoggletable   dataurl assetsjsontabledatajson  relativeurl    thead     tr       th datafieldidIDth       th datafieldnameItem Nameth       th datafieldpriceItem Priceth     tr   thead table  pp  By using Bootstrap Tablehttpsbootstraptablecom it is possible to create pretty complex tables with pagination search and more For example the following HTML code will display a table loaded from a JSON file with pagination search checkboxes and headercontent alignment For more information check the documentationhttpsexamplesbootstraptablecomindexhtml   raw   html table   dataclicktoselecttrue   dataheight460   datapaginationtrue   datasearchtrue   datatoggletable   dataurl assetsjsontabledatajson  relativeurl    thead     tr       th datacheckboxtrueth       th datafieldid datahalignleft dataaligncenter datasortabletrueIDth       th datafieldname datahaligncenter dataalignright datasortabletrueItem Nameth       th datafieldprice datahalignright dataalignleft datasortabletrueItem Priceth     tr   thead table   endraw    table   dataclicktoselecttrue   dataheight460   datapaginationtrue   datasearchtrue   datatoggletable   dataurl assetsjsontabledatajson  relativeurl    thead     tr       th datacheckboxtrueth       th datafieldid datahalignleft dataaligncenter datasortabletrueIDth       th datafieldname datahaligncenter dataalignright datasortabletrueItem Nameth       th datafieldprice datahalignright dataalignleft datasortabletrueItem Priceth     tr   thead table`,
		href: 'tables'
	},
	{
		id: 13,
		title: 'a post with videos',
		description: 'this is what included videos could look like',
		year: '2023',
		tag: 'formatting videos',
		category: 'sample-posts',
		content: ` This is an example post with videos It supports local video files  div classrow mt3     div classcolsm mt3 mtmd0          include videohtml pathassetsvideopexelsenginakyurt6069112960x54030fpsmp4 classimgfluid rounded zdepth1 controlstrue autoplaytrue      div     div classcolsm mt3 mtmd0          include videohtml pathassetsvideopexelsenginakyurt6069112960x54030fpsmp4 classimgfluid rounded zdepth1 controlstrue      div div div classcaption     A simple elegant caption looks good between video rows after each row or doesnt have to be there at all div  It does also support embedding videos from different sources Here are some examples  div classrow mt3     div classcolsm mt3 mtmd0          include videohtml pathhttpswwwyoutubecomembedjNQXAC9IVRw classimgfluid rounded zdepth1      div     div classcolsm mt3 mtmd0          include videohtml pathhttpsplayervimeocomvideo524933864h1ac4fd9fb4title0byline0portrait0 classimgfluid rounded zdepth1      div div`,
		href: 'videos'
	},
	{
		id: 14,
		title: 'a post with audios',
		description: 'this is what included audios could look like',
		year: '2023',
		tag: 'formatting audios',
		category: 'sample-posts',
		content: ` This is an example post with audios It supports local audio files  div classrow mt3     div classcolsm mt3 mtmd0          include audiohtml pathassetsaudioepicalyshort113909mp3 controlstrue      div     div classcolsm mt3 mtmd0          include audiohtml pathhttpscdnpixabaycomdownloadaudio20220625audio69a61cd6d6mp3 controlstrue      div div div classcaption     A simple elegant caption looks good between video rows after each row or doesnt have to be there at all div`,
		href: 'audios'
	},
	{
		id: 15,
		title: 'a post with table of contents on a sidebar',
		description: 'an example of a blog post with table of contents on a sidebar',
		year: '2023',
		tag: 'formatting toc sidebar',
		category: 'sample-posts',
		content: ` This post shows how to add a table of contents as a sidebar   Adding a Table of Contents  To add a table of contents to a post as a sidebar simply add yml toc   sidebar left  to the front matter of the post The table of contents will be automatically generated from the headings in the post If you wish to display the sidebar to the right simply change left to right   Example of SubHeading 1  Jean shorts raw denim Vice normcore art party High Life PBR skateboard stumptown vinyl kitsch Four loko meh 8bit tousled banh mi tilde forage Schlitz dreamcatcher twee 3 wolf moon Chambray asymmetrical paleo salvia sartorial umami four loko master cleanse drinking vinegar brunch a hrefhttpswwwpinterestcomPinteresta DIY authentic Schlitz hoodie Intelligentsia butcher trust fund brunch shabby chic Kickstarter forage flexitarian Direct trade a hrefhttpsenwikipediaorgwikiColdpressedjuicecoldpresseda meggings stumptown plaid popup taxidermy Hoodie XOXO fingerstache scenester Echo Park Plaid ugh Wes Anderson freegan pug selvage fanny pack leggings pickled food truck DIY irony Banksy   Example of another SubHeading 1  Jean shorts raw denim Vice normcore art party High Life PBR skateboard stumptown vinyl kitsch Four loko meh 8bit tousled banh mi tilde forage Schlitz dreamcatcher twee 3 wolf moon Chambray asymmetrical paleo salvia sartorial umami four loko master cleanse drinking vinegar brunch a hrefhttpswwwpinterestcomPinteresta DIY authentic Schlitz hoodie Intelligentsia butcher trust fund brunch shabby chic Kickstarter forage flexitarian Direct trade a hrefhttpsenwikipediaorgwikiColdpressedjuicecoldpresseda meggings stumptown plaid popup taxidermy Hoodie XOXO fingerstache scenester Echo Park Plaid ugh Wes Anderson freegan pug selvage fanny pack leggings pickled food truck DIY irony Banksy   Customizing Your Table of Contents datatoctextCustomizing  If you want to learn more about how to customize the table of contents of your sidebar you can check the bootstraptochttpsafeldgithubiobootstraptoc documentation Notice that you can even customize the text of the heading that will be displayed on the sidebar   Example of SubHeading 2  Jean shorts raw denim Vice normcore art party High Life PBR skateboard stumptown vinyl kitsch Four loko meh 8bit tousled banh mi tilde forage Schlitz dreamcatcher twee 3 wolf moon Chambray asymmetrical paleo salvia sartorial umami four loko master cleanse drinking vinegar brunch a hrefhttpswwwpinterestcomPinteresta DIY authentic Schlitz hoodie Intelligentsia butcher trust fund brunch shabby chic Kickstarter forage flexitarian Direct trade a hrefhttpsenwikipediaorgwikiColdpressedjuicecoldpresseda meggings stumptown plaid popup taxidermy Hoodie XOXO fingerstache scenester Echo Park Plaid ugh Wes Anderson freegan pug selvage fanny pack leggings pickled food truck DIY irony Banksy   Example of another SubHeading 2  Jean shorts raw denim Vice normcore art party High Life PBR skateboard stumptown vinyl kitsch Four loko meh 8bit tousled banh mi tilde forage Schlitz dreamcatcher twee 3 wolf moon Chambray asymmetrical paleo salvia sartorial umami four loko master cleanse drinking vinegar brunch a hrefhttpswwwpinterestcomPinteresta DIY authentic Schlitz hoodie Intelligentsia butcher trust fund brunch shabby chic Kickstarter forage flexitarian Direct trade a hrefhttpsenwikipediaorgwikiColdpressedjuicecoldpresseda meggings stumptown plaid popup taxidermy Hoodie XOXO fingerstache scenester Echo Park Plaid ugh Wes Anderson freegan pug selvage fanny pack leggings pickled food truck DIY irony Banksy`,
		href: 'sidebar-table-of-contents'
	},
	{
		id: 16,
		title: 'a post with custom blockquotes',
		description: 'an example of a blog post with custom blockquotes',
		year: '2023',
		tag: 'formatting blockquotes',
		category: 'sample-posts',
		content: ` This post shows how to add custom styles for blockquotes Based on jekyllgitbookhttpsgithubcomsighingnowjekyllgitbook implementation  We decided to support the same custom blockquotes as in jekyllgitbookhttpssighingnowgithubiojekyllgitbookjekyll20220630tipswarningsdangershtml which are also found in a lot of other sites styles The styles definitions can be found on the basescsshttpsgithubcomalshedivatalfolioblobmastersassbasescss file more specifically  scss  Tips warnings and dangers  post postcontent blockquote      blocktip      bordercolor varglobaltipblock     backgroundcolor varglobaltipblockbg      p        color varglobaltipblocktext           h1 h2 h3 h4 h5 h6        color varglobaltipblocktitle            blockwarning      bordercolor varglobalwarningblock     backgroundcolor varglobalwarningblockbg      p        color varglobalwarningblocktext           h1 h2 h3 h4 h5 h6        color varglobalwarningblocktitle            blockdanger      bordercolor varglobaldangerblock     backgroundcolor varglobaldangerblockbg      p        color varglobaldangerblocktext           h1 h2 h3 h4 h5 h6        color varglobaldangerblocktitle            A regular blockquote can be used as following  markdown  This is a regular blockquote  and it can be used as usual    This is a regular blockquote  and it can be used as usual  These custom styles can be used by adding the specific class to the blockquote as follows  markdown   TIP   A tip can be used when you want to give advice  related to a certain content  blocktip      TIP   A tip can be used when you want to give advice  related to a certain content  blocktip   markdown   WARNING   This is a warning and thus should  be used when you want to warn the user  blockwarning      WARNING   This is a warning and thus should  be used when you want to warn the user  blockwarning   markdown   DANGER   This is a danger zone and thus should  be used carefully  blockdanger      DANGER   This is a danger zone and thus should  be used carefully  blockdanger `,
		href: 'custom-blockquotes'
	},
	{
		id: 17,
		title: 'a post with jupyter notebook',
		description: 'an example of a blog post with jupyter notebook',
		year: '2023',
		tag: 'formatting jupyter',
		category: 'sample-posts',
		content: `  To include a jupyter notebook in a post you can use the following code   raw   html nomarkdown  assign jupyterpath  assetsjupyterblogipynb  relativeurl   capture notebookexists  fileexists assetsjupyterblogipynb  endcapture   if notebookexists  true       jupyternotebook jupyterpath   else      pSorry the notebook you are looking for does not existp  endif  nomarkdown    endraw   Lets break it down this is possible thanks to Jekyll Jupyter Notebook pluginhttpsgithubcomreddatatoolsjekylljupyternotebook that allows you to embed jupyter notebooks in your posts It basically calls jupyter nbconvert to htmlhttpsnbconvertreadthedocsioenlatestusagehtmlconverthtml to convert the notebook to an html page and then includes it in the post Since Kramdownhttpsjekyllrbcomdocsconfigurationmarkdown is the default Markdown renderer for Jekyll we need to surround the call to the plugin with the nomarkdownhttpskramdowngettalongorgsyntaxhtmlextensions tag so that it stops processing this part with Kramdown and outputs the content asis  The plugin takes as input the path to the notebook but it assumes the file exists If you want to check if the file exists before calling the plugin you can use the fileexists filter This avoids getting a 404 error from the plugin and ending up displaying the main page inside of it instead If the file does not exist you can output a message to the user The code displayed above outputs the following  nomarkdown  assign jupyterpath  assetsjupyterblogipynb  relativeurl   capture notebookexists  fileexists assetsjupyterblogipynb  endcapture   if notebookexists  true       jupyternotebook jupyterpath   else      pSorry the notebook you are looking for does not existp  endif  nomarkdown  Note that the jupyter notebook supports both light and dark themes`,
		href: 'jupyter-notebook'
	},
	{
		id: 18,
		title: 'a post with bibliography',
		description: 'an example of a blog post with bibliography',
		year: '2023',
		tag: 'formatting bib',
		category: 'sample-posts',
		content: ` This post shows how to add bibliography to simple blog posts If you would like something more academic check the distill style post posturl 20181222distill `,
		href: 'post-bibliography'
	},
	{
		id: 19,
		title: 'test my blog',
		description: 'description test',
		year: '2023',
		tag: 'testtag',
		category: 'nettest',
		content: `  sd   sd  sd   sds   sdf  sd  sd  sd  sd   sd  sd   sd   sdsd`,
		href: 'ttestt'
	},

]
//wqq3autoupe
var util = {
	debounce: function(fn,wait){
		var timeout = null;      //定义一个定时器
		return function() {
			if(timeout !== null) 
				clearTimeout(timeout);  //清除这个定时器
			timeout = setTimeout(fn, wait);  
		}
	}
}
function dbintellsearch(){
	util.debounce(intellsearch(),0);
}


function iintellsearch(){
	const timerId = setInterval(intellsearch, 100);
	setTimeout(function() {
		clearInterval(timerId);
		console.log("定时器已停止！");
	}, 1000);
}
function intellsearch(){
	
	
	var inputString = $("#searchInput").val();
	console.log('>'+inputString+'<');
	if(inputString.trim()==""){
		$("#wqq3p").html("");
		return;
	}

	// var inputString = "test";
	var keywords = inputString.split(/\s+/);

	var results = []; // 用于存储每段文本的匹配结果

	// 循环遍历每段文本
	for (var i = 0; i < contentforsearch.length; i++) {
		var text = contentforsearch[i];
		var totalScore = 0; // 用于累积得分
		// 循环遍历每个关键字
		for (var j = 0; j < keywords.length; j++) {
			var keyword = keywords[j];
			
			var fieldValue = text.title;
			var match = fieldValue.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'gi'));
			if(match!=null){
				var matchLength = match.length;	
				matchLength = Math.min(matchLength,1);	
				totalScore += 50*matchLength;
			}

			var fieldValue = text.description;
			var match = fieldValue.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'gi'));
			if(match!=null){
				var matchLength = match.length;	
				matchLength = Math.min(matchLength,1);	
				totalScore += 30*matchLength;
			}

			var fieldValue = text.year;
			var match = fieldValue.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'gi'));
			if(match!=null){
				var matchLength = match.length;	
				matchLength = Math.min(matchLength,1);	
				totalScore += 10*matchLength;
			}

			var fieldValue = text.tag;
			var match = fieldValue.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'gi'));
			if(match!=null){
				var matchLength = match.length;	
				matchLength = Math.min(matchLength,1);	
				totalScore += 50*matchLength;
			}

			var fieldValue = text.category;
			var match = fieldValue.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'gi'));
			if(match!=null){
				var matchLength = match.length;	
				matchLength = Math.min(matchLength,1);	
				totalScore += 50*matchLength;
			}

			var fieldValue = text.content;
			var match = fieldValue.toLowerCase().match(new RegExp(keyword.toLowerCase(), 'gi'));
			if(match!=null){
				var matchLength = match.length;	
				matchLength = Math.min(matchLength,1);	
				totalScore += matchLength;
			}
		}

		// 如果总得分大于等于2，将结果添加到列表中
		if (totalScore >= 1) {
			results.push({ id: text.id, score: totalScore });
		}
	}

	// 根据得分从高到低排序结果
	results.sort(function (a, b) {
		return b.score - a.score;
	});
	

	var contenttopost ="";
	if(results.length>0){
		contenttopost += `
		<li></li>
		`;
	}else{
		$("#wqq3p").html("");

		return;
	}
	// 输出结果
	
	for (var i = 0; i < results.length; i++) {
		var thisreplace = contentforsearch[results[i].id];
		contenttopost += `
		<li>
			<h3> 
				<a class="post-mysm-title" href="/blog/${thisreplace.year}/${thisreplace.href}/">
					${thisreplace.title}
				</a> 
			</h3> 
			<p class="post-mysm-desp">${thisreplace.description}</p> 
			<p class="post-mysm-tags"> 
				<a href="/blog/${thisreplace.year}"> 
					<i class="fas fa-calendar fa-sm"></i> 
					${thisreplace.year}
				</a> 
				&nbsp; &middot; &nbsp; 
		`;
		
		var tag = thisreplace.tag;
		var tags = tag.split(/\s+/);
		for(var s of tags){
			contenttopost+=`
			<a href="/blog/tag/${s}"> 
				<i class="fas fa-hashtag fa-sm"></i> 
				${s}
			</a> 
			&nbsp;
			`
		}
 		contenttopost += `&nbsp; &middot; &nbsp; `;

		var cate = thisreplace.category;
		var cates = cate.split(/\s+/);
		for(var s of cates){
			contenttopost+=`
			<a href="/blog/category/${s}"> 
				<i class="fas fa-tag fa-sm"></i> 
				${s}
			</a> 
			&nbsp;
			`
		}
		contenttopost += `
			</p>
		</li> 
		`;
	}
	$("#wqq3p").html(contenttopost);
	// console.log(contenttopost);
};
